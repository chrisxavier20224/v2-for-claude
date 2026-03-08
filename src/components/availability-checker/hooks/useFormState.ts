import { useState, useCallback } from 'react';
import { FormData, UserType, Urgency } from '../types';

const initialFormState: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  userType: null,
  urgency: null,
  painPoints: [],
  postcode: '',
  address: undefined,
  email: '',
  phone: '',
  employeeCount: '',
};

export const useFormState = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);

  const updateField = useCallback((field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const updateName = useCallback((firstName: string, lastName: string) => {
    setFormData((prev) => ({
      ...prev,
      firstName,
      lastName,
    }));
  }, []);

  const updateUserType = useCallback((userType: UserType) => {
    setFormData((prev) => ({
      ...prev,
      userType,
    }));
  }, []);

  const updateUrgency = useCallback((urgency: Urgency) => {
    setFormData((prev) => ({
      ...prev,
      urgency,
    }));
  }, []);

  const togglePainPoint = useCallback((painPoint: string) => {
    setFormData((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(painPoint)
        ? prev.painPoints.filter((p) => p !== painPoint)
        : [...prev.painPoints, painPoint],
    }));
  }, []);

  const updateAddress = useCallback(
    (postcode: string, address: string, full: string) => {
      setFormData((prev) => ({
        ...prev,
        postcode,
        address: { postcode, address, full },
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
  }, []);

  return {
    formData,
    updateField,
    updateName,
    updateUserType,
    updateUrgency,
    togglePainPoint,
    updateAddress,
    resetForm,
  };
};
