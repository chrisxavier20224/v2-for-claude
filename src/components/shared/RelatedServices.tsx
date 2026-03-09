import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, Globe } from "lucide-react";

export interface RelatedService {
  title?: string;
  name?: string;
  description: string;
  href?: string;
  url?: string;
  icon?: LucideIcon;
  badge?: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  heading?: string;
  subheading?: string;
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const RelatedServices = ({
  services,
  heading = "Related Services",
  subheading,
}: RelatedServicesProps) => {
  return (
    <section className="py-16 md:py-24 bg-surface-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {heading}
          </p>
          <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground mb-4 max-w-3xl">
            Explore what else we can do for you.
          </h2>
          {subheading && (
            <p className="text-lg text-surface-dark-muted max-w-2xl">
              {subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            const Icon = service.icon || Globe;
            const link = service.href || service.url || "#";
            const label = service.title || service.name || "Service";
            return (
              <motion.div
                key={link}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={link} className="group block h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 p-6 sm:p-8 flex flex-col">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 flex-shrink-0">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    {/* Badge */}
                    {service.badge && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-3 w-fit">
                        {service.badge}
                      </span>
                    )}

                    {/* Title & Description */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-surface-dark-foreground mb-3">
                        {label}
                      </h3>
                      <p className="text-sm text-surface-dark-muted leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Learn More
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedServices;
