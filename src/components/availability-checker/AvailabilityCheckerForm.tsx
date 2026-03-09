import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFormState } from './hooks/useFormState';
import { useUTMCapture } from './hooks/useUTMCapture';
import { useHubSpotSubmit } from './hooks/useHubSpotSubmit';
import { getRecommendation, saveLeadToSupabase } from './utils/supabaseRecommendation';
import { RecommendationResponse, UserType } from './types';

// Step components
import StepName from './steps/StepName';
import StepCompany from './steps/StepCompany';
import StepUserType from './steps/StepUserType';
import StepUrgency from './steps/StepUrgency';
import StepPainPoints from './steps/StepPainPoints';
import StepPostcode from './steps/StepPostcode';
import StepEmail from './steps/StepEmail';
import StepPhone from './steps/StepPhone';
import StepEmployees from './steps/StepEmployees';
import StepResults from './steps/StepResults';

const AvailabilityCheckerForm: React.FC = () => {
  const { formData, updateField, updateName, updateUserType, updateUrgency, togglePainPoint, updateAddress } =
    useFormState();
  const { submit, isSubmitting } = useHubSpotSubmit();
  const utmParams = useUTMCapture();

  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 to show welcome screen
  const [showWelcome, setShowWelcome] = useState(true);
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [isLoadingRecommendation, setIsLoadingRecommendation] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Determine total steps based on user type
  const getTotalSteps = (): number => {
    // Steps: Name, Company, UserType, Urgency, PainPoints, Postcode, Email, Phone
    // Conditional: Employees (only for Business/HomeWorker)
    // Results page
    const baseSteps = 8;
    const hasEmployeeStep = formData.userType === 'business' || formData.userType === 'homeworker' ? 1 : 0;
    return baseSteps + hasEmployeeStep + 1; // +1 for results page
  };

  const totalSteps = getTotalSteps();
  const progressPercentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleStepName = (firstName: string, lastName: string) => {
    updateName(firstName, lastName);
    setCurrentStep(1);
  };

  const handleStepCompany = (company: string) => {
    updateField('company', company);
    setCurrentStep(2);
  };

  const handleStepUserType = (userType: UserType) => {
    updateUserType(userType);
    setCurrentStep(3);
  };

  const handleStepUrgency = (urgency: any) => {
    updateUrgency(urgency);
    setCurrentStep(4);
  };

  const handleStepPainPoints = (painPoints: string[]) => {
    updateField('painPoints', painPoints);
    setCurrentStep(5);
  };

  const handleStepPostcode = (postcode: string, address: string, full: string) => {
    updateAddress(postcode, address, full);
    setCurrentStep(6);
  };

  const handleStepEmail = (email: string) => {
    updateField('email', email);
    setCurrentStep(7);
  };

  const handleStepPhone = (phone: string) => {
    updateField('phone', phone);
    setCurrentStep(8);
  };

  const handleStepEmployees = (employeeCount: string) => {
    updateField('employeeCount', employeeCount);
    const nextStep = formData.userType === 'business' || formData.userType === 'homeworker' ? 9 : 8;
    setCurrentStep(nextStep);
  };

  const handleSubmitForm = async () => {
    setFormSubmitted(true);
    setIsLoadingRecommendation(true);

    try {
      // Get AI recommendation
      const rec = await getRecommendation(formData);
      if (rec) {
        setRecommendation(rec);
      }

      // Submit to HubSpot
      const hubspotResult = await submit(formData, rec || undefined);

      // Save to Supabase
      if (hubspotResult.success) {
        await saveLeadToSupabase(formData, rec || undefined, hubspotResult.contactId);
      }

      setIsLoadingRecommendation(false);
      setCurrentStep(totalSteps - 1); // Go to results page
    } catch (error) {
      console.error('Form submission error:', error);
      setIsLoadingRecommendation(false);
    }
  };

  const handleBookCall = () => {
    // Redirect to calendar booking widget or contact page
    window.location.href = '/contact?type=callback';
  };

  const handleReferral = () => {
    // Redirect to National Broadband referral
    const NATIONAL_BROADBAND_REFERRAL = 'https://www.national-broadband.co.uk/integra-networks-referral';
    window.location.href = NATIONAL_BROADBAND_REFERRAL;
  };

  const renderWelcome = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-2xl w-full">
          <div
            className="rounded-2xl p-12 sm:p-16 text-center space-y-8"
            style={{
              background: 'radial-gradient(ellipse at 60% 40%, rgba(147, 197, 253, 0.5), rgba(167, 243, 208, 0.3), transparent 70%)',
            }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Fast internet is only a few clicks away.
              </h1>
              <p className="text-lg text-muted-foreground">
                Use our availability checker to see if Integra are installing in your area and if our service is right for you.
              </p>
            </div>

            <button
              onClick={handleStartClick}
              className="inline-block px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition duration-200 transform hover:scale-105 active:scale-95"
            >
              Start
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm0 3.5a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <span>Takes 2 minutes</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepName
            firstName={formData.firstName}
            lastName={formData.lastName}
            onNext={handleStepName}
          />
        );
      case 1:
        return (
          <StepCompany
            company={formData.company}
            onNext={handleStepCompany}
          />
        );
      case 2:
        return (
          <StepUserType
            userType={formData.userType}
            onNext={handleStepUserType}
          />
        );
      case 3:
        return (
          <StepUrgency
            urgency={formData.urgency}
            onNext={handleStepUrgency}
          />
        );
      case 4:
        return (
          <StepPainPoints
            painPoints={formData.painPoints}
            onNext={handleStepPainPoints}
          />
        );
      case 5:
        return (
          <StepPostcode
            postcode={formData.postcode}
            address={formData.address}
            onNext={handleStepPostcode}
          />
        );
      case 6:
        return (
          <StepEmail
            email={formData.email}
            onNext={handleStepEmail}
          />
        );
      case 7:
        return (
          <StepPhone
            phone={formData.phone}
            onNext={handleStepPhone}
          />
        );
      case 8:
        if (formData.userType === 'business' || formData.userType === 'homeworker') {
          return (
            <StepEmployees
              employeeCount={formData.employeeCount}
              onNext={handleStepEmployees}
            />
          );
        } else {
          // Consumer path - submit form
          setTimeout(() => handleSubmitForm(), 0);
          return null;
        }
      case 9:
        return (
          <StepResults
            formData={formData}
            recommendation={recommendation || undefined}
            isLoading={isLoadingRecommendation}
            onBookCall={handleBookCall}
            onReferral={handleReferral}
          />
        );
      default:
        return null;
    }
  };

  // Handle Business/HomeWorker submission after employees step
  useEffect(() => {
    if (
      currentStep === 9 &&
      !formSubmitted &&
      (formData.userType === 'business' || formData.userType === 'homeworker')
    ) {
      handleSubmitForm();
    }
  }, [currentStep]);

  // Handle welcome screen
  const handleStartClick = () => {
    setShowWelcome(false);
    setCurrentStep(0);
  };

  // Handle back button
  const handleBack = () => {
    if (currentStep > 0 && !formSubmitted) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Show welcome screen if needed
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {renderWelcome()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Subtle Progress Bar */}
        {!formSubmitted && currentStep >= 0 && (
          <div className="mb-8">
            <div
              className="h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        )}

        {/* Main Form Area */}
        <motion.div
          key={`step-${currentStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 sm:p-12 space-y-8"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(147, 197, 253, 0.5), rgba(167, 243, 208, 0.3), transparent 70%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {renderStep()}
        </motion.div>

        {/* Back Button */}
        {!formSubmitted && currentStep > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBack}
              className="text-muted-foreground hover:text-foreground font-medium text-sm transition"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-status-ok" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Takes just 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Your data is secure</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Integra Networks Ltd. • UK Business Broadband Specialists
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCheckerForm;
