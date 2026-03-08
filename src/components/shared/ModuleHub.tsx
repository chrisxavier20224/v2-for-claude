import { Bell, TrendingUp, MapPin, BarChart3, Wifi } from "lucide-react";

const modules = [
  {
    name: "Command",
    description: "Alerts & Workflows",
    icon: Bell,
    bullets: ["Alarm routing", "Escalation rules", "Acknowledgement tracking"],
  },
  {
    name: "Predict",
    description: "Trend Analysis",
    icon: TrendingUp,
    bullets: ["Anomaly detection", "Failure prediction", "Maintenance scheduling"],
  },
  {
    name: "Fleet",
    description: "Map Visibility",
    icon: MapPin,
    bullets: ["Live GPS tracking", "Geofence alerts", "Route optimization"],
  },
  {
    name: "Insight",
    description: "Reports & KPIs",
    icon: BarChart3,
    bullets: ["Automated reports", "Custom dashboards", "Compliance exports"],
  },
  {
    name: "Connect",
    description: "LTE Resilience",
    icon: Wifi,
    bullets: ["Multi-network failover", "Secure tunnelling", "Edge processing"],
  },
];

const ModuleHub = () => {
  return (
    <div className="relative">
      {/* Hub-and-spoke visual layout */}
      <div className="flex flex-col items-center">
        {/* Centre hub */}
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded glass-card">
          <div className="text-center">
            <span className="block text-lg font-bold text-foreground">NEXR</span>
            <span className="block text-sm font-medium text-primary">One</span>
          </div>
        </div>

        {/* Connection lines (decorative) */}
        <div className="absolute top-12 left-1/2 h-16 w-px -translate-x-1/2 bg-border" />

        {/* Modules grid */}
        <div className="mt-12 grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((module) => (
            <div
              key={module.name}
              className="group relative rounded glass-card-hover p-6"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/10 text-primary">
                <module.icon className="h-6 w-6" />
              </div>

              {/* Name */}
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {module.name}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm font-bold text-primary uppercase tracking-wide">
                {module.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {module.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleHub;