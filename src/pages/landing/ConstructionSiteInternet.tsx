import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Zap, Camera, Hammer, Wifi } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GradientBand from "@/components/shared/GradientBand";
import SEO from "@/components/shared/SEO";
import RelatedServices from "@/components/shared/RelatedServices";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } } };

const relatedServices = [
  {
    icon: Zap,
    title: "Integra SD-WAN",
    description: "Bonded multi-SIM connectivity engineered for active sites",
    href: "/connectivity/integra-sd-wan",
  },
  {
    icon: Camera,
    title: "Site CCTV",
    description: "Static-IP CCTV that works on the same connection as your office",
    href: "/connectivity/cctv",
  },
  {
    icon: Hammer,
    title: "Construction Sites",
    description: "Sector-specific solutions for construction PMs and contractors",
    href: "/sectors/construction-sites",
  },
  {
    icon: Wifi,
    title: "Business WiFi",
    description: "Enterprise-grade wireless for the welfare cabin and beyond",
    href: "/connectivity/business-wifi",
  },
];

const ConstructionSiteInternet = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      title: "No Utilities, No Service",
      description: "Openreach won't come to a site without power and a permanent address. So you wait. We don't need either.",
    },
    {
      title: "Welfare WiFi Can't Carry It",
      description: "BIM uploads, video calls, drone footage, CCTV — a £30 hotspot chokes the moment everyone logs on.",
    },
    {
      title: "12-Month Contracts on a 6-Month Site",
      description: "Most ISPs lock you in for the duration of someone else's contract — not yours. We don't.",
    },
    {
      title: "Kit That Goes In The Skip",
      description: "Site finishes, the router gets binned. Ours redeploys to your next project — at no extra cost.",
    },
  ];

  const faqItems = [
    {
      question: "How fast can you actually have us live?",
      answer:
        "From a confirmed survey, we ship and install within 14 days as standard. Many sites go live faster — McGee's London sites have been turned around in a week. We pre-configure everything in our workshop so the on-site install is typically 30–60 minutes.",
    },
    {
      question: "What if the site has zero infrastructure — no power, no address?",
      answer:
        "That's our specialty. Our cellular SD-WAN units run from a 12V supply — they'll run off a generator, a solar setup, or even a vehicle battery while you wait for grid power. No fixed line, no wayleaves, no trenching, no Openreach.",
    },
    {
      question: "Do you handle CCTV and welfare WiFi off the same connection?",
      answer:
        "Yes — the same bonded 4G/5G connection backs your CCTV (with a static IP for remote viewing), the welfare cabin WiFi, the site office, and any IoT devices. One connection, multiple SSIDs and VLANs, all monitored from our UK NOC.",
    },
    {
      question: "What happens to the kit when the site finishes?",
      answer:
        "We redeploy it to your next site. The contract follows the project, not the postcode. If you've got two sites running at once, we'll quote you a multi-site bundle that's typically 15–20% cheaper than two standalone connections.",
    },
    {
      question: "What speeds will I actually get?",
      answer:
        "Up to 350Mbps download and 100Mbps upload on bonded 4G/5G in well-served areas — verified during our survey, not guessed from a coverage checker. Even on more remote sites we'll commit to a minimum performance figure in writing before you sign.",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Construction Site Internet | Live in 14 Days | Integra Networks"
        description="Portable 4G/5G site connectivity. Up to 350Mbps down, 100Mbps up. Live in 14 days. Monthly terms. Kit redeploys when you move. CCTV-ready static IPs included."
        keywords="construction site internet, construction site wifi, temporary site connectivity, internet for construction site, mobile internet for building sites, site office wifi solution"
        url="/lp/construction-site-internet"
      />

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-end overflow-hidden -mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-construction-site.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/30 via-surface-dark/70 to-surface-dark" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <AnimatedSection>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-heading-1 md:text-display-sm text-white max-w-3xl">
              Construction Site Internet. Live in 14 Days.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Portable 4G/5G connectivity for active sites. Up to 350Mbps download, 100Mbps upload. Monthly contracts. Kit redeploys when you move on.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=construction-site-internet">Get a Site Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium h-12 px-8 text-base">
                <Link to="/contact?source=construction-site-internet&type=survey">Book a Survey Call</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Why Sites Stay Disconnected</p>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              The connectivity gap costs you days
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Active sites have an immediate problem. Standard ISPs aren't built for it.
            </p>
          </AnimatedSection>
          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-lg font-medium text-surface-dark-foreground mb-3">{point.title}</h3>
                <p className="text-surface-dark-muted leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(222 47% 11%)" toColor="hsl(0 0% 100%)" />

      {/* KEY METRICS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-foreground text-center mb-4 max-w-3xl mx-auto">
              Built for how sites actually run
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Not a residential router with a hi-vis sticker. Engineered for construction.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">14d</div>
              <h3 className="text-xl font-medium text-foreground mb-3">Live in 14 Days</h3>
              <p className="text-muted-foreground">
                Survey, ship, install, online. No waiting on Openreach, no wayleaves, no trenching.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">350<span className="text-2xl">Mbps</span></div>
              <h3 className="text-xl font-medium text-foreground mb-3">Real Download Speeds</h3>
              <p className="text-muted-foreground">
                Bonded 4G/5G via cellular SD-WAN. Big enough for BIM, video calls, and drone footage simultaneously.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-2">100<span className="text-2xl">Mbps</span></div>
              <h3 className="text-xl font-medium text-foreground mb-3">Upload That Doesn't Choke</h3>
              <p className="text-muted-foreground">
                Where most cellular fails. We bond multiple SIMs to give you upload performance that handles CCTV and progress photos without breaking a sweat.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientBand fromColor="hsl(0 0% 100%)" toColor="hsl(222 47% 11%)" />

      {/* PROOF POINTS / SOLUTIONS */}
      <section className="bg-surface-dark py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-heading-1 md:text-display-sm text-surface-dark-foreground text-center mb-4 max-w-3xl mx-auto">
              Three reasons construction PMs choose us
            </h2>
            <p className="text-lg text-surface-dark-muted text-center max-w-3xl mx-auto mb-16">
              Most ISPs sell broadband. We solve site connectivity.
            </p>
          </AnimatedSection>

          <motion.div className="grid gap-8 grid-cols-1 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-medium text-surface-dark-foreground mb-3">No utilities? No problem.</h3>
              <p className="text-surface-dark-muted leading-relaxed">
                Openreach won't come to a site without power and a permanent address. We will. Bonded 4G/5G via cellular SD-WAN — no trenching, no wayleaves, runs from a 12V supply.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-medium text-surface-dark-foreground mb-3">Built for how sites actually work.</h3>
              <p className="text-surface-dark-muted leading-relaxed">
                Monthly agreements that flex with your programme ���B&VFW���2F���W"�W�B6�FR�45Eb�&VG�7FF�2�2��6�VFVB27F�F&B��������F����F�cࠢ���F����F�bf&��G3׶fFUW�6�74��S�'&�V�FVB�'��&�&FW"&�&FW"�v��FR�&r�v��FR�Rӂ#�ƃ26�74��S�'FW�B׆�f��B��VF�V�FW�B�7W&f6R�F&��f�&Vw&�V�B�"�2#�3S�'2��'2W��B����3��6�74��S�'FW�B�7W&f6R�F&���WFVB�VF��r�&V��VB#�&�rV��Vv�f�"$��f��RG&�6fW'2�f�FV�6��2�G&��Rf��FvR��B&V��FR45Eb(	Bv�F��WB6�����rF�RvV�f&Rv�f���������F����F�c�����F����F�c���F�c���6V7F���ࠢ�w&F�V�D&�Bg&��6���#�&�6##"CrRR�"F�6���#�&�6RR�"�ࠢ����r�Bt�$�2��Т�6V7F���6�74��S�&&r�&6�w&�V�B��#�C���#�#��F�b6�74��S�&ׂ�WF����r�g����B6ӧ��b#����FVE6V7F����ƃ"6�74��S�'FW�BֆVF��r��C�FW�B�F�7���6�FW�B�f�&Vw&�V�BFW�B�6V�FW"�"�b#�g&��V�V�'�F�ƗfR��BF�0����#�����FVE6V7F���ࠢ���F����F�b6�74��S�&w&�Bvӂw&�B�6��2��C�w&�B�6��2�2"f&��G3׷7FvvW$6��F��W'���F���&��FFV�"v���T��f�Ws�'f�6�&�R"f�Ww�'C׷���6S�G'VR������F����F�bf&��G3׶fFUW�6�74��S�'FW�B�6V�FW"#��F�b6�74��S�&�"�b��Ɩ�R�f�W���br�b�FV�2�6V�FW"�W7F�g��6V�FW"&�V�FVB�'��&r�&��'��FW�B�&��'�#��7�6�74��S�'FW�B�7��f��B��VF�V�#���7����F�c�ƃ26�74��S�'FW�B׆�f��B��VF�V�FW�B�f�&Vw&�V�B�"�2#�7W'fW����3��6�74��S�'FW�B��WFVB�f�&Vw&�V�B#�G&��R�"FW6�F�7W'fW��bF�R6�FR�vR�6�v����FV�F�g�F�R&�v�B6V��2��BFW6�v�F�R��BƗ7B��������F����F�cࠢ���F����F�bf&��G3׶fFUW�6�74��S�'FW�B�6V�FW"#��F�b6�74��S�&�"�b��Ɩ�R�f�W���br�b�FV�2�6V�FW"�W7F�g��6V�FW"&�V�FVB�'��&r�&��'��FW�B�&��'�#��7�6�74��S�'FW�B�7��f��B��VF�V�#�#��7����F�c�ƃ26�74��S�'FW�B׆�f��B��VF�V�FW�B�f�&Vw&�V�B�"�2#�'V��Bb6�����3��6�74��S�'FW�B��WFVB�f�&Vw&�V�B#�&R�6��f�wW&VB���W"T�v�&�6���FW7FVBV�B�F��V�B&Vf�&R�B�VfW2W2�6�W&�W&VBF�6�FR�"��B�FVƗfW&VB��������F����F�cࠢ���F����F�bf&��G3׶fFUW�6�74��S�'FW�B�6V�FW"#��F�b6�74��S�&�"�b��Ɩ�R�f�W���br�b�FV�2�6V�FW"�W7F�g��6V�FW"&�V�FVB�'��&r�&��'��FW�B�&��'�#��7�6�74��S�'FW�B�7��f��B��VF�V�#�3��7����F�c�ƃ26�74��S�'FW�B׆�f��B��VF�V�FW�B�f�&Vw&�V�B�"�2#�ƗfRb���F�&VC���3��6�74��S�'FW�B��WFVB�f�&Vw&�V�B#�3(	3c֖�WFR��7F���T���2���F�'2�B#B�r���RvWB6��v�R�V�&W"v�V�6��WF���rv�W2w&��r��������F����F�c�����F����F�c���F�c���6V7F���ࠢ�w&F�V�D&�Bg&��6���#�&�6RR�"F�6���#�&�6##"CrRR�"�ࠢ��44R5ETE���t�Ĕt�B(	B�4vVR��Т�6V7F���6�74��S�&&r�7W&f6R�F&���#�C���#�#��F�b6�74��S�&ׂ�WF����r�g����B6ӧ��b#����FVE6V7F�����F�b6�74��S�'&�V�FVB�'��&�&FW"&�&FW"�v��FR�&r�v��FR�Rӂ�C��"#��F�b6�74��S�&w&�Bw&�B�6��2��C�w&�B�6��2�"vӂ�FV�2�6V�FW"#��F�c��6�74��S�'FW�Bׇ2f��B�6V֖&��BWW&66RG&6���r�v�FW7BFW�B�&��'��"�2#�fVGW&VB7W7F��W#���ƃ"6�74��S�'FW�BֆVF��r�"�C�FW�BֆVF��r�FW�B�7W&f6R�F&��f�&Vw&�V�B�"�B#��4vVR6��7G'V7F������#��6�74��S�'FW�B�7W&f6R�F&���WFVB�"�b#�3S�'26���V7F�f�G�&���VB�WB7&�726��R�b���F��w2�&vW7B7F�fRFV��ƗF����B6��7G'V7F���6�FW2�45Eb�vV�f&R6&��2�6�FR�ff�6W2��B$��W��G2(	B����6��v�R&��FVBDr�Tr6���V7F���F�B&VFW���2v�V�F�R6�FR��fW2�����F�b6�74��S�&f�W�v�b�"ӂ#��F�c��F�b6�74��S�'FW�B�7��f��B��VF�V�FW�B�&��'��"�#�3S�'3��F�c��6�74��S�'FW�B�6�FW�B�7W&f6R�F&���WFVB#�fW&�f�VBF�&�Vv�WB��6�FS�����F�c��F�c��F�b6�74��S�'FW�B�7��f��B��VF�V�FW�B�&��'��"�#�FC��F�c��6�74��S�'FW�B�6�FW�B�7W&f6R�F&���WFVB#�g&��7W'fW�F�ƗfS�����F�c���F�c��'WGF��46���Bf&��C�&�WFƖ�R"6�74��S�&&�&FW"�v��FR�3FW�B�v��FR��fW#�&r�v��FR�#��Ɩ�F��"�7W7F��W'2��6vVR�6��7G'V7F���#�&VBF�R�4vVR7F�'���Ɩ����'WGF�����F�c��F�b6�74��S�&��cB&�V�FVB�'��&r�w&F�V�B�F��'"g&���&��'��#F��&�VR�c�#f�W��FV�2�6V�FW"�W7F�g��6V�FW"#��6�74��S�'FW�B�7W&f6R�F&���WFVBFW�B�6V�FW"��b#����F��w2&�vvW7B6�FW2+r45Eb�&VG�+r$��W��G2+r��f�'&R�VVFVC�����F�c���F�c���F�c�����FVE6V7F���ࠢ��6V6��F'�66R7GVG�(	Bu%4��Т���FVE6V7F�����F�b6�74��S�&�Bӂ&�V�FVB�'��&�&FW"&�&FW"�v��FR�&r�v��FR�Rӂ�C��#��F�b6�74��S�&w&�Bw&�B�6��2��C�w&�B�6��2�2vӂ�FV�2�6V�FW"#��F�b6�74��S�&�C�6���7��"#��6�74��S�'FW�Bׇ2f��B�6V֖&��BWW&66RG&6���r�v�FW7BFW�B�&��'��"�2#��6�v�'F�&VF��s���ƃ26�74��S�'FW�BֆVF��r�"FW�B�7W&f6R�F&��f�&Vw&�V�B�"�2#�u%47FV�&�ǒ(	BS�'2��f�V�Bf�"��f�6�F�'3���3��6�74��S�'FW�B�7W&f6R�F&���WFVB#��bvR6�WB��bv�v&�B��F�f�V�Bf�"vVV�V�BWfV�B�vR6�WB�B����W"6�FRf�"�V"�6�R��B�6�RV�v��VW'2�6�R&�6�������F�c��F�c��'WGF��46���Bf&��C�&�WFƖ�R"6�74��S�&&�&FW"�v��FR�3FW�B�v��FR��fW#�&r�v��FR�r�gV��#��Ɩ�F��"�7W7F��W'2�7FV֖�r��VB�v�F��V��6VB�fW7F�f��6���V7F�f�G�#�&VBF�R7F�'���Ɩ����'WGF�����F�c���F�c���F�c�����FVE6V7F������F�c���6V7F���ࠢ�w&F�V�D&�Bg&��6���#�&�6##"CrRR�"F�6���#�&�6RR�"�ࠢ��E%U5B$"��Т�6V7F���6�74��S�&&r�&6�w&�V�B��"�C���b#��F�b6�74��S�&ׂ�WF����r�g����B6ӧ��bFW�B�6V�FW"#��6�74��S�'FW�Bׇ2f��B�6V֖&��BWW&66RG&6���r�v�FW7BFW�B��WFVB�f�&Vw&�V�B�"�B#�G'W7FVB��7F�fR6�FW2'�����6�74��S�'FW�B��rFW�B�f�&Vw&�V�Bf��B��VF�V�#��4vVR+r6V6��w&�W+rt"�vW"+r�B�T�'W6��W76W3�����F�c���6V7F���ࠢ��d��Т�6V7F���6�74��S�&&r�&6�w&�V�B��#�C���#�#��F�b6�74��S�&ׂ�WF����r�7����B6ӧ��b#����FVE6V7F����ƃ"6�74��S�'FW�BֆVF��r��C�FW�B�F�7���6�FW�B�f�&Vw&�V�BFW�B�6V�FW"�"�b#�g&WVV�Fǒ6�VBVW7F���0����#�����FVE6V7F���ࠢ�F�b6�74��S�'76Rג�2#��f�FV�2����f����������F����F�`��W�׶�Т��F��׷��6�G�����"�Тv���T��f�Ws׷��6�G������Тf�Ww�'C׷���6S�G'VR�ТG&�6�F���׷�FV������R�Т6�74��S�'&�V�FVB׆�&�&FW"&�&FW"�&�&FW"&r�6&B�fW&f��rֆ�FFV� ���'WGF����6Ɩ6�ײ����6WD�V�f��V�f������V�����Т6�74��S�&f�W��FV�2�6V�FW"�W7F�g��&WGvVV�r�gV����b��BFW�B��VgB ���7�6�74��S�'FW�B�6�f��B��VF�V�FW�B�f�&Vw&�V�B"�B#�f�VW7F������7���6�Wg&��F�v�6�74��S׶��Br�BFW�B��WFVB�f�&Vw&�V�Bf�W��6�&���G&�6�F����G&�6f�&�G��V�f�����'&�FFR��"�"'�Т����'WGF�����V�f����bb�����F����F�b��F��׷��V�v�C���6�G������FS׷��V�v�C�&WF�"��6�G����W��C׷��V�v�C���6�G����G&�6�F���׷�GW&F����2����6�74��S�'��b"�BFW�B�6�FW�B��WFVB�f�&Vw&�V�B�VF��r�&V��VB#�f��7vW'��������F����F�c��Т����F����F�c���Т��F�c���F�c���6V7F���ࠢ�w&F�V�D&�Bg&��6���#�&�6RR�"F�6���#�&�6##"CrRR�"�ࠢ��d���5D��Т�6V7F���6�74��S�&&r�7W&f6R�F&���#�C���#�#��F�b6�74��S�&ׂ�WF����r�G����B6ӧ��b#����FVE6V7F�������F����F�b6�74��S�'&V�F�fR�fW&f��rֆ�FFV�&�V�FVB�'��&r�w&F�V�B�F��'"g&���&��'�f��&��'�F��&�VR�c��C��BFW�B�6V�FW""v���T��fW#׷�66�S����G&�6�F���׷�GW&F����B����F�b6�74��S�'���FW"�WfV�G2����R'6��WFR�&�v�B�#�F��#�ӃrӃ&�V�FVB�gV��&r�v��FR�&�W"�7��"���F�b6�74��S�'&V�F�fR��#�ƃ"6�74��S�'FW�B�'���C�FW�B�7��f��B��VF�V�FW�B�&��'��f�&Vw&�V�B�"�2#�vWB��W"6�FR6���V7FVB��BF�0����#��6�74��S�'FW�B�&��'��f�&Vw&�V�B��"ӂ���r�'��ׂ�WF�#�FV��W2v�W&R��Rw&R'V��F��r�vRv��6��R&6�v�F�����Rv�&���rF�v�F���BƗ7B�&�6R��Bv��ƗfRFFR�����F�b6�74��S�&f�W�f�W��6��6Ӧf�W��&�r�FV�2�6V�FW"�W7F�g��6V�FW"v�B#��'WGF��46���B6��S�&�r"6�74��S�&&r�v��FRFW�B�7W&f6R�F&�f��B�6V֖&��B��fW#�&r�v��FR�#��Ɩ�F��"�6��F7C�6�W&6S�6��7G'V7F����6�FR֖�FW&�WB#�vWB6�FRV�FS��Ɩ����'WGF����'WGF��46���Bf&��C�&�WFƖ�R"6��S�&�r"6�74��S�&&�&FW"�v��FR�3FW�B�v��FR��fW#�&r�v��FR�#��Ɩ�F��"�6��F7C�6�W&6S�6��7G'V7F����6�FR֖�FW&�WBgG�S�7W'fW�#�&���7W'fW�6����Ɩ����'WGF�����F�c���F�c�����F����F�c�����FVE6V7F������F�c���6V7F���ࠢ��$T�DTB4U%d�4U2��Т�&V�FVE6W'f�6W26W'f�6W3׷&V�FVE6W'f�6W7�����vT���WC����Ӱ��W��'BFVfV�B6��7G'V7F���6�FT��FW&�WC�
