import AnimatedSection from "./AnimatedSection";
import o2Logo from "@/assets/logos/o2-logo.svg";
import vodafoneLogo from "@/assets/logos/vodafone-logo.svg";
import eeLogo from "@/assets/logos/ee-logo.svg";
import threeLogo from "@/assets/logos/three-logo.svg";

const partners = [
  { name: "O2", logo: o2Logo },
  { name: "Vodafone", logo: vodafoneLogo },
  { name: "EE", logo: eeLogo },
  { name: "Three", logo: threeLogo },
];

const PartnerLogoBar = () => {
  return (
    <section className="bg-background py-12 md:py-16 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-8">
            Our Connectivity Partners
          </h3>

          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex-shrink-0"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-14 w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnerLogoBar;
