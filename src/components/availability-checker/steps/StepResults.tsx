import React, { useState, useEffect } from 'react';
import { FormData, RecommendationResponse } from '../types';
import { CALL_BACK_TIMES, NATIONAL_BROADBAND_REFERRAL } from '../constants';

interface StepResultsProps {
  formData: FormData;
  recommendation?: RecommendationResponse;
  isLoading: boolean;
  onBookCall: () => void;
  onReferral: () => void;
}

const StepResults: React.FC<StepResultsProps> = ({
  formData,
  recommendation,
  isLoading,
  onBookCall,
  onReferral,
}) => {
  const [callbackTime, setCallbackTime] = useState<string>('');

  useEffect(() => {
    // Determine callback time based on user type and urgency
    let timeframe = 'same day';

    if (formData.userType === 'business') {
      timeframe = formData.urgency === 'now' || formData.urgency === 'two_weeks' ? '2 hours' : 'same day';
    } else if (formData.userType === 'homeworker') {
      timeframe = formData.urgency === 'now' ? 'same day' : 'next working day';
    } else {
      timeframe = formData.urgency === 'now' ? 'same day' : 'within 2 working days';
    }

    setCallbackTime(timeframe);
  }, [formData.userType, formData.urgency]);

  const handleWhatsApp = () => {
    const message = `Hi Integra Networks, I'm interested in learning more about your broadband solutions for ${formData.userType}. I'm based in ${formData.postcode}.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-medium text-foreground">Thanks, {formData.firstName}!</h2>
        <p className="text-muted-foreground">
          Here's what we recommend for <strong className="text-foreground">{formData.postcode}</strong>
        </p>
      </div>

      {/* Recommendation Card */}
      {recommendation && (
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 space-y-4 text-primary-foreground">
          <div>
            <h3 className="text-2xl font-medium mb-2">{recommendation.product}</h3>
            <p className="text-primary-foreground/90">{recommendation.description}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-medium">{recommendation.price}</span>
            <span className="text-primary-foreground/90">per month +VAT</span>
          </div>
          <p className="text-primary-foreground/80 italic text-sm">
            Professional installation, UK-based support, enterprise-grade equipment included
          </p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center gap-3 bg-muted rounded-lg p-6">
          <div className="animate-spin">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-foreground">Getting your personalized recommendation...</p>
        </div>
      )}

      {/* Next Steps */}
      <div className="bg-card rounded-xl p-6 space-y-3 border border-border">
        <h4 className="font-medium text-foreground text-lg">What happens next?</h4>
        <p className="text-foreground">
          A member of our team will call you within <strong>{callbackTime}</strong> to discuss your needs and provide a tailored solution.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>We'll cover:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Coverage and availability at your location</li>
            <li>Best product match for your use case</li>
            <li>Pricing and installation details</li>
            <li>Support options available</li>
          </ul>
        </div>
      </div>

      {/* Consumer-Only Routing */}
      {formData.userType === 'consumer' && (
        <div className="bg-status-warning/10 border border-status-warning rounded-xl p-6 space-y-4">
          <h4 className="font-medium text-foreground">Pricing Information</h4>
          <p className="text-foreground">
            Our services start from <strong>£80/month+VAT for Starlink SD-WAN</strong>, which includes professional installation, UK-based support, and enterprise-grade equipment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              onClick={onBookCall}
              className="px-6 py-3 bg-status-ok hover:bg-status-ok/90 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
            >
              This works for me — book a call
            </button>
            <button
              onClick={onReferral}
              className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
            >
              Looking for something cheaper
            </button>
          </div>
        </div>
      )}

      {/* Quick Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={onBookCall}
          className="p-4 bg-primary hover:bg-primary/90 rounded-lg transition flex items-center justify-center gap-2 text-primary-foreground font-semibold group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.8c.22 1.371.587 2.905 1.15 4.407a1 1 0 01-.404 1.06l-1.254.816c.64 1.414 1.627 2.86 2.832 4.064 1.204 1.205 2.65 2.191 4.064 2.832l.816-1.254a1 1 0 011.06-.404c1.502.563 3.036.93 4.407 1.15a1 1 0 01.8.986v2.153a1 1 0 01-1 1h-2C7.82 19 4 15.18 4 10.5S7.82 2 12.5 2h2a1 1 0 011 1z" />
          </svg>
          Calendar booking
        </button>

        <button
          onClick={handleWhatsApp}
          className="p-4 bg-status-ok hover:bg-status-ok/90 rounded-lg transition flex items-center justify-center gap-2 text-white font-semibold group"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.37 1.237-3.285 2.151-1.834 1.834-2.846 4.286-2.846 6.884 0 1.766.34 3.433.968 5.01L2.018 22l5.199-1.677A9.857 9.857 0 0012.064 21c2.6 0 5.050-1.011 6.884-2.847 1.835-1.834 2.847-4.286 2.847-6.883s-1.012-5.05-2.847-6.884c-1.834-1.835-4.286-2.846-6.883-2.846z" />
          </svg>
          WhatsApp message
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="text-2xl font-medium text-primary">24/7</div>
          <p className="text-xs text-muted-foreground">UK Support</p>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-medium text-primary">99.9%</div>
          <p className="text-xs text-muted-foreground">Uptime SLA</p>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-medium text-primary">15+</div>
          <p className="text-xs text-muted-foreground">Years Experience</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <button
          onClick={onBookCall}
          className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 text-lg"
        >
          Book a callback now
        </button>
      </div>
    </div>
  );
};

export default StepResults;
