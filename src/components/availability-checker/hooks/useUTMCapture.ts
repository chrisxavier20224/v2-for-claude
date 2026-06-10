import { useEffect } from 'react';
import { UTMParams } from '../types';
import { captureLeadAttribution, getLeadAttribution } from '@/lib/leadAttribution';

export const useUTMCapture = (): UTMParams => {
  useEffect(() => {
    captureLeadAttribution();
  }, []);
  return getLeadAttribution() as UTMParams;
};

export const getUTMParamsFromStorage = (): UTMParams => getLeadAttribution() as UTMParams;