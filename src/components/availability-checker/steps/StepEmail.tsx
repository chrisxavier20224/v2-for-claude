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
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          What's your <span className="font-bold">email</span>?
        </h2>
        <p className="text-sm text-muted-foreground">
          We'll send your results and any relevant updates here.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
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
          className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 text-foreground placeholder-muted-foreground focus:outline-none transition ${
            error ? 'border-b-destructive' : 'border-b-border focus:border-b-primary'
          }`}
        />
        {error && (
          <p className="mt-2 text-sm text-destructive">{error}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="inline-block px-6 py-2 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
      >
        OK
      </button>
    </div>
  );
};

export default StepEmail;
