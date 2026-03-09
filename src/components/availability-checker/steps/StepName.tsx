import React, { useState } from 'react';
import { FORM_TITLES, FORM_DESCRIPTIONS, VALIDATION_MESSAGES } from '../constants';

interface StepNameProps {
  firstName: string;
  lastName: string;
  onNext: (firstName: string, lastName: string) => void;
}

const StepName: React.FC<StepNameProps> = ({ firstName, lastName, onNext }) => {
  const [localFirstName, setLocalFirstName] = useState(firstName);
  const [localLastName, setLocalLastName] = useState(lastName);
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});

  const validate = (): boolean => {
    const newErrors: { firstName?: string; lastName?: string } = {};

    if (!localFirstName.trim()) {
      newErrors.firstName = VALIDATION_MESSAGES.firstName;
    }
    if (!localLastName.trim()) {
      newErrors.lastName = VALIDATION_MESSAGES.lastName;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext(localFirstName.trim(), localLastName.trim());
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          First up, what's your <span className="font-bold">name</span>?
        </h2>
        <p className="text-sm text-muted-foreground">
          We'll use this to personalise your results.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            First Name
          </label>
          <input
            type="text"
            value={localFirstName}
            onChange={(e) => {
              setLocalFirstName(e.target.value);
              setErrors({ ...errors, firstName: '' });
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleNext();
            }}
            placeholder="Enter your first name"
            className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition ${
              errors.firstName ? 'border-b-destructive' : 'border-b-border'
            }`}
          />
          {errors.firstName && (
            <p className="mt-2 text-sm text-destructive">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Last Name
          </label>
          <input
            type="text"
            value={localLastName}
            onChange={(e) => {
              setLocalLastName(e.target.value);
              setErrors({ ...errors, lastName: '' });
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleNext();
            }}
            placeholder="Enter your last name"
            className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition ${
              errors.lastName ? 'border-b-destructive' : 'border-b-border'
            }`}
          />
          {errors.lastName && (
            <p className="mt-2 text-sm text-destructive">{errors.lastName}</p>
          )}
        </div>
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

export default StepName;
