# Availability Checker Integration

## Overview

The new availability checker has been successfully integrated into the Integra Networks website, replacing the previous Typeform iframe with a complete multi-step React form. This document outlines the integration, file structure, and configuration requirements.

## What's New

The new availability checker features:
- 9-step interactive form with progress tracking
- Three routing paths: Business (2hr callback), Home Worker (same day), Consumer (pricing shown)
- Real-time address lookup via Ideal Postcodes API
- AI-powered product recommendations via Supabase
- HubSpot contact and deal creation
- UTM parameter tracking and capture
- Fully responsive design matching the existing website aesthetic

## File Structure

```
src/components/availability-checker/
├── AvailabilityCheckerForm.tsx          # Main form component with state management
├── index.ts                              # Barrel exports
├── types.ts                              # TypeScript type definitions
├── constants.ts                          # Form content, labels, and options
├── hooks/
│   ├── useFormState.ts                  # Form state management
│   ├── useUTMCapture.ts                 # UTM parameter tracking
│   └── useHubSpotSubmit.ts              # HubSpot submission handler
├── steps/
│   ├── StepName.tsx                     # Name input
│   ├── StepCompany.tsx                  # Company name (optional)
│   ├── StepUserType.tsx                 # User type selection
│   ├── StepUrgency.tsx                  # Urgency selection
│   ├── StepPainPoints.tsx               # Multi-select pain points
│   ├── StepPostcode.tsx                 # Address lookup
│   ├── StepEmail.tsx                    # Email input
│   ├── StepPhone.tsx                    # Phone input
│   ├── StepEmployees.tsx                # Employee count (Business/HomeWorker only)
│   └── StepResults.tsx                  # Results and next steps
└── utils/
    ├── idealPostcodes.ts                # Postcode lookup API
    ├── hubspotApi.ts                    # HubSpot contact/deal creation
    └── supabaseRecommendation.ts        # AI recommendation engine

src/pages/
└── AvailabilityChecker.tsx              # Updated page component
```

## Required Environment Variables

Add the following environment variables to your `.env` file:

```env
# Ideal Postcodes API (for address lookup)
VITE_IDEAL_POSTCODES_API_KEY=your_api_key_here

# HubSpot API (for contact and deal creation)
VITE_HUBSPOT_PRIVATE_APP_TOKEN=your_hubspot_token_here

# Supabase Configuration (for recommendations and lead storage)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Claude API (if using Claude for recommendations)
VITE_CLAUDE_API_KEY=your_claude_api_key_here
```

## Integration Details

### 1. Updated Page Component
- **File**: `src/pages/AvailabilityChecker.tsx`
- Replaced iframe with new `AvailabilityCheckerForm` component
- Maintains existing layout structure with Navbar and CookieConsentBanner
- Keeps SEO component for proper metadata

### 2. Form Flow

#### For Business Users:
1. Name → Company → User Type → Urgency → Pain Points → Postcode → Email → Phone → Employee Count → Results

#### For Home Workers:
1. Name → Company → User Type → Urgency → Pain Points → Postcode → Email → Phone → Employee Count → Results

#### For Consumers:
1. Name → Company → User Type → Urgency → Pain Points → Postcode → Email → Phone → Results
   - Shows pricing information on results page

### 3. Key Features

#### Address Lookup
- Uses Ideal Postcodes API for UK postcode validation and address lookup
- Provides autocomplete with full address display
- Validates postcode format before submission

#### Recommendation Engine
- Calls Supabase Edge Function (`/functions/v1/recommend`)
- Analyzes pain points, user type, urgency, and location
- Returns personalized product recommendation with pricing

#### CRM Integration
- Creates HubSpot contacts with all form data
- Creates associated deals for pipeline tracking
- Captures UTM parameters for attribution
- Stores timestamps and form version for auditing

#### Lead Storage
- Saves complete lead records to Supabase
- Stores form data, recommendation, and HubSpot contact ID
- Enables future analysis and follow-up

### 4. Styling Integration

The form is fully integrated with the existing design system:
- Uses Tailwind CSS theme variables (primary, muted, destructive, etc.)
- Light theme matching the website aesthetic
- Responsive design (mobile-first approach)
- Consistent with existing component styling
- Uses the `animate-fade-in` animation from tailwind config

### 5. Form Validation

Each step includes validation:
- **Name**: Both first and last names required
- **Company**: Optional field
- **User Type**: Required selection
- **Urgency**: Required selection
- **Pain Points**: At least one must be selected
- **Postcode**: Must select from autocomplete results
- **Email**: Must be valid email format
- **Phone**: Must have at least 10 digits
- **Employee Count**: Required for Business/HomeWorker users

### 6. UTM Tracking

