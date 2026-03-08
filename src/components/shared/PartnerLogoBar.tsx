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
    <section className="bg-surface-dark py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-surface-dark-muted text-center mb-8">
            Our Connectivity Partners
          </h3>

          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex-shrink-0 h-10 w-24 md:h-12 md:w-28 flex items-center justify-center"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity duration-300"
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
