import AnimatedSection from "./AnimatedSection";
import o2Logo from "@/assets/logos/o2-white.png";
import vodafoneLogo from "@/assets/logos/vodafone-white.png";
import eeLogo from "@/assets/logos/ee-white.png";
import threeLogo from "@/assets/logos/three-white.png";

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
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white text-center mb-10">
            Our Connectivity Partners
          </h3>

          <div className="flex items-center justify-center gap-16 md:gap-24 flex-wrap">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex-shrink-0 h-16 w-36 md:h-20 md:w-44 flex items-center justify-center"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
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
