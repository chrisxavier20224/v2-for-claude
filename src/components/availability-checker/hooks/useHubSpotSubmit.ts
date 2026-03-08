import { useState, useCallback } from 'react';
import { FormData, RecommendationResponse } from '../types';
import { submitToHubSpot } from '../utils/hubspotApi';
import { getUTMParamsFromStorage } from './useUTMCapture';

interface SubmitResult {
  success: boolean;
  contactId?: string;
  dealId?: string;
  error?: string;
}

export const useHubSpotSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = useCallback(
    async (formData: FormData, recommendation?: RecommendationResponse): Promise<SubmitResult> => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const utmParams = getUTMParamsFromStorage();

        const result = await submitToHubSpot(formData, utmParams, recommendation);

        if (!result.success) {
          throw new Error(result.error || 'Failed to submit form');
        }

        setIsSubmitting(false);
        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        setSubmitError(errorMessage);
        setIsSubmitting(false);
        return {
          success: false,
          error: errorMessage,
        };
      }
    },
    []
  );

  return {
    submit,
    isSubmitting,
    submitError,
  };
};
