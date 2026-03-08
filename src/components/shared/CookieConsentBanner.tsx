import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  targeting: boolean;
  personalisation: boolean;
  analytics: boolean;
}

const COOKIE_CONSENT_KEY = "nexr-cookie-consent";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    targeting: false,
    personalisation: false,
    analytics: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!storedConsent) {
      setIsVisible(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleSave = () => {
    savePreferences(preferences);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      targeting: true,
      personalisation: true,
      analytics: true,
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      targeting: false,
      personalisation: false,
      analytics: false,
    };
    setPreferences(essentialOnly);
    savePreferences(essentialOnly);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-xl border border-border/50 bg-card/95 backdrop-blur-md shadow-2xl">
        <div className="p-4 md:p-6">
          {/* Main content */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to help personalise content, tailor and measure ads, 
              and provide a better experience. By clicking 'Accept All' or turning on an option in 
              'Storage Preferences', you agree to this as outlined in our{" "}
              <Link to="/privacy-cookies" className="text-primary hover:underline">
                Privacy & Cookies Policy
              </Link>
              . To change preferences or withdraw consent, please update your 'Storage Preferences'.
            </p>
          </div>

          {/* Expandable Storage Preferences */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-foreground mb-4 hover:text-primary transition-colors"
            aria-expanded={isExpanded}
          >
            Storage Preferences
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {isExpanded && (
            <div className="mb-4 space-y-3 rounded-lg bg-muted/30 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">Essential</span>
                  <p className="text-xs text-muted-foreground">Required for the website to function</p>
                </div>
                <Switch checked={true} disabled aria-label="Essential cookies (always on)" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">Targeted Advertising</span>
                  <p className="text-xs text-muted-foreground">Used for targeted advertising</p>
                </div>
                <Switch
                  checked={preferences.targeting}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, targeting: checked }))
                  }
                  aria-label="Targeted advertising cookies"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">Personalisation</span>
                  <p className="text-xs text-muted-foreground">Used to personalise your experience</p>
                </div>
                <Switch
                  checked={preferences.personalisation}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, personalisation: checked }))
                  }
                  aria-label="Personalisation cookies"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground">Analytics</span>
                  <p className="text-xs text-muted-foreground">Used to measure website usage</p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, analytics: checked }))
                  }
                  aria-label="Analytics cookies"
                />
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleSave}
              className="flex-1 sm:flex-none"
            >
              Save
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none"
            >
              Accept All
            </Button>
            <Button
              variant="ghost"
              onClick={handleRejectNonEssential}
              className="flex-1 sm:flex-none text-muted-foreground hover:text-foreground"
            >
              Reject Non-Essential
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
