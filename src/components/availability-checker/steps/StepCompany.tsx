import React, { useState } from 'react';
import { FORM_TITLES, FORM_DESCRIPTIONS } from '../constants';

interface StepCompanyProps {
  company: string | undefined;
  onNext: (company: string) => void;
}

const StepCompany: React.FC<StepCompanyProps> = ({ company = '', onNext }) => {
  const [localCompany, setLocalCompany] = useState(company);

  const handleNext = () => {
    // Company is optional, so we can proceed with empty value
    onNext(localCompany.trim());
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {FORM_TITLES[1]}
        </h2>
        <p className="text-muted-foreground">
          {FORM_DESCRIPTIONS[1]}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Company Name (Optional)
        </label>
        <input
          type="text"
          value={localCompany}
          onChange={(e) => setLocalCompany(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleNext();
          }}
          placeholder="Enter your company name"
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
        />
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

export default StepCompany;
