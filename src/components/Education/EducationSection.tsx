import React, { useState } from 'react';
import { Compass, GraduationCap, MapPin, Calendar, Award, ChevronRight, Anchor } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;
  const [selectedIsland, setSelectedIsland] = useState<string>('island-vsb');

  return (
    <section id="education" className="relative py-24 bg-ocean-deep overflow-hidden">
      {/* Decorative Nautical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B3552_1px,transparent_1px),linear-gradient(to_bottom,#0B3552_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Anchor className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              ACADEMIC ARCHIPELAGO
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            ORIGIN <span className="text-gold-treasure">ISLANDS</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Charting the Foundations of Knowledge Across the Grand Line."
          </p>
        </div>

        {/* Interactive Grand Line Map Representation */}
        <div className="relative mb-12 p-6 sm:p-8 rounded-2xl bg-ocean-midnight/90 border border-gold-treasure/30 shadow-2xl overflow-hidden">
          
          {/* Map Compass Rose Watermark */}
          <div className="absolute top-4 right-4 text-gold-treasure/10 pointer-events-none">
            <Compass className="w-48 h-48 animate-spin" style={{ animationDuration: '60s' }} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gold-treasure/20 mb-8 gap-4">
            <div>
              <h3 className="font-pirate text-xl sm:text-2xl font-bold text-gold-bright">
                GRAND LINE NAUTICAL CHART
              </h3>
              <p className="text-xs text-parchment-antique font-mono">
                Click any island station to inspect its academic logbook
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-ocean-deep px-3 py-1.5 rounded-full border border-gold-treasure/20">
              <span className="w-2 h-2 rounded-full bg-gold-treasure animate-ping" />
              <span className="text-cloud-white">ROUTE: 2021 ➔ 2023 ➔ 2027</span>
            </div>
          </div>

          {/* Island Station Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {education.map((item) => {
              const isSelected = selectedIsland === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIsland(item.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 relative group ${
                    isSelected
                      ? 'bg-ocean-surface/60 border-2 border-gold-treasure shadow-xl shadow-gold-treasure/10 scale-[1.02]'
                      : 'bg-ocean-deep/70 border border-gold-treasure/20 hover:border-gold-treasure/50 hover:bg-ocean-surface/30'
                  }`}
                >
                  {/* Island Header with Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-pirate text-xs tracking-widest text-gold-bright bg-gold-treasure/20 px-2.5 py-1 rounded border border-gold-treasure/40">
                      {item.islandNumber}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-parchment-antique">
                      <Calendar className="w-3.5 h-3.5 text-gold-treasure" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Island Illustration Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                      isSelected
                        ? 'bg-gold-treasure text-ocean-deep border-gold-bright shadow-lg shadow-gold-treasure/30'
                        : 'bg-ocean-midnight text-gold-treasure border-gold-treasure/30 group-hover:border-gold-treasure'
                    }`}>
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-cloud-white group-hover:text-gold-bright transition-colors line-clamp-1">
                        {item.institution.split(',')[0]}
                      </h4>
                      <p className="text-[11px] text-parchment-antique font-mono flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-sunset-orange shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Degree / Grade Tag */}
                  <div className="space-y-2 pt-2 border-t border-gold-treasure/15">
                    <p className="text-xs font-medium text-cloud-white/90 font-sans">
                      {item.degree}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-heading text-parchment-antique uppercase">
                        {item.gradeLabel}:
                      </span>
                      <span className="font-pirate text-base font-bold text-gold-bright bg-gold-treasure/15 px-2 py-0.5 rounded border border-gold-treasure/30">
                        {item.gradeValue}
                      </span>
                    </div>
                  </div>

                  {/* Selection indicator pill */}
                  <div className="mt-4 flex items-center justify-end text-xs font-heading text-gold-treasure group-hover:text-gold-bright">
                    <span className="text-[11px] tracking-wider uppercase">
                      {isSelected ? 'Station Active' : 'View Station'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Island Deep Dive Card */}
        {education.map((item) => {
          if (item.id !== selectedIsland) return null;
          return (
            <div
              key={`detail-${item.id}`}
              className="wanted-paper wanted-border p-6 sm:p-8 rounded-lg shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b-2 border-dashed border-[#24170F]/40 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-pirate text-sm font-black text-amber-900 bg-[#24170F]/15 px-2.5 py-0.5 rounded">
                      {item.islandNumber} ARCHIVAL LOG
                    </span>
                    {item.university && (
                      <span className="font-serif text-xs font-bold text-stone-700 bg-stone-300/60 px-2 py-0.5 rounded">
                        Affiliated to {item.university}
                      </span>
                    )}
                  </div>
                  <h3 className="font-pirate text-2xl sm:text-3xl font-extrabold text-[#24170F]">
                    {item.institution}
                  </h3>
                  <p className="font-heading text-sm font-bold text-stone-800 tracking-wide mt-1">
                    {item.degree}
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-[#24170F]/10 px-5 py-3 rounded-lg border border-[#24170F]/20">
                  <Award className="w-8 h-8 text-[#24170F]" />
                  <div>
                    <span className="text-[10px] font-heading uppercase text-stone-700 tracking-wider block">
                      OFFICIAL {item.gradeLabel}
                    </span>
                    <span className="font-pirate text-2xl sm:text-3xl font-black text-[#24170F]">
                      {item.gradeValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-start">
                <div className="md:col-span-7 space-y-3">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#24170F]">
                    ACADEMIC FOCUS & OVERVIEW
                  </h4>
                  <p className="text-sm font-serif text-[#24170F]/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#24170F]">
                    NOTABLE VOYAGE ACHIEVEMENTS
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-serif text-[#24170F]/90">
                        <span className="text-amber-800 font-bold mt-0.5">⚓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
