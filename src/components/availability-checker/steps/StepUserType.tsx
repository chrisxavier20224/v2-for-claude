import React from 'react';
import { UserType } from '../types';
import { FORM_TITLES, FORM_DESCRIPTIONS, USER_TYPE_OPTIONS, VALIDATION_MESSAGES } from '../constants';

interface StepUserTypeProps {
  userType: UserType | null;
  onNext: (userType: UserType) => void;
}

const StepUserType: React.FC<StepUserTypeProps> = ({ userType, onNext }) => {
  const [error, setError] = React.useState<string>('');

  const handleSelect = (selected: UserType) => {
    setError('');
    onNext(selected);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[2]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[2]}
        </p>
      </div>

      <div className="space-y-3">
        {USER_TYPE_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value as UserType)}
            className={`w-full p-4 text-left border-2 rounded-lg transition duration-200 ${
              userType === option.value
                ? 'border-primary bg-primary/5'
                : 'border-border bg-card hover:border-border'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{option.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                  userType === option.value
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}
              >
                {userType === option.value && (
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <button
        onClick={() => {
          if (userType) {
            handleSelect(userType);
          } else {
            setError(VALIDATION_MESSAGES.userType);
          }
        }}
        disabled={!userType}
        className={`w-full px-6 py-3 font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 ${
          userType
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default StepUserType;
