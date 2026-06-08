import BlogArticleLayout from "@/components/blog/BlogArticleLayout";


const MultiBuildingWifi = () => (
  <BlogArticleLayout slug="multi-building-wifi-rural-properties">
    <p>Your main house has Wi-Fi. But your barn is out of range. Your office building (300m away) has no signal. Your guest cottage needs connectivity but wiring 300m of cable is crazy expensive.</p>

    <p>Multi-building Wi-Fi solves this.</p>

    <h2>The Problem: Wi-Fi Range Limits</h2>

    <p>Standard Wi-Fi router:</p>
    <ul>
      <li>30-50m range indoors</li>
      <li>100m range outdoors in ideal conditions</li>
      <li>Much shorter through walls, trees, hills</li>
    </ul>

    <p>On a multi-building property (farm, estate, business park), one router can't reach everywhere.</p>

    <p><strong>Common solutions that don't work:</strong></p>
    <ul>
      <li>❌ Buying a "Wi-Fi extender" (range stays bad, speed drops)</li>
      <li>❌ Wiring Ethernet across the property (can be expensive for long distances)</li>
      <li>❌ Putting a second router in each building (no coordination, devices keep switching)</li>
    </ul>

    <h2>What Actually Works: Mesh Wi-Fi</h2>

    <p>Mesh Wi-Fi uses multiple access points coordinated by one system. Each AP talks to others. Devices seamlessly roam between them.</p>

    <p><strong>Example:</strong> Walk from main house to barn with your phone. On your main house Wi-Fi, your signal is strong. As you walk toward the barn, a mesh node in the barn automatically becomes your primary AP. No reconnection, no drop.</p>

    <h2>Mesh Wi-Fi Setup (Multi-Building)</h2>

    <h3>Step 1: Main Router + Primary Wi-Fi</h3>

    <p>Your primary broadband connection (Integra Pro, Starlink SD-WAN, or leased line) connects to a mesh router (commercial-grade mesh system, or similar).</p>

    <h3>Step 2: Secondary Access Points</h3>

    <p>Place additional mesh nodes in each building.</p>

    <p>Each node has its own:</p>
    <ul>
      <li>Wireless antenna (for client devices: phones, laptops, smart sensors)</li>
      <li>Wireless backhaul (talks back to main router via Wi-Fi)</li>
    </ul>

    <p>OR wired backhaul (if you can run Ethernet between buildings)</p>

    <h3>Step 3: Wired Backhaul (Optional But Better)</h3>

    <p>If you can run Ethernet between buildings (underground cable, fiber, P2P radio link), backhaul is more stable.</p>

    <p>Mesh nodes then use wired connection to main router and dedicate Wi-Fi for client devices.</p>

    <h2>Real Example: Holiday Cottage Complex</h2>

    <p>A rural holiday cottage complex had:</p>
    <ul>
      <li>Main reception building (Wi-Fi)</li>
      <li>6 guest cottages (no Wi-Fi, 100-200m away)</li>
      <li>Communal barn (no Wi-Fi, 150m away)</li>
    </ul>

    <p><strong>Problem:</strong> Guests wanted Wi-Fi. Wiring Ethernet across the property to each cottage would have been prohibitively expensive.</p>

    <p><strong>Solution:</strong> Multi-building mesh Wi-Fi.</p>

    <p><strong>Setup:</strong></p>
    <ul>
      <li>Main building: Integra Pro broadband + mesh router (main controller)</li>
      <li>Each cottage: mesh access point mounted on exterior wall</li>
      <li>Barn: mesh access point for staff/guests</li>
    </ul>

    <p><strong>Wi-Fi backhaul:</strong> Each AP communicates wirelessly back to main controller. No wiring needed between buildings (though one cable from main broadband to mesh controller).</p>

    <p><strong>Result:</strong></p>
    <ul>
      <li>Entire property one Wi-Fi network</li>
      <li>Guests get 100-150Mbps in each cottage</li>
      <li>Staff in barn have Wi-Fi</li>
      <li>Single network to manage (not 7 separate routers)</li>
    </ul>

    <p><strong>Cost:</strong> Professional mesh Wi-Fi system for multi-building setup. Contact us for detailed pricing.</p>

    <h2>Mesh Wi-Fi Systems for Rural Properties</h2>

    <p>Commercial-grade mesh systems | Professional coverage | Medium setup | Web-based controller</p>
    <p>Enterprise mesh systems | Enterprise coverage | Hard setup | Complex management</p>
    <p>Mid-range mesh systems | Good coverage | Medium setup | Command-line or web</p>
    <p>Budget mesh systems | Consumer coverage | Easy setup | App-based</p>

    <p><strong>Recommendation:</strong> Commercial-grade mesh for farms/estates. Best balance of price, reliability, and ease.</p>

    <h2>Installation and Wiring</h2>

    <h3>Wireless Backhaul (Easiest):</h3>
    <ul>
      <li>Place mesh APs line-of-sight to main router</li>
      <li>Each AP has Wi-Fi backhaul link</li>
      <li>No cable between buildings</li>
      <li>Slight speed loss due to backhaul traffic</li>
    </ul>

    <h3>Wired Backhaul (Best Performance):</h3>
    <ul>
      <li>Run Ethernet between buildings (underground, overhead, or through existing conduit)</li>
      <li>Each AP connects via Ethernet to main router</li>
      <li>Backhaul is dedicated, so Wi-Fi speeds stay high</li>
      <li>Setup is one-time cost (professional wiring + installation)</li>
    </ul>

    <h3>P2P Radio Backhaul (Middle Ground):</h3>
    <ul>
      <li>Use point-to-point radio links between buildings instead of Ethernet</li>
      <li>Long-range (2km+), line-of-sight</li>
      <li>200-500Mbps throughput (sufficient for Wi-Fi backhaul)</li>
      <li>Cost: Competitive pricing for P2P radio links per pair</li>
    </ul>

    <h2>Real Example: 200-Acre Farm With Multi-Building Setup</h2>

    <p>Farm had:</p>
    <ul>
      <li>Main farmhouse with Integra Pro broadband</li>
      <li>Barn 500m away</li>
      <li>Equipment shed 800m away</li>
      <li>Guest cottage 1km away</li>
      <li>Water tank station 2km away</li>
    </ul>

    <p><strong>Solution:</strong> Mixed wired + wireless mesh.</p>

    <p><strong>Setup:</strong></p>
    <ul>
      <li>Mesh router at farmhouse (Integra Pro broadband input)</li>
      <li>Mesh AP in barn (wired Ethernet via buried conduit)</li>
      <li>Mesh AP in equipment shed (wireless backhaul)</li>
      <li>Mesh AP in guest cottage (wireless backhaul)</li>
      <li>IoT-only sensor network for water tank (separate LoRaWAN gateway)</li>
    </ul>

    <p><strong>Result:</strong></p>
    <ul>
      <li>Farmhouse: 150Mbps Wi-Fi</li>
      <li>Barn: 150Mbps Wi-Fi (wired backhaul = consistent)</li>
      <li>Equipment shed: 80-100Mbps Wi-Fi (wireless backhaul = slightly lower)</li>
      <li>Guest cottage: 100-120Mbps Wi-Fi (wireless backhaul)</li>
    </ul>

    <p><strong>Cost:</strong></p>
    <ul>
      <li>Mesh system: Commercial-grade equipment</li>
      <li>Buried conduit + Ethernet to barn: Professional infrastructure</li>
      <li>Professional installation: Engineering and deployment</li>
      <li>Total: Contact us for comprehensive quote including broadband</li>
    </ul>

    <h2>When Multi-Building Wi-Fi Makes Sense</h2>

    <p>✅ Holiday rental complex</p>
    <p>✅ Farm with multiple buildings</p>
    <p>✅ Large estates with guest houses</p>
    <p>✅ Mixed-use properties (home + office + storage)</p>
    <p>✅ Situations where wiring is expensive or impractical</p>

    <p>❌ Single building (just use a good Wi-Fi router)</p>
    <p>❌ Buildings over 2km apart (use cellular IoT + Wi-Fi at each location instead)</p>
    <p>❌ Extreme rural isolation (satellite might be more cost-effective)</p>

    <h2>Important Consideration: Backhaul Connectivity</h2>

    <p>Mesh Wi-Fi only works if the main router has good broadband.</p>

    <p>If your main connection is slow or unreliable, adding mesh APs won't help. The bottleneck is the backhaul, not the Wi-Fi.</p>

    <p><strong>Example:</strong> If your main connection is 20Mbps, that's the max any AP can deliver. 10 mesh APs won't improve it.</p>

    <p><strong>Solution:</strong> Upgrade main broadband first (Integra Pro = 150-350Mbps). Then add mesh.</p>

    <h2>Installation and Support</h2>

    <p>Professional installation is important:</p>
    <ul>
      <li>Antenna placement for optimal backhaul</li>
      <li>Channel selection (avoiding interference)</li>
      <li>Capacity planning (how many devices per AP?)</li>
      <li>Roaming optimization (seamless device switching)</li>
    </ul>

    <p>Our team can design and install multi-building Wi-Fi. We design and install commercial-grade mesh Wi-Fi systems, but can advise on other systems.</p>

    <h2>Next Step</h2>

    <p>Have a multi-building property needing Wi-Fi?</p>

    <p>Email us:</p>
    <ul>
      <li>Property layout (sketch or photo)</li>
      <li>Distances between buildings</li>
      <li>Number of devices per building</li>
      <li>Budget range</li>
    </ul>

    <p>We'll design a mesh system and quote installation.</p>
    </BlogArticleLayout>
);

export default MultiBuildingWifi;
