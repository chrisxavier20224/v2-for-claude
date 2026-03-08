import React from 'react';
import { FORM_TITLES, FORM_DESCRIPTIONS, EMPLOYEE_COUNT_OPTIONS, VALIDATION_MESSAGES } from '../constants';

interface StepEmployeesProps {
  employeeCount: string | undefined;
  onNext: (employeeCount: string) => void;
}

const StepEmployees: React.FC<StepEmployeesProps> = ({ employeeCount = '', onNext }) => {
  const [localCount, setLocalCount] = React.useState(employeeCount);
  const [error, setError] = React.useState<string>('');

  const handleNext = () => {
    if (!localCount) {
      setError(VALIDATION_MESSAGES.painPoints);
      return;
    }
    setError('');
    onNext(localCount);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[8]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[8]}
        </p>
      </div>

      <div className="space-y-3">
        {EMPLOYEE_COUNT_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => {
              setLocalCount(option.value);
              setError('');
            }}
            className={`w-full p-4 text-left border-2 rounded-lg transition duration-200 ${
              localCount === option.value
                ? 'border-primary bg-primary/5'
                : 'border-border bg-card hover:border-border'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-foreground">{option.label}</p>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                  localCount === option.value
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}
              >
                {localCount === option.value && (
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
        onClick={handleNext}
        disabled={!localCount}
        className={`w-full px-6 py-3 font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 ${
          localCount
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default StepEmployees;
