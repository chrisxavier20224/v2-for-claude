import React, { useState } from 'react';
import { FORM_TITLES, FORM_DESCRIPTIONS, VALIDATION_MESSAGES } from '../constants';

interface StepPhoneProps {
  phone: string;
  onNext: (phone: string) => void;
}

const StepPhone: React.FC<StepPhoneProps> = ({ phone, onNext }) => {
  const [localPhone, setLocalPhone] = useState(phone);
  const [error, setError] = useState<string>('');

  const validatePhone = (input: string): boolean => {
    // UK phone number format: allow various formats
    // Simplified validation - at least 10 digits
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    const digitsOnly = input.replace(/\D/g, '');
    return phoneRegex.test(input) && digitsOnly.length >= 10;
  };

  const handleNext = () => {
    const trimmedPhone = localPhone.trim();

    if (!trimmedPhone) {
      setError(VALIDATION_MESSAGES.phone);
      return;
    }

    if (!validatePhone(trimmedPhone)) {
      setError('Please enter a valid phone number (at least 10 digits)');
      return;
    }

    setError('');
    onNext(trimmedPhone);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[7]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[7]}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={localPhone}
          onChange={(e) => {
            setLocalPhone(e.target.value);
            setError('');
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleNext();
          }}
          placeholder="+44 20 7946 0958"
          className={`w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition ${
            error ? 'border-destructive' : ''
          }`}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
      >
        Continue
      </button>
    </div>
  );
};

export default StepPhone;
