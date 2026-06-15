import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { Link } from "react-router-dom";
import AvailabilityCheckerInline from "@/components/availability-checker/AvailabilityCheckerInline";
import farmHillside from "@/assets/blog/farm-hillside-cottage.webp";
import farmFields from "@/assets/blog/farm-rolling-fields.webp";
import farmValley from "@/assets/blog/farm-valley-village.webp";


const IoTConnectivityAgriculture = () => (
  <BlogArticleLayout slug="iot-connectivity-agriculture-uk" seoTitle="IoT Connectivity for Agriculture UK | Integra">
    <p>Modern farming runs on data. Soil sensors, water monitors, livestock trackers, weather stations, and automated gates all send information back to a central system.</p>

    <p>But these IoT devices need reliable connectivity. One dropped connection means 6 hours of missing data. One missed alert means a gate stays open.</p>

    <div className="not-prose my-10">
      <p className="text-foreground font-semibold mb-4">
        Connecting sensors, CCTV or trackers across your farm? Check coverage across your land.
      </p>
      <AvailabilityCheckerInline compact sourceTag="blog-iot-connectivity-agriculture-uk" hideChatAlternative />
    </div>


    <p>Here's how to set up IoT connectivity on your farm.</p>

    <h2>Common Farm IoT Applications</h2>

    <h3>Livestock Monitoring</h3>
    <ul>
      <li>GPS trackers on animals (cattle, sheep)</li>
      <li>Health sensors (temperature, activity)</li>
      <li>Alerts when animals leave geofenced areas</li>
    </ul>

    <h3>Soil and Field Management</h3>
    <ul>
      <li>Soil moisture sensors</li>
      <li>Weather stations (rainfall, wind, temperature)</li>
      <li>Soil quality monitors</li>
      <li>Automated irrigation triggers</li>
    </ul>

    <h3>Equipment and Infrastructure</h3>
    <ul>
      <li>Fuel tank monitors (illegal siphoning alerts)</li>
      <li>Generator status (backup power tracking)</li>
      <li>Gate/door opening alerts</li>
      <li>Shed security cameras</li>
    </ul>

    <h3>Water and Energy</h3>
    <ul>
      <li>Borehole pump monitors</li>
      <li>Water tank level sensors</li>
      <li>Solar panel output monitors</li>
      <li>Electric fence voltage monitors</li>
    </ul>

    <img src={farmFields} alt="Rolling UK farmland where IoT sensors need reliable connectivity across vast distances" className="rounded-xl w-full" loading="lazy" />

    <h2>Connectivity Challenge</h2>

    <p>Farms are spread out. Your main farmhouse might have broadband, but your:</p>
    <ul>
      <li>Back 40 acres are 2km away</li>
      <li>Livestock grazing area is 5km out</li>
      <li>Water tank is 3km north</li>
    </ul>

    <p>Standard Wi-Fi doesn't reach. Cellular might be patchy.</p>

    <p>IoT devices need <strong>long-range, low-power, reliable</strong> connectivity.</p>

    <h2>IoT Connectivity Options</h2>

    <h3>Option 1: Wi-Fi + Range Extenders</h3>

    <p>Extend your main Wi-Fi across the property using repeaters or mesh nodes.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>Uses existing broadband</li>
      <li>Budget-friendly equipment cost</li>
      <li>Good for close distances (outbuildings)</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>Won't reach 2km+</li>
      <li>Mesh network becomes unreliable at distance</li>
      <li>Doesn't solve connectivity problem for remote fields</li>
    </ul>

    <p><strong>Use case:</strong> Connect barn 500m away, shed 1km away. Not suitable for remote field sensors.</p>

    <h3>Option 2: LoRaWAN (Low-Power Wide-Area Network)</h3>

    <p>LoRaWAN is a specialized protocol for IoT. Uses low power, long range (10km+), but very slow data rate.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>Extremely long range (10km+ line-of-sight)</li>
      <li>Very low power (sensors run on batteries for years)</li>
      <li>Purpose-built for IoT</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>Requires LoRaWAN gateway hardware</li>
      <li>Limited by UK network availability (not all areas have LoRaWAN coverage)</li>
      <li>Slow (not suitable for real-time camera streaming)</li>
    </ul>

    <p><strong>Use case:</strong> Soil moisture sensors, livestock GPS, weather stations. Not cameras.</p>

    <h3>Option 3: Cellular IoT (NB-IoT / LTE-M)</h3>

    <p>Specialised cellular protocols for IoT devices. Slower than regular 4G, but optimised for IoT.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>Works on existing cellular networks (EE, Vodafone, O2)</li>
      <li>Long battery life</li>
      <li>Decent coverage</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>Slower than 4G</li>
      <li>Limited to simple data (not video)</li>
      <li>Doesn't solve connectivity for remote areas outside cell range</li>
    </ul>

    <p><strong>Use case:</strong> Livestock trackers, soil sensors, alerts. Not video monitoring.</p>

    <h3>Option 4: P2P Radio Mesh (Recommended for Farms)</h3>

    <p>Point-to-point radio links bridging from main broadband to remote areas. Creates a mesh network across the property.</p>

    <p><strong>How it works:</strong></p>
    <ul>
      <li>Main site has broadband + radio transmitter</li>
      <li>Radio antenna on main house broadcasts</li>
      <li>Remote locations have receiving antenna + local Wi-Fi/Ethernet</li>
      <li>Data flows back through the radio link</li>
    </ul>

    <p><strong>Real example:</strong> Main farmhouse has Integra Pro broadband. Radio antenna on the roof broadcasts. Your barn 2km away has receiving antenna + Wi-Fi mesh covering the barn and grazing fields nearby.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>Works across the entire property (line-of-sight)</li>
      <li>Reliable (dedicated connection, not shared cellular)</li>
      <li>Integrates with your main broadband</li>
      <li>Can reach 5-10km with high-gain antennas</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>Requires professional installation</li>
      <li>Needs line-of-sight (can't go through dense forest)</li>
      <li>Weather impact minimal but rain can reduce range</li>
    </ul>

    <p><strong>Use case:</strong> Farms with multiple buildings or remote areas needing connectivity.</p>

    <img src={farmHillside} alt="Rural farmhouse with surrounding fields — typical property benefiting from radio mesh IoT connectivity" className="rounded-xl w-full" loading="lazy" />

    <h2>Real Example: Hillcrest Farm (Herefordshire)</h2>

    <p>Hillcrest Farm runs a beef operation across 200 acres. They needed:</p>
    <ul>
      <li>Livestock GPS tracking (animals across the property)</li>
      <li>Water tank monitoring (borehole 2km away)</li>
      <li>Grazing field soil sensors</li>
      <li>Remote CCTV (barn and main gates)</li>
    </ul>

    <p><strong>Solution:</strong> Integra Pro broadband at main house + P2P radio mesh.</p>

    <p><strong>Setup:</strong></p>
    <ul>
      <li>4G/5G bonded connection at farmhouse</li>
      <li>Radio antenna on barn roof, linked to farmhouse</li>
      <li>Remote Wi-Fi mesh nodes in grazing fields</li>
      <li>Livestock GPS trackers (cellular SIM each)</li>
      <li>IoT sensors (soil, water, cameras) on the remote Wi-Fi network</li>
    </ul>

    <p><strong>Result:</strong></p>
    <ul>
      <li>Livestock data updated every 30 seconds</li>
      <li>Water tank alerts real-time</li>
      <li>CCTV monitoring 24/7</li>
      <li>Soil moisture triggered automatic irrigation</li>
    </ul>

    <p><strong>Cost:</strong> P2P radio installation + Integra Pro monthly subscription + per-device SIM costs. Contact us for a detailed quote.</p>

    <h2>IoT Connectivity Recommendation Framework</h2>

    <p><strong>Single building / under 500m distance:</strong></p>
    <ul>
      <li>Wi-Fi range extenders or mesh (budget-friendly one-time investment)</li>
    </ul>

    <p><strong>Multiple buildings / 500m-2km distance:</strong></p>
    <ul>
      <li>P2P radio mesh + your main broadband</li>
    </ul>

    <p><strong>Remote fields / 2km+ distance:</strong></p>
    <ul>
      <li>Cellular IoT (livestock trackers with SIM cards) for mobile devices</li>
      <li>LoRaWAN sensors for stationary monitoring (if coverage available)</li>
      <li>P2P radio for extending main broadband to relay points</li>
    </ul>

    <p><strong>Entire property with mixed requirements:</strong></p>
    <ul>
      <li>Main broadband (Integra Pro or similar) + P2P radio mesh for connectivity + mix of cellular IoT for mobile assets + LoRaWAN/NB-IoT sensors where applicable</li>
    </ul>

    <h2>Data Requirements</h2>

    <p>Most farm IoT devices use minimal data:</p>
    <ul>
      <li>Livestock GPS: 1-2MB/day per tracker</li>
      <li>Soil sensors: 100KB/day each</li>
      <li>Weather station: 500KB/day</li>
      <li>CCTV streaming: 5-10GB/day if continuous</li>
    </ul>

    <p>Integra Pro's multi-network SIMs provide around 1.8TB of data per month — far more than any farm IoT setup would use. A fair usage policy applies, but in practice agricultural IoT sensors use very little data.</p>

    <h2>Important: Cellular SIM vs Wi-Fi for IoT</h2>

    <p><strong>IoT devices with cellular SIM:</strong></p>
    <ul>
      <li>Work anywhere (even remote fields)</li>
      <li>No Wi-Fi dependency</li>
      <li>Battery-powered sensors use less power than Wi-Fi</li>
      <li>Cost: Competitive monthly rate per device</li>
    </ul>

    <p><strong>IoT devices on your Wi-Fi:</strong></p>
    <ul>
      <li>Rely on Wi-Fi coverage</li>
      <li>Need Wi-Fi infrastructure (mesh nodes, repeaters)</li>
      <li>Work well for stationary sensors</li>
      <li>Cost: One-time Wi-Fi setup</li>
    </ul>

    <p><strong>Hybrid approach:</strong> Mix both. Livestock trackers get cellular SIMs (they roam). Barn sensors on Wi-Fi (they're stationary).</p>

    <img src={farmValley} alt="Farm village nestled in a valley — remote rural areas where Integra provides connectivity for smart agriculture" className="rounded-xl w-full" loading="lazy" />

    <h2>Next Step</h2>

    <p>Want to map IoT on your farm? Send us:</p>
    <ul>
      <li>Farm location (postcode)</li>
      <li>Property size and layout</li>
      <li>Specific IoT needs (livestock tracking? soil sensors? CCTV?)</li>
      <li>Key buildings/areas needing coverage</li>
    </ul>

    <p>We'll design a connectivity plan with costs.</p>
    <p data-seo-rollout="next-steps">
      <strong>Where to next:</strong> <Link to="/business-wifi" className="text-primary font-medium hover:underline">see our business Wi-Fi service</Link> · <Link to="/wireless-distribution" className="text-primary font-medium hover:underline">and wireless distribution for multi-building farms</Link> · <Link to="/blog/multi-building-wifi-rural-properties" className="text-primary font-medium hover:underline">plus how to deliver one Wi-Fi network across every building</Link>.
    </p>
  
    </BlogArticleLayout>
);

export default IoTConnectivityAgriculture;
