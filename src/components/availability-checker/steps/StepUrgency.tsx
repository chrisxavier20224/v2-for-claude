import React from 'react';
import { Urgency } from '../types';
import { FORM_TITLES, FORM_DESCRIPTIONS, URGENCY_OPTIONS, VALIDATION_MESSAGES } from '../constants';

interface StepUrgencyProps {
  urgency: Urgency | null;
  onNext: (urgency: Urgency) => void;
}

const StepUrgency: React.FC<StepUrgencyProps> = ({ urgency, onNext }) => {
  const [error, setError] = React.useState<string>('');

  const handleSelect = (selected: Urgency) => {
    setError('');
    onNext(selected);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[3]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[3]}
        </p>
      </div>

      <div className="space-y-3">
        {URGENCY_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value as Urgency)}
            className={`w-full p-4 text-left border-2 rounded-lg transition duration-200 ${
              urgency === option.value
                ? 'border-primary bg-primary/5'
                : 'border-border bg-card hover:border-border'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{option.label}</p>
                {option.priority && (
                  <p className="text-xs text-muted-foreground mt-1 capitalize">
                    Priority: {option.priority}
                  </p>
                )}
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                  urgency === option.value
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}
              >
                {urgency === option.value && (
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
          if (urgency) {
            handleSelect(urgency);
          } else {
            setError(VALIDATION_MESSAGES.urgency);
          }
        }}
        disabled={!urgency}
        className={`w-full px-6 py-3 font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 ${
          urgency
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default StepUrgency;
