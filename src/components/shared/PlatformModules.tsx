import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Radio, TrendingUp, MapPin, BarChart3, ArrowRight } from "lucide-react";

const modules = [
  {
    name: "Command",
    tagline: "Real-time response",
    icon: Radio,
    href: "/command",
  },
  {
    name: "Predict",
    tagline: "Early degradation detection",
    icon: TrendingUp,
    href: "/predict",
  },
  {
    name: "Fleet",
    tagline: "Visibility across deployments",
    icon: MapPin,
    href: "/fleet",
  },
  {
    name: "Insight",
    tagline: "Usage, analysis, emissions",
    icon: BarChart3,
    href: "/insight",
  },
];

const PlatformModules = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {modules.map((module, index) => (
        <motion.div
          key={module.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            to={module.href}
            className="group block rounded-lg border border-border/50 bg-card p-8 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <module.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">{module.name}</h3>
            <p className="mb-6 text-muted-foreground">{module.tagline}</p>
            <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default PlatformModules;