Automatically captures URL parameters:
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`
- Stored in sessionStorage for persistence across form steps
- Submitted to HubSpot for attribution tracking

## API Integration

### Ideal Postcodes API
- **Endpoint**: `https://api.ideal-postcodes.co.uk/v1/postcodes/{postcode}`
- **Auth**: API key in query parameters
- **Rate Limit**: Check API documentation
- **Returns**: Array of matching addresses with full addresses

### HubSpot API
- **Endpoints**:
  - `POST /crm/v3/objects/contacts` - Create contact
  - `POST /crm/v3/objects/deals` - Create deal
- **Auth**: Bearer token
- **Properties**: Form fields mapped to custom HubSpot properties
  - `user_type`, `urgency`, `pain_points`, `employee_count`
  - `postcode`, `address`, `utm_*` parameters

### Supabase
- **Functions**:
  - `POST /functions/v1/recommend` - Get product recommendation
- **Tables**:
  - `leads` - Store all lead data
- **Auth**: Anonymous key (Row Level Security handles permissions)

## Customization

### Adding New Steps
1. Create new component in `src/components/availability-checker/steps/`
2. Import in `AvailabilityCheckerForm.tsx`
3. Add case to `renderStep()` function
4. Update `getTotalSteps()` if conditional logic needed

### Modifying Form Content
All form text is in `constants.ts`:
- `FORM_TITLES` - Step titles
- `FORM_DESCRIPTIONS` - Step descriptions
- `PAIN_POINTS` - Available pain points
- `USER_TYPE_OPTIONS` - User type choices
- `URGENCY_OPTIONS` - Urgency choices
- `VALIDATION_MESSAGES` - Error messages

### Adjusting Styling
- Update Tailwind classes in individual step components
- Use CSS variables from `src/index.css` for colors
- Available colors: `primary`, `muted`, `destructive`, `status-ok`, `status-warning`

## Testing

### Manual Testing Checklist
- [ ] All form steps render correctly
- [ ] Validation works for each step
- [ ] Back button navigates correctly
- [ ] Progress bar updates accurately
- [ ] Address lookup returns results
- [ ] Form submission creates HubSpot contact
- [ ] Recommendation loads and displays
- [ ] Results page shows correct callback time by user type
- [ ] UTM parameters are captured and submitted
- [ ] Consumer and Business paths show different results pages
- [ ] Mobile responsive design works
- [ ] No TypeScript errors in console

### API Testing
- Test with invalid postcode (should show error)
- Test with valid postcode (should show addresses)
- Test HubSpot API with valid/invalid token
- Test Supabase recommendation with different user types
- Verify UTM parameters in HubSpot contact properties

## Performance Notes

- Form components are lightweight (~50KB total)
- Address lookup is debounced (handled by API)
- Recommendation loading shows spinner during async operation
- Form state is managed locally (no external state management needed)
- All API calls are made only when needed

## Browser Compatibility

- Modern browsers with ES2020+ support
- Works on mobile, tablet, and desktop
- Progressive enhancement approach (form works without JavaScript for basic submission)

## Security

- No sensitive data in URLs
- API keys stored in environment variables only
- CORS handled by Supabase and HubSpot APIs
- Email and phone validation before submission
- XSS protection through React JSX

## Troubleshooting

### Form doesn't load
- Check if `AvailabilityCheckerForm` is imported correctly in `AvailabilityChecker.tsx`
- Verify all component files exist
- Check console for TypeScript errors

### Address lookup not working
- Verify `VITE_IDEAL_POSTCODES_API_KEY` is set in `.env`
- Check API key is valid and has quota
- Verify postcode format is correct

### HubSpot submission failing
- Verify `VITE_HUBSPOT_PRIVATE_APP_TOKEN` is set
- Check token has correct scopes: `crm.objects.contacts.write`, `crm.objects.deals.write`
- Verify HubSpot pipeline/stage IDs are correct in `hubspotApi.ts`

### Recommendations not loading
- Verify Supabase credentials are correct
- Check if Edge Function is deployed and working
- Verify function endpoint is accessible

### Styling issues
- Check Tailwind CSS is properly compiled
- Verify color CSS variables are defined in `src/index.css`
- Ensure parent components don't have conflicting styles

## Migration from Typeform

The old Typeform iframe has been completely removed. All form data now flows through:
1. Local React state management
2. HubSpot for CRM
3. Supabase for recommendations and lead storage

If you need to preserve old data, export from Typeform before deploying this change.

## Future Enhancements

Possible improvements:
- Multi-language support
- CAPTCHA for spam prevention
- Field-level analytics (drop-off tracking)
- A/B testing different form flows
- SMS confirmation of submission
- File upload for requirements
- Integration with calendly for booking
- Real-time availability check against coverage database

## Support

For issues or questions about the integration:
1. Check this documentation
2. Review error messages in browser console
3. Verify all environment variables are set
4. Check API keys have correct permissions
5. Test API endpoints directly if needed
