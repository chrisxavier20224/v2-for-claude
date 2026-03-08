import extendingWifiImg from "@/assets/blog/extending-wifi-outbuildings.jpg";
import churchesImg from "@/assets/blog/churches-listed-buildings.jpg";
import ruralSdwanImg from "@/assets/blog/rural-businesses-sdwan.jpeg";
import starlinkSdwanImg from "@/assets/blog/starlink-sdwan.png";
import starlinkInstallersImg from "@/assets/blog/starlink-installers.jpg";
import starlinkRightImg from "@/assets/blog/starlink-right-solution.jpg";
import singleMobileImg from "@/assets/blog/single-mobile-network.jpg";

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
    slug: "starlink-is-it-the-right-solution-for-me",
    title: "Starlink: Is it the right solution for me?",
    excerpt: "In the picturesque landscapes of rural UK, the advent of Starlink offers a glimmer of hope. But is it the ultimate solution for internet woes, or does it come with limitations?",
    date: "15 Feb 2023",
    image: starlinkRightImg,
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
];
