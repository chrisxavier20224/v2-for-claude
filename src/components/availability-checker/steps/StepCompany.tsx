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
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-medium text-foreground mb-2">
          What's your <span className="font-bold">company name</span>?
        </h2>
        <p className="text-sm text-muted-foreground">
          This is optional, but helps us tailor our recommendations.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
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
          className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-b-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-b-primary transition"
        />
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

export default StepCompany;
