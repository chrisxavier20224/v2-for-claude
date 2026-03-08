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
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[0]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[0]}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
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
            className={`w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition ${
              errors.firstName ? 'border-destructive' : ''
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-destructive">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
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
            className={`w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition ${
              errors.lastName ? 'border-destructive' : ''
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-destructive">{errors.lastName}</p>
          )}
        </div>
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

export default StepName;
