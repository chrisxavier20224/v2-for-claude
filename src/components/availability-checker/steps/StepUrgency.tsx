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
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          How <span className="font-bold">urgent</span> is your need?
        </h2>
        <p className="text-sm text-muted-foreground">
          This helps us prioritise the right solution for you.
        </p>
      </div>

      <div className="space-y-3">
        {URGENCY_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value as Urgency)}
            className={`w-full p-4 text-left border-2 rounded-lg transition duration-200 ${
              urgency === option.value
                ? 'border-primary bg-primary/10'
                : 'border-border bg-transparent hover:border-border/60'
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
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition flex-shrink-0 ${
                  urgency === option.value
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}
              >
                {urgency === option.value && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
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
        className={`inline-block px-6 py-2 font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 ${
          urgency
            ? 'bg-foreground hover:bg-foreground/90 text-background cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        OK
      </button>
    </div>
  );
};

export default StepUrgency;
