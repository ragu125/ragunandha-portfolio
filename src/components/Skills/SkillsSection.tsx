import React, { useState } from 'react';
import { 
  Flame, 
  Code, 
  Globe, 
  Brain, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? skills 
    : skills.filter(cat => cat.id === activeTab);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming': return <Code className="w-5 h-5 text-amber-400" />;
      case 'webdev': return <Globe className="w-5 h-5 text-sky-400" />;
      case 'ai-genai': return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'databases': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'tools-3d': return <Wrench className="w-5 h-5 text-rose-400" />;
      case 'core-cs': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'additional-tech': return <Sparkles className="w-5 h-5 text-sunset-orange" />;
      default: return <Flame className="w-5 h-5 text-gold-treasure" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-ocean-midnight/60 overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ocean-surface/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Flame className="w-3.5 h-3.5 text-sunset-orange" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              CREW ARSENAL & HAKI
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            CREW <span className="text-gold-treasure">ABILITIES</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Mastering the Arts of Full Stack Engineering, Generative AI, and Systems Architecture."
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-heading tracking-wider uppercase transition-all duration-200 ${
              activeTab === 'all'
                ? 'btn-gold text-ocean-deep font-bold shadow-md'
                : 'pirate-card text-cloud-white/80 hover:text-gold-bright hover:border-gold-treasure/50'
            }`}
          >
            All Abilities ({skills.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skills.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === cat.id
                  ? 'btn-gold text-ocean-deep font-bold shadow-md'
                  : 'pirate-card text-cloud-white/80 hover:text-gold-bright hover:border-gold-treasure/50'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/25 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gold-treasure/20 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-ocean-deep border border-gold-treasure/30 shadow-inner">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-pirate text-xl sm:text-2xl font-bold text-gold-bright tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-xs font-mono text-parchment-antique">
                      Grand Line Role: <span className="text-sunset-orange font-semibold">{category.pirateRole}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ocean-deep/80 border border-gold-treasure/30 text-xs font-mono text-gold-bright self-start sm:self-auto">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{category.badge}</span>
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-ocean-deep/80 border border-gold-treasure/15 hover:border-gold-treasure/50 hover:bg-ocean-deep transition-all duration-200 group relative"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                        <h4 className="font-heading text-sm font-bold text-cloud-white group-hover:text-gold-bright transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      {skill.level && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-treasure/15 text-gold-bright border border-gold-treasure/25">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-cloud-white/70 leading-relaxed font-sans pl-6">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

