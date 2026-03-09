import React from 'react';
import { FORM_TITLES, FORM_DESCRIPTIONS, PAIN_POINTS, VALIDATION_MESSAGES } from '../constants';

interface StepPainPointsProps {
  painPoints: string[];
  onNext: (painPoints: string[]) => void;
}

const StepPainPoints: React.FC<StepPainPointsProps> = ({ painPoints, onNext }) => {
  const [localPainPoints, setLocalPainPoints] = React.useState<string[]>(painPoints);
  const [error, setError] = React.useState<string>('');

  const togglePainPoint = (point: string) => {
    setError('');
    setLocalPainPoints((prev) =>
      prev.includes(point)
        ? prev.filter((p) => p !== point)
        : [...prev, point]
    );
  };

  const handleNext = () => {
    if (localPainPoints.length === 0) {
      setError(VALIDATION_MESSAGES.painPoints);
      return;
    }
    onNext(localPainPoints);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-medium text-foreground mb-2">
          What <span className="font-bold">challenges</span> are you facing?
        </h2>
        <p className="text-sm text-muted-foreground">
          Select all that apply. We can help with all of these.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {PAIN_POINTS.map((point) => (
          <button
            key={point}
            onClick={() => togglePainPoint(point)}
            className={`p-4 text-left border-2 rounded-lg transition duration-200 ${
              localPainPoints.includes(point)
                ? 'border-primary bg-primary/10'
                : 'border-border bg-transparent hover:border-border/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-foreground">{point}</p>
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center transition flex-shrink-0 ${
                  localPainPoints.includes(point)
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`}
              >
                {localPainPoints.includes(point) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <span>
          Selected: <strong>{localPainPoints.length}</strong>
        </span>
      </div>

      <button
        onClick={handleNext}
        disabled={localPainPoints.length === 0}
        className={`inline-block px-6 py-2 font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 ${
          localPainPoints.length > 0
            ? 'bg-foreground hover:bg-foreground/90 text-background cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        OK
      </button>
    </div>
  );
};

export default StepPainPoints;
