import React, { useState, useEffect } from 'react';
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

  const [currentStep, setCurrentStep] = useState(0);
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

  // Handle back button
  const handleBack = () => {
    if (currentStep > 0 && !formSubmitted) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Check Your Coverage</h1>
              <p className="text-muted-foreground mt-2">
                Find the perfect broadband solution for your needs
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          {!formSubmitted && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Step {Math.min(currentStep + 1, totalSteps - 1)} of {totalSteps - 1}
                </span>
                <span className="text-primary font-semibold">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Main Form Area */}
        <div className="bg-card rounded-xl border border-border p-8 space-y-6">
          {renderStep()}
        </div>

        {/* Back Button */}
        {!formSubmitted && currentStep > 0 && (
          <div className="mt-6 flex justify-center">
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
