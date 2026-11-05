import React from 'react';
import { Compass, Ship, Calendar, CheckCircle2, Anchor } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 bg-ocean-midnight/70 overflow-hidden">
      {/* Background Nautical Map Compass */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 text-gold-treasure/5 pointer-events-none">
        <Compass className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Ship className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              EXPEDITION LOGS
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            PAST <span className="text-gold-treasure">VOYAGES</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Three Grand Line Expeditions Across Full Stack, Web, and Java Architectures."
          </p>
        </div>

        {/* Voyage Route Timeline */}
        <div className="relative">
          {/* Central Sea Route Spine (Animated dashed line on desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-gold-treasure via-sunset-orange to-gold-treasure opacity-40 border-l-2 border-dashed border-gold-treasure" />

          <div className="space-y-12 lg:space-y-16">
            {experience.map((voyage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={voyage.id}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Voyage Card (6 Columns) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'}`}>
                    <div className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/30 hover:border-gold-treasure transition-all duration-300 relative group">
                      
                      {/* Top Voyage Label & Period */}
                      <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        <span className="font-pirate text-xs tracking-wider text-ocean-deep bg-gold-treasure px-2.5 py-0.5 rounded font-bold">
                          {voyage.voyageNumber}
                        </span>
                        <span className="text-xs font-mono text-gold-bright bg-ocean-deep px-2.5 py-0.5 rounded border border-gold-treasure/25 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-gold-treasure" />
                          <span>{voyage.duration}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-pirate text-2xl sm:text-3xl font-extrabold text-cloud-white group-hover:text-gold-bright transition-colors">
                        {voyage.company}
                      </h3>
                      <p className="font-heading text-sm font-bold tracking-wider text-sunset-orange uppercase mt-1">
                        {voyage.role}
                      </p>

                      {/* Sea Route Tag */}
                      <div className={`mt-2 flex items-center gap-1.5 text-xs font-mono text-parchment-antique ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        <Compass className="w-3.5 h-3.5 text-gold-treasure" />
                        <span>Route: {voyage.seaRoute}</span>
                      </div>

                      {/* Responsibilities */}
                      <div className="mt-6 pt-6 border-t border-gold-treasure/15 space-y-2.5 text-left">
                        {voyage.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-cloud-white/85">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Used */}
                      <div className={`mt-6 pt-4 border-t border-gold-treasure/10 flex flex-wrap gap-1.5 ${isEven ? 'lg:justify-end' : 'justify-start'}`}>
                        {voyage.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-ocean-deep border border-gold-treasure/20 text-gold-bright"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Ship Marker (2 Columns on desktop) */}
                  <div className="lg:col-span-2 hidden lg:flex justify-center items-center">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-ocean-deep border-2 border-gold-treasure flex items-center justify-center text-gold-treasure shadow-xl shadow-gold-treasure/20 z-10 animate-bob-slow">
                        <Ship className="w-7 h-7 text-gold-bright" />
                      </div>
                      <div className="absolute -inset-2 rounded-full bg-gold-treasure/20 blur-md pointer-events-none" />
                    </div>
                  </div>

                  {/* Voyage Route Highlight Summary (5 Columns) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
                    <div className="p-6 rounded-2xl bg-ocean-deep/50 border border-gold-treasure/15 text-xs text-parchment-antique font-mono space-y-2">
                      <div className={`flex items-center gap-2 text-gold-treasure font-heading text-xs font-bold uppercase tracking-wider ${isEven ? '' : 'lg:justify-end'}`}>
                        <Anchor className="w-3.5 h-3.5" />
                        <span>EXPEDITION HIGHLIGHT</span>
                      </div>
                      <p className="text-cloud-white/80 leading-relaxed font-sans">
                        {voyage.highlight}
                      </p>
                      <p className="text-[11px] text-emerald-400 font-mono">
                        ✔ Completed with verified internship credentials
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
