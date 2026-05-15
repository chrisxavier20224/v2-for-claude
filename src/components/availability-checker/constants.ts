export const BRAND_COLORS = {
  blue: '#058ED9',
  green: '#06A77D',
  red: '#F25F5C',
  black: '#1D1D1D',
  yellow: '#FFE900',
};

export const PAIN_POINTS = [
  'Slow broadband',
  'No broadband at all',
  'Unreliable connection',
  'Working from home',
  'Construction site',
  'Farm/rural property',
  'Multiple buildings',
  'Temporary event',
];

export const PRODUCTS = [
  {
    id: 'starlink',
    name: 'Starlink SD-WAN',
    price: '£80+',
    frequency: '/month',
    vat: true,
    description: 'Starlink + 4G/5G failover, professionally installed and managed',
    minPainPoints: 0,
  },
  {
    id: 'integra_pro',
    name: 'Integra Pro',
    price: '£110+',
    frequency: '/month',
    vat: true,
    description: 'Up to 350Mbps multi-network bonding, priority support',
    minPainPoints: 2,
  },
  {
    id: 'ultrafast',
    name: 'Integra Ultrafast',
    price: '£195+',
    frequency: '/month',
    vat: true,
    description: 'Up to 450Mbps across three networks, maximum resilience',
    minPainPoints: 2,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '£400+',
    frequency: '/month',
    vat: true,
    description: 'Up to 500Mbps bonded, 99.99% SLA, dedicated account manager',
    minPainPoints: 3,
  },
  {
    id: 'leased_line',
    name: 'Leased Line',
    price: 'From £400',
    frequency: '/month',
    vat: true,
    description: 'Dedicated Fibre connection, guaranteed speeds, enterprise SLA',
    minPainPoints: 2,
  },
];

export const URGENCY_OPTIONS = [
  { value: 'now', label: 'I need it now', priority: 'high' },
  { value: 'two_weeks', label: 'Within 2 weeks', priority: 'high' },
  { value: 'month', label: 'Within a month', priority: 'medium' },
  { value: 'exploring', label: 'Just exploring', priority: 'low' },
];

export const USER_TYPE_OPTIONS = [
  { value: 'business', label: 'Business', description: 'I run a business with multiple users/locations' },
  { value: 'homeworker', label: 'Home Worker', description: 'I work from home, need reliable connection' },
  { value: 'consumer', label: 'Consumer', description: 'Personal use, looking for home broadband' },
];

export const EMPLOYEE_COUNT_OPTIONS = [
  { value: '1-5', label: '1-5 employees' },
  { value: '6-20', label: '6-20 employees' },
  { value: '21-50', label: '21-50 employees' },
  { value: '50+', label: '50+ employees' },
];

export const CALL_BACK_TIMES = {
  business: { urgent: '2 hours', standard: 'same day' },
  homeworker: { urgent: 'same day', standard: 'next working day' },
  consumer: { urgent: 'same day', standard: 'within 2 working days' },
};

export const NATIONAL_BROADBAND_REFERRAL = 'https://www.national-broadband.co.uk/integra-networks-referral';

export const VALIDATION_MESSAGES = {
  firstName: 'Please enter your first name',
  lastName: 'Please enter your last name',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  postcode: 'Please select a valid address from the dropdown',
  userType: 'Please select a user type',
  urgency: 'Please select how urgent your need is',
  painPoints: 'Please select at least one pain point',
};

export const FORM_TITLES = {
  0: 'What\'s your name?',
  1: 'Company name',
  2: 'What kind of user are you?',
  3: 'How urgent is your need?',
  4: 'What applies to you?',
  5: 'Where are you located?',
  6: 'What\'s your email?',
  7: 'What\'s your phone number?',
  8: 'How many employees?',
};

export const FORM_DESCRIPTIONS = {
  0: 'We\'ll use this to personalize our support',
  1: 'Optional, but helps us tailor our solution',
  2: 'This helps us recommend the right service',
  3: 'Helps us prioritize your inquiry',
  4: 'Select all that apply',
  5: 'So we can check coverage and availability',
  6: 'For our team to contact you',
  7: 'Preferred contact number',
  8: 'Helps us size the right solution',
};
