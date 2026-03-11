import extendingWifiImg from "@/assets/blog/extending-wifi-outbuildings.webp";
import churchesImg from "@/assets/blog/churches-listed-buildings.webp";
import ruralSdwanImg from "@/assets/blog/rural-businesses-sdwan.webp";
import starlinkSdwanImg from "@/assets/blog/starlink-sdwan.png";
import starlinkInstallersImg from "@/assets/blog/starlink-installers.webp";
import starlinkRightImg from "@/assets/blog/starlink-right-solution.webp";
import singleMobileImg from "@/assets/blog/single-mobile-network.webp";
import fourGVsFiveGImg from "@/assets/blog/4g-vs-5g.webp";
import satelliteVsFixedImg from "@/assets/blog/satellite-vs-fixed-wireless.jpg";
import broadbandAvailabilityImg from "@/assets/blog/broadband-availability-rural.webp";
import broadbandGrantsImg from "@/assets/blog/broadband-grants-uk.jpg";
import starlinkUploadImg from "@/assets/blog/starlink-upload-speed.webp";
import starlinkVsBondingImg from "@/assets/blog/starlink-vs-bonding.webp";
import cellularBondingImg from "@/assets/blog/cellular-bonding.jpg";
import loadBalancingImg from "@/assets/blog/load-balancing-vs-bonding.webp";
import tempBroadbandImg from "@/assets/blog/temporary-broadband-events.webp";
import portableWifiImg from "@/assets/blog/portable-wifi-construction.jpg";
import iotAgricultureImg from "@/assets/blog/farm-rolling-fields.webp";
import multiBuildingImg from "@/assets/blog/multi-building-wifi-rural.webp";
import houseSaleImg from "@/assets/blog/rural-cottage-property-sale-uk.webp";
import fibreCheckerImg from "@/assets/blog/fibre-optic-broadband-uk.jpg";
import constructionNightImg from "@/assets/blog/construction-site-night-connectivity-uk.webp";
import satelliteOrbitImg from "@/assets/blog/satellite-earth-orbit-broadband.webp";
import broadbandBottleneckImg from "@/assets/blog/broadband-data-streams-digital.jpg";
import slowInternetImg from "@/assets/blog/slow-internet-laptop-troubleshooting.jpg";
import speedTestImg from "@/assets/blog/internet-speed-test-gauge.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "business-broadband-grants-uk-2026",
    title: "Business Broadband Grants UK 2026",
    excerpt: "The Government committed billions to reaching rural properties with broadband. Which schemes are open right now? Which ones apply to your business?",
    date: "27 Feb 2026",
    image: broadbandGrantsImg,
    category: "Guides",
  },
  {
    slug: "multi-building-wifi-rural-properties",
    title: "Multi-Building WiFi for Rural Properties",
    excerpt: "Got a farmhouse, barn conversion, and office 50 metres apart? Here's how to get seamless WiFi across multiple buildings without running cables everywhere.",
    date: "04 Feb 2026",
    image: multiBuildingImg,
    category: "WiFi",
  },
  {
    slug: "temporary-broadband-for-events-uk",
    title: "Temporary Broadband for Events UK",
    excerpt: "Running an outdoor event and need reliable WiFi? Here's everything you need to know about temporary broadband for festivals, shows, and corporate events.",
    date: "16 Jan 2026",
    image: tempBroadbandImg,
    category: "Events",
  },
  {
    slug: "how-to-check-broadband-availability-rural-areas",
    title: "How to Check Broadband Availability in Rural Areas",
    excerpt: "Standard ISP checkers fail in rural areas. Here's how to do a proper broadband availability check — and find options the big providers don't tell you about.",
    date: "09 Dec 2025",
    image: broadbandAvailabilityImg,
    category: "Guides",
  },
  {
    slug: "iot-connectivity-agriculture-uk",
    title: "IoT Connectivity for Agriculture UK",
    excerpt: "Smart farming is transforming UK agriculture. But IoT sensors, automated feeders, and CCTV all need reliable connectivity. Here's how to get it right.",
    date: "22 Nov 2025",
    image: iotAgricultureImg,
    category: "Agriculture",
  },
  {
    slug: "satellite-internet-vs-fixed-wireless-pros-and-cons",
    title: "Satellite Internet vs Fixed Wireless: Pros and Cons",
    excerpt: "Satellite and fixed wireless are the two leading alternatives to fibre. Both can work. Both have distinct trade-offs. Which one should you choose?",
    date: "03 Oct 2025",
    image: satelliteVsFixedImg,
    category: "Connectivity",
  },
  {
    slug: "portable-wifi-solutions-construction-sites",
    title: "Portable WiFi Solutions for Construction Sites",
    excerpt: "Construction sites need connectivity that deploys fast, works reliably, and moves when you do. Here's what actually works on site.",
    date: "11 Sep 2025",
    image: portableWifiImg,
    category: "Construction",
  },
  {
    slug: "starlink-vs-4g-bonding-honest-comparison",
    title: "Starlink vs 4G Bonding: Honest Comparison",
    excerpt: "Starlink vs 4G bonding is the biggest rural broadband decision right now. We're going to be completely honest about which is better for different situations.",
    date: "25 Aug 2025",
    image: starlinkVsBondingImg,
    category: "Starlink",
  },
  {
    slug: "starlink-upload-speed-why-it-matters-for-business",
    title: "Starlink Upload Speed: Why It Matters for Business",
    excerpt: "Starlink is famous for download speeds. But its upload speed — typically just 10-15Mbps — is the elephant in the room. For a business, that's a problem.",
    date: "08 Jul 2025",
    image: starlinkUploadImg,
    category: "Starlink",
  },
  {
    slug: "4g-vs-5g-broadband-which-is-better-for-business",
    title: "4G vs 5G Broadband: Which Is Better for Business?",
    excerpt: "The race between 4G and 5G is heating up. If you're a rural business waiting for fibre, which should you choose? The answer depends on what your business actually needs.",
    date: "19 Jun 2025",
    image: fourGVsFiveGImg,
    category: "Connectivity",
  },
  {
    slug: "load-balancing-vs-bonding-whats-the-difference",
    title: "Load Balancing vs Bonding: What's the Difference?",
    excerpt: "Load balancing and bonding sound similar but work very differently. One switches between connections. The other combines them. Here's why it matters.",
    date: "02 May 2025",
    image: loadBalancingImg,
    category: "SD-WAN",
  },
  {
    slug: "what-is-cellular-bonding-simple-explanation",
    title: "What Is Cellular Bonding? Simple Explanation",
    excerpt: "Cellular bonding sounds technical. It's actually simple: combining two or more mobile connections into one faster, more reliable connection.",
    date: "14 Apr 2025",
    image: cellularBondingImg,
    category: "SD-WAN",
  },
  {
    slug: "extending-wi-fi-and-internet-to-outbuildings",
    title: "Extending Wi-Fi and Internet to Outbuildings: Best Solutions Explained",
    excerpt: "Modern homes often include outbuildings such as home offices, gyms, workshops, or guest accommodations. This guide explores practical solutions to extend Wi-Fi and improve connectivity.",
    date: "24 Nov 2024",
    image: extendingWifiImg,
    category: "Connectivity",
  },
  {
    slug: "internet-and-wi-fi-solutions-for-churches-and-listed-buildings",
    title: "Internet and Wi-Fi Solutions for Churches and Listed Buildings",
    excerpt: "Installing internet and Wi-Fi in churches and listed buildings comes with unique challenges. This article explores common obstacles and highlights practical solutions.",
    date: "23 Nov 2024",
    image: churchesImg,
    category: "Connectivity",
  },
  {
    slug: "managing-multiple-broadband-connections-sd-wan-solutions-for-rural-businesses",
    title: "How Rural Businesses Can Benefit from SD-WAN and Multiple Broadband Connections",
    excerpt: "Many rural businesses turn to multiple broadband connections as a workaround. SD-WAN technology combines these connections into a robust, efficient, and resilient network.",
    date: "21 Nov 2024",
    image: ruralSdwanImg,
    category: "SD-WAN",
  },
  {
    slug: "starlink-sd-wan-a-reliable-solution-for-business-connectivity",
    title: "Starlink SD-WAN: A Reliable Solution for Business Connectivity",
    excerpt: "Starlink SD-WAN combines SpaceX's satellite internet with SD-WAN technology to create a resilient, failover-ready internet setup for businesses.",
    date: "12 Nov 2024",
    image: starlinkSdwanImg,
    category: "Starlink",
  },
  {
    slug: "starlink-installers-near-me-finding-the-best-solution-for-high-speed-satellite-internet",
    title: "Starlink Installers Near Me: Finding the Best Solution for High-Speed Satellite Internet",
    excerpt: "For those living in rural or remote areas, accessing reliable high-speed internet can be a constant challenge. Professional Starlink installation unlocks its full potential.",
    date: "19 Oct 2024",
    image: starlinkInstallersImg,
    category: "Starlink",
  },
  {
    slug: "single-mobile-network-connectivity-solutions-a-reliable-option",
    title: "Single Mobile Network Connectivity Solutions: A Reliable Option?",
    excerpt: "Can single network 4G solutions serve as a solid alternative to traditional broadband? The answer is complex — it largely depends on specific circumstances.",
    date: "17 Mar 2023",
    image: singleMobileImg,
    category: "Connectivity",
  },
  {
    slug: "starlink-is-it-the-right-solution-for-me",
    title: "Starlink: Is it the right solution for me?",
    excerpt: "In the picturesque landscapes of rural UK, the advent of Starlink offers a glimmer of hope. But is it the ultimate solution for internet woes, or does it come with limitations?",
    date: "15 Feb 2023",
    image: starlinkRightImg,
    category: "Starlink",
  },
  {
    slug: "bt-openreach-fibre-checker",
    title: "BT Openreach Fibre Checker and Other Handy Online Tools",
    excerpt: "Before searching for alternative ISPs, check what's available at your property. Here's how to use the BT Openreach Fibre Checker and other free tools.",
    date: "14 Jul 2025",
    image: fibreCheckerImg,
    category: "Guides",
  },
  {
    slug: "satellite-internet-vs-integra-4g-5g-sdwan",
    title: "Satellite Internet vs Integra 4G/5G SD-WAN",
    excerpt: "Starlink or bonded 4G/5G? Both work in rural areas, but they solve different problems. Here's an honest comparison to help you choose.",
    date: "04 Apr 2023",
    image: satelliteOrbitImg,
    category: "Connectivity",
  },
  {
    slug: "revolutionising-connectivity-in-construction",
    title: "Revolutionising Connectivity in Construction: Integra's SD-WAN Solutions",
    excerpt: "Construction sites need fast internet that deploys in hours, not months. Integra's SD-WAN delivers 350Mbps+ to even the most remote sites.",
    date: "23 Feb 2023",
    image: constructionNightImg,
    category: "Construction",
  },
  {
    slug: "beyond-the-broadband-bottleneck",
    title: "Beyond the Broadband Bottleneck: A Practical Alternative for Rural SMEs",
    excerpt: "Still waiting for fibre? Rural SMEs don't have to settle for 2Mbps copper. SD-WAN delivers 150-350Mbps in 14 days.",
    date: "18 Jul 2022",
    image: broadbandBottleneckImg,
    category: "Connectivity",
  },
  {
    slug: "unlock-high-speed-internet-rural-areas",
    title: "Unlock High-Speed, Reliable Internet in Rural Areas with Integra SD-WAN",
    excerpt: "No fibre? No problem. Integra SD-WAN bonds multiple 4G/5G connections to deliver up to 350Mbps to rural homes and businesses.",
    date: "07 Sep 2022",
    image: broadbandBottleneckImg,
    category: "Connectivity",
  },
  {
    slug: "preparing-house-for-sale-internet-speed",
    title: "Preparing Your House for Sale: Why Internet Speed Has Never Been More Important",
    excerpt: "Internet speed is now a key factor for property buyers. Here's why it matters and how to boost your property's connectivity before selling.",
    date: "02 Dec 2022",
    image: houseSaleImg,
    category: "Guides",
  },
  {
    slug: "diy-guide-internet-speed-tests",
    title: "DIY Guide: Performing Internet Speed Tests at Your Property",
    excerpt: "Want to know how fast your internet really is? This practical guide walks you through running proper speed tests at your property.",
    date: "19 Jan 2023",
    image: speedTestImg,
    category: "Guides",
  },
  {
    slug: "why-is-my-bt-internet-so-slow",
    title: "Why Is My BT Internet So Slow?",
    excerpt: "Slow BT broadband? Distance from the exchange, old copper lines, and network congestion are common culprits. Here's what you can do about it.",
    date: "15 Mar 2022",
    image: slowInternetImg,
    category: "Guides",
  },
];
