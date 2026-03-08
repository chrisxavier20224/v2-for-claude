import { motion } from "framer-motion";
import { useMemo } from "react";

interface GeneratorMarker {
  id: string;
  x: number;
  y: number;
  isHovered?: boolean;
  fleetRef?: string;
  engine?: string;
  state?: string;
  isRunning?: boolean;
  status?: 'running' | 'idle' | 'warning' | 'offline';
}

// Generate ~100 generators spread across UK regions
const generateFleetMarkers = (): GeneratorMarker[] => {
  const markers: GeneratorMarker[] = [];
  
  // UK region bounds (approximate x,y percentages on the map)
  const regions = [
    // Scotland - north
    { minX: 38, maxX: 55, minY: 8, maxY: 25, count: 12 },
    // North England
    { minX: 45, maxX: 62, minY: 26, maxY: 40, count: 15 },
    // Midlands
    { minX: 42, maxX: 65, minY: 41, maxY: 55, count: 20 },
    // Wales
    { minX: 32, maxX: 45, minY: 50, maxY: 70, count: 10 },
    // East England
    { minX: 58, maxX: 72, minY: 45, maxY: 65, count: 12 },
    // South West
    { minX: 35, maxX: 50, minY: 72, maxY: 88, count: 10 },
    // South East / London area
    { minX: 52, maxX: 68, minY: 66, maxY: 80, count: 18 },
    // Ireland (fewer)
    { minX: 18, maxX: 32, minY: 32, maxY: 52, count: 5 },
  ];
  
  const statuses: ('running' | 'idle' | 'warning' | 'offline')[] = ['running', 'idle', 'warning', 'offline'];
  const engines = ['100kVa', '200kVa', '300kVa', '500kVa', '750kVa', '1000kVa'];
  const states = ['Loaded', 'Idle', 'Warming', 'Standby'];
  
  let id = 1;
  
  regions.forEach(region => {
    for (let i = 0; i < region.count; i++) {
      // Seeded random for consistency
      const seed = id * 137;
      const x = region.minX + ((seed * 7) % 100) / 100 * (region.maxX - region.minX);
      const y = region.minY + ((seed * 13) % 100) / 100 * (region.maxY - region.minY);
      const status = statuses[(seed * 3) % statuses.length];
      
      markers.push({
        id: String(id),
        x,
        y,
        status,
        fleetRef: `HDG${String(id).padStart(3, '0')}`,
        engine: engines[(seed * 5) % engines.length],
        state: states[(seed * 11) % states.length],
        isRunning: status === 'running',
        isHovered: id === 42, // Show one popup as example
      });
      id++;
    }
  });
  
  return markers;
};

const getStatusColor = (status?: string) => {
  switch (status) {
    case 'running': return 'hsl(142 76% 45%)'; // green
    case 'idle': return 'hsl(216 100% 50%)'; // blue
    case 'warning': return 'hsl(38 92% 50%)'; // amber
    case 'offline': return 'hsl(0 0% 50%)'; // gray
    default: return 'hsl(216 100% 50%)';
  }
};

const GeneratorDot = ({ status }: { status?: string }) => (
  <div 
    className="w-2 h-2 rounded-full shadow-sm"
    style={{ 
      backgroundColor: getStatusColor(status),
      boxShadow: `0 0 4px ${getStatusColor(status)}`,
    }}
  />
);

const FleetMapPreview = () => {
  const generators = useMemo(() => generateFleetMarkers(), []);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      {/* Grey map background with UK shape */}
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Water/sea background */}
        <rect width="100" height="100" fill="hsl(210 15% 25%)"/>
        
        {/* Subtle grid pattern for map feel */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(210 10% 30%)" strokeWidth="0.2"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)"/>
        
        {/* Simplified UK landmass - grey with subtle border */}
        <path 
          d="M 40 10 
             Q 45 8, 50 12
             Q 55 10, 52 18
             Q 58 20, 55 28
             Q 60 30, 58 38
             Q 65 42, 62 48
             Q 68 52, 65 58
             Q 70 65, 65 72
             Q 68 78, 60 82
             Q 55 88, 48 85
             Q 42 88, 38 82
             Q 32 80, 35 72
             Q 30 68, 35 62
             Q 28 55, 35 50
             Q 30 45, 36 40
             Q 32 35, 38 30
             Q 35 22, 40 18
             Q 38 14, 40 10
             Z"
          fill="hsl(210 10% 35%)"
          stroke="hsl(210 10% 45%)"
          strokeWidth="0.5"
        />
        
        {/* Scotland */}
        <path 
          d="M 42 8
             Q 48 5, 52 10
             Q 55 8, 53 15
             Q 56 18, 52 22
             Q 48 25, 44 22
             Q 40 24, 38 18
             Q 36 12, 42 8
             Z"
          fill="hsl(210 10% 38%)"
          stroke="hsl(210 10% 45%)"
          strokeWidth="0.3"
        />
        
        {/* Ireland (partial, for context) */}
        <path 
          d="M 22 35
             Q 28 30, 32 35
             Q 35 40, 32 48
             Q 28 55, 22 50
             Q 18 45, 20 40
             Q 18 35, 22 35
             Z"
          fill="hsl(210 10% 33%)"
          stroke="hsl(210 10% 42%)"
          strokeWidth="0.3"
        />
      </svg>

      {/* Generator markers - small dots for zoomed out view */}
      {generators.map((gen) => (
        <div
          key={gen.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${gen.x}%`, top: `${gen.y}%` }}
        >
          {/* Subtle pulsing glow for running generators */}
          {gen.status === 'running' && (
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 12,
                height: 12,
                left: -5,
                top: -5,
                background: `radial-gradient(circle, ${getStatusColor(gen.status)}40 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: parseInt(gen.id) * 0.05 % 2, // Stagger animations
              }}
            />
          )}
          
          {/* Generator dot */}
          <GeneratorDot status={gen.status} />

          {/* Info popup for hovered generator */}
          {gen.isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
            >
              <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-xl min-w-[140px]">
                {/* Arrow pointing left */}
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
                  <div className="border-6 border-transparent border-r-background/95" />
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Fleet</span>
                    <span className="text-xs font-semibold text-foreground">{gen.fleetRef}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Engine</span>
                    <span className="text-xs font-medium text-foreground">{gen.engine}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">State</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-foreground">{gen.state}</span>
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: getStatusColor(gen.status) }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      ))}

      {/* Fleet count overlay */}
      <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm rounded px-2 py-1 border border-border/30">
        <span className="text-xs text-muted-foreground">{generators.length} generators</span>
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm rounded px-2 py-1.5 border border-border/30">
        <div className="flex items-center gap-3 text-[10px]">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(142 76% 45%)' }} />
            <span className="text-muted-foreground">Running</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(216 100% 50%)' }} />
            <span className="text-muted-foreground">Idle</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(38 92% 50%)' }} />
            <span className="text-muted-foreground">Warning</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(0 0% 50%)' }} />
            <span className="text-muted-foreground">Offline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetMapPreview;
