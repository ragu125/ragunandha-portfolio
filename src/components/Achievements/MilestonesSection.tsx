import React from 'react';
import { Award, Trophy, Ship, Code2, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const MilestonesSection: React.FC = () => {
  const { milestones } = portfolioData;

  const getMilestoneIcon = (icon: string) => {
    switch (icon) {
      case 'Award': return <Award className="w-6 h-6 text-gold-bright" />;
      case 'Ship': return <Ship className="w-6 h-6 text-sunset-orange" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      default: return <Sparkles className="w-6 h-6 text-gold-treasure" />;
    }
  };

  return (
    <section id="milestones" className="relative py-24 bg-ocean-deep overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ocean-surface/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Trophy className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              HALL OF MARITIME GLORY
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            CAPTAIN'S <span className="text-gold-treasure">MILESTONES</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Chronicles of Academic Excellence, Industrial Internships, and Technical Breakthroughs."
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/25 hover:border-gold-treasure transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Ornament */}
              <div className="absolute top-2 right-2 text-gold-treasure/20 group-hover:text-gold-treasure/40 transition-colors">
                <Star className="w-5 h-5 fill-current" />
              </div>

              <div>
                {/* Year & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-ocean-deep border border-gold-treasure/30 text-gold-bright">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-sunset-orange">
                    {m.category}
                  </span>
                </div>

                {/* Badge Icon */}
                <div className="w-14 h-14 rounded-2xl bg-ocean-deep border-2 border-gold-treasure/40 group-hover:border-gold-treasure flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {getMilestoneIcon(m.icon)}
                </div>

                {/* Milestone Title */}
                <h3 className="font-pirate text-xl font-bold text-cloud-white group-hover:text-gold-bright transition-colors">
                  {m.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-cloud-white/80 leading-relaxed font-sans">
                  {m.description}
                </p>
              </div>

              {/* Honor Seal / Verified Check */}
              <div className="mt-6 pt-4 border-t border-gold-treasure/15 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Accomplishment</span>
                </span>
                <span className="text-gold-treasure font-bold">
                  ★ HONOR
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

