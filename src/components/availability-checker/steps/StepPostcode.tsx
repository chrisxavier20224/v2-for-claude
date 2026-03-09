import React, { useState, useEffect } from 'react';
import { Address } from '../types';
import { FORM_TITLES, FORM_DESCRIPTIONS, VALIDATION_MESSAGES } from '../constants';
import { searchAddresses, formatPostcodeForLookup } from '../utils/idealPostcodes';

interface StepPostcodeProps {
  postcode: string;
  address?: Address;
  onNext: (postcode: string, address: string, full: string) => void;
}

const StepPostcode: React.FC<StepPostcodeProps> = ({ postcode, address, onNext }) => {
  const [searchQuery, setSearchQuery] = useState(postcode);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(address || null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setError('');

    if (query.length < 3) {
      setAddresses([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setHasSearched(true);

    try {
      const results = await searchAddresses(query);
      setAddresses(results);

      if (results.length === 0) {
        setError('No addresses found. Please check your postcode.');
      }
    } catch (err) {
      setError('Error searching addresses. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (!selectedAddress) {
      setError(VALIDATION_MESSAGES.postcode);
      return;
    }

    onNext(selectedAddress.postcode, selectedAddress.address, selectedAddress.full);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-medium text-foreground mb-2">
          What's your <span className="font-bold">postcode</span>?
        </h2>
        <p className="text-sm text-muted-foreground">
          We'll check availability at your address.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Enter Postcode
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="e.g., SW1A 1AA"
              className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 text-foreground placeholder-muted-foreground focus:outline-none transition ${
                error ? 'border-b-destructive' : 'border-b-border focus:border-b-primary'
              }`}
            />
            {isLoading && (
              <div className="absolute right-0 top-2">
                <div className="animate-spin">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          {error && (
            <p className="mt-2 text-sm text-destructive">{error}</p>
          )}
        </div>

        {hasSearched && !isLoading && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {addresses.length === 0
                ? 'No addresses found'
                : `Found ${addresses.length} address${addresses.length !== 1 ? 'es' : ''}`}
            </p>

            {addresses.length > 0 && (
              <div className="max-h-64 overflow-y-auto space-y-2 border border-border rounded-lg p-3 bg-muted/20">
                {addresses.map((addr, index) => (
                  <button
                    key={`${addr.postcode}-${index}`}
                    onClick={() => {
                      setSelectedAddress(addr);
                      setError('');
                    }}
                    className={`w-full p-3 text-left rounded-lg transition border-2 ${
                      selectedAddress?.full === addr.full
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-transparent hover:border-border/60'
                    }`}
                  >
                    <p className="text-foreground font-medium">{addr.address}</p>
                    <p className="text-sm text-muted-foreground">{addr.postcode}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {selectedAddress && (
          <div className="p-3 bg-primary/10 border border-primary rounded-lg">
            <p className="text-sm text-muted-foreground">Selected:</p>
            <p className="text-foreground font-medium">{selectedAddress.address}</p>
            <p className="text-sm text-muted-foreground">{selectedAddress.postcode}</p>
          </div>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedAddress}
        className={`inline-block px-6 py-2 font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 ${
          selectedAddress
            ? 'bg-foreground hover:bg-foreground/90 text-background cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        OK
      </button>
    </div>
  );
};

export default StepPostcode;
