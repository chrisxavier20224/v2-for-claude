import extendingWifiImg from "@/assets/blog/extending-wifi-outbuildings.jpg";
import churchesImg from "@/assets/blog/churches-listed-buildings.jpg";
import ruralSdwanImg from "@/assets/blog/rural-businesses-sdwan.jpeg";
import starlinkSdwanImg from "@/assets/blog/starlink-sdwan.png";
import starlinkInstallersImg from "@/assets/blog/starlink-installers.jpg";
import starlinkRightImg from "@/assets/blog/starlink-right-solution.jpg";
import singleMobileImg from "@/assets/blog/single-mobile-network.jpg";
import fourGVsFiveGImg from "@/assets/blog/4g-vs-5g.jpg";
import satelliteVsFixedImg from "@/assets/blog/satellite-vs-fixed-wireless.jpg";
import broadbandAvailabilityImg from "@/assets/blog/broadband-availability-rural.jpg";
import broadbandGrantsImg from "@/assets/blog/broadband-grants-uk.jpg";
import starlinkUploadImg from "@/assets/blog/starlink-upload-speed.jpg";
import starlinkVsBondingImg from "@/assets/blog/starlink-vs-bonding.jpg";
import cellularBondingImg from "@/assets/blog/cellular-bonding.jpg";
import loadBalancingImg from "@/assets/blog/load-balancing-vs-bonding.jpg";
import tempBroadbandImg from "@/assets/blog/temporary-broadband-events.jpg";
import portableWifiImg from "@/assets/blog/portable-wifi-construction.jpg";
import iotAgricultureImg from "@/assets/blog/iot-agriculture.jpg";
import multiBuildingImg from "@/assets/blog/multi-building-wifi-rural.jpg";

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
    excerpt: "Starlink is famous for download speeds. But its upload speed — typically just 5-10Mbps — is the elephant in the room. For a business, that's a problem.",
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
];
