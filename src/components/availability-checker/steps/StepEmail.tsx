import React, { useState } from 'react';
import { FORM_TITLES, FORM_DESCRIPTIONS, VALIDATION_MESSAGES } from '../constants';

interface StepEmailProps {
  email: string;
  onNext: (email: string) => void;
}

const StepEmail: React.FC<StepEmailProps> = ({ email, onNext }) => {
  const [localEmail, setLocalEmail] = useState(email);
  const [error, setError] = useState<string>('');

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleNext = () => {
    const trimmedEmail = localEmail.trim();

    if (!trimmedEmail) {
      setError(VALIDATION_MESSAGES.email);
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    onNext(trimmedEmail);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[6]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[6]}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={localEmail}
          onChange={(e) => {
            setLocalEmail(e.target.value);
            setError('');
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleNext();
          }}
          placeholder="you@company.com"
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

export default StepEmail;
