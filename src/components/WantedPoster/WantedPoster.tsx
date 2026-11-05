import React, { useState } from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface WantedPosterProps {
  className?: string;
  interactive?: boolean;
}

export const WantedPoster: React.FC<WantedPosterProps> = ({
  className = '',
  interactive = true,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative max-w-sm sm:max-w-md w-full mx-auto p-4 sm:p-6 wanted-paper wanted-border rounded-sm shadow-2xl select-none group ${className}`}
    >
      {/* Antique Pin / Nail at Top Center */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-stone-400 via-stone-600 to-stone-900 border border-stone-800 shadow-md flex items-center justify-center z-20">
        <div className="w-2 h-2 rounded-full bg-stone-950/80 shadow-inner" />
      </div>

      {/* Weathered Corner Creases */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-stone-800/40" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-stone-800/40" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-stone-800/40" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-stone-800/40" />

      {/* Marine Header Seal */}
      <div className="text-center mb-1">
        <span className="font-serif tracking-[0.35em] text-[10px] sm:text-xs font-bold text-stone-800/80 uppercase">
          ★ GRAND LINE ADMIRALTY ARCHIVE ★
        </span>
      </div>

      {/* WANTED Text */}
      <h1 className="font-pirate text-center text-4xl sm:text-5xl md:text-6xl font-black tracking-widest text-[#24170F] leading-tight my-1 drop-shadow-[0_2px_1px_rgba(255,255,255,0.4)]">
        WANTED
      </h1>

      {/* Dead or Alive Banner */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="h-[2px] w-10 sm:w-16 bg-[#24170F]/60" />
        <span className="font-serif tracking-[0.2em] text-[11px] sm:text-xs font-bold text-[#24170F]">
          DEAD OR ALIVE
        </span>
        <div className="h-[2px] w-10 sm:w-16 bg-[#24170F]/60" />
      </div>

      {/* Real Owner Photograph Container */}
      <div className="relative border-4 border-[#24170F] bg-stone-200/60 p-1.5 shadow-inner rounded-sm overflow-hidden group-hover:border-gold-dark transition-colors duration-300">
        <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-stone-900 rounded-sm">
          <img
            src="/images/ragunandha.jpg"
            alt="Ragunandha M — Full Stack & AI Engineer"
            className="w-full h-full object-cover object-[center_42%] filter contrast-[1.04] transition-transform duration-500 group-hover:scale-105"
            loading="eager"
            onError={(e) => {
              // Fallback to direct import if path needs adjustment
              const target = e.target as HTMLImageElement;
              target.src = '/src/assets/ragunandha.jpg';
            }}
          />
          {/* Subtle Vintage Halftone Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-amber-100/10 pointer-events-none" />

          {/* Golden Corner Accents */}
          <div className="absolute top-2 left-2 text-gold-treasure/70">
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>
      </div>

      {/* Wanted Poster Name */}
      <div className="text-center mt-3">
        <h2 className="font-pirate text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-[#24170F] leading-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
          RAGUNANDHA M
        </h2>
        <div className="inline-block mt-0.5 px-3 py-0.5 rounded-sm bg-[#24170F]/10 border border-[#24170F]/30">
          <p className="font-heading text-xs sm:text-sm font-bold tracking-widest text-[#24170F] uppercase">
            FULL STACK & AI ENGINEER
          </p>
        </div>
      </div>

      {/* Verified Status: OPEN TO OPPORTUNITIES (No invented bounty amount) */}
      <div className="mt-4 pt-3 border-t-2 border-dashed border-[#24170F]/40 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-emerald-900 bg-emerald-700/15 border border-emerald-800/40 px-4 py-1.5 rounded-full font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping inline-block" />
          <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
          <span>OPEN TO OPPORTUNITIES</span>
        </div>
        <p className="text-[10px] font-serif text-stone-700/70 tracking-widest mt-1.5 uppercase">
          RECRUITER & PIRATE ALLIANCE GRANTED
        </p>
      </div>

      {/* Marine Official Stamp */}
      <div className="absolute bottom-5 right-4 pointer-events-none opacity-85 rotate-[-12deg]">
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-dashed border-red-800/70 flex flex-col items-center justify-center text-red-900 font-serif text-[8px] font-black tracking-widest p-1">
          <span className="text-[7px]">GRAND LINE</span>
          <span className="text-[10px] font-bold">VERIFIED</span>
          <span className="text-[6px]">ENGINEER</span>
        </div>
      </div>
    </div>
  );
};

