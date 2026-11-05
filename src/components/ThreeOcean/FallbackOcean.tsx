import React from 'react';

export const FallbackOcean: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-ocean-gradient">
      {/* Sky Sun Glow */}
      <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-gold-treasure/20 blur-3xl pointer-events-none" />

      {/* Distant Mountain Silhouettes */}
      <svg
        className="absolute bottom-28 w-full h-48 opacity-25"
        preserveAspectRatio="none"
        viewBox="0 0 1200 200"
      >
        <path
          d="M0 200 L0 120 Q150 40 300 130 T600 90 T900 150 T1200 80 L1200 200 Z"
          fill="#0B3552"
        />
        <path
          d="M0 200 L0 150 Q200 80 400 160 T800 120 T1200 140 L1200 200 Z"
          fill="#061B2C"
        />
      </svg>

      {/* Stylized Thousand Sunny Ship Silhouette & Graphic */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-80 h-72 animate-bob-slow">
        <svg viewBox="0 0 300 260" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
          {/* Main Hull */}
          <path d="M40 180 Q150 220 260 170 L240 140 L55 140 Z" fill="#1E293B" stroke="#D6AF62" strokeWidth="2" />
          <path d="M50 140 L245 140 L248 152 L47 152 Z" fill="#E9D4A6" />
          <rect x="70" y="115" width="70" height="25" fill="#D6AF62" rx="3" />
          
          {/* Mast & Main Sail */}
          <line x1="160" y1="30" x2="160" y2="140" stroke="#78350F" strokeWidth="5" />
          <line x1="105" y1="60" x2="215" y2="60" stroke="#78350F" strokeWidth="3" />
          <path d="M110 60 Q160 40 210 60 Q195 110 160 115 Q125 110 110 60 Z" fill="#F4F1E8" opacity="0.95" />
          
          {/* Jolly Roger Skull on Sail */}
          <circle cx="160" cy="85" r="14" fill="#111111" />
          <circle cx="155" cy="83" r="3" fill="#FFFFFF" />
          <circle cx="165" cy="83" r="3" fill="#FFFFFF" />
          <rect x="156" y="91" width="8" height="5" fill="#FFFFFF" rx="1" />
          
          {/* Sunny Lion Figurehead */}
          <circle cx="260" cy="160" r="22" fill="#F59E0B" stroke="#D6AF62" strokeWidth="3" />
          <circle cx="260" cy="160" r="14" fill="#D6AF62" />
          <circle cx="255" cy="158" r="3" fill="#111111" />
          <circle cx="265" cy="158" r="3" fill="#111111" />
          {/* Sun Rays */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 260 + Math.cos(angle) * 26;
            const y = 160 + Math.sin(angle) * 26;
            return <circle key={i} cx={x} cy={y} r="3" fill="#F59E0B" />;
          })}
        </svg>
      </div>

      {/* Layered Animated Ocean Waves */}
      <div className="absolute bottom-0 w-full">
        <svg
          className="w-full h-32 animate-wave-slow text-ocean-blue/70 fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
        <svg
          className="w-full h-24 -mt-16 text-ocean-deep fill-current opacity-90"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,85.3C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </div>
  );
};

