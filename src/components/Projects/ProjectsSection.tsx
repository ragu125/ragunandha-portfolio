import React, { useState } from 'react';
import { 
  Sparkles, 
  Github, 
  Compass, 
  Code2, 
  Bot, 
  Receipt, 
  Glasses,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'code-slayer': return <Code2 className="w-6 h-6 text-gold-treasure" />;
      case 'zoro-ai-assist': return <Bot className="w-6 h-6 text-emerald-400" />;
      case 'expense-tracker': return <Receipt className="w-6 h-6 text-sky-400" />;
      case 'ar-shopping-mall': return <Glasses className="w-6 h-6 text-pink-400" />;
      default: return <Sparkles className="w-6 h-6 text-gold-treasure" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-ocean-deep overflow-hidden">
      {/* Background Decorative Sea Chart */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              GRAND LINE ARCHIPELAGO
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            TREASURE <span className="text-gold-treasure">ISLANDS</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Four Explorable Islands of Technical Engineering and Innovation."
          </p>
        </div>

        {/* Grand Line Interactive Island World Map */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-ocean-midnight/90 border border-gold-treasure/30 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gold-treasure/20 mb-8 gap-4">
            <div>
              <h3 className="font-pirate text-xl sm:text-2xl font-bold text-gold-bright">
                VOYAGE TARGET SELECTION
              </h3>
              <p className="text-xs text-parchment-antique font-mono">
                Click any project island to inspect full architecture, repo, and features
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gold-bright bg-ocean-deep px-3 py-1.5 rounded-full border border-gold-treasure/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>4 OF 4 ISLANDS CHARTED</span>
            </div>
          </div>

          {/* Islands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className="pirate-card p-6 rounded-xl cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between border-gold-treasure/20 hover:border-gold-treasure relative"
              >
                {/* Island Number Ribbon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-pirate text-xs tracking-wider text-ocean-deep bg-gold-treasure px-2 py-0.5 rounded font-bold">
                      {proj.islandNumber}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ocean-deep text-parchment-antique border border-gold-treasure/20">
                      {proj.category}
                    </span>
                  </div>

                  {/* Island Graphic Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-ocean-deep border-2 border-gold-treasure/40 group-hover:border-gold-treasure flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold-treasure/20">
                    {getProjectIcon(proj.id)}
                  </div>

                  {/* Island Title & Tagline */}
                  <h4 className="font-pirate text-xl font-bold text-cloud-white group-hover:text-gold-bright transition-colors">
                    {proj.title}
                  </h4>
                  <p className="mt-2 text-xs text-cloud-white/70 line-clamp-2 font-sans">
                    {proj.tagline}
                  </p>
                </div>

                {/* Tech Pills & Explore Link */}
                <div className="mt-6 pt-4 border-t border-gold-treasure/15">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-ocean-deep/90 text-parchment-antique">
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-ocean-deep text-gold-treasure">
                        +{proj.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-heading text-gold-treasure group-hover:text-gold-bright">
                    <span className="text-[11px] tracking-wider uppercase font-bold">Inspect Island</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Featured Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={`card-${proj.id}`}
              className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/25 flex flex-col justify-between relative group hover:border-gold-treasure transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-pirate text-xs tracking-wider text-ocean-deep bg-gold-treasure px-2.5 py-0.5 rounded font-bold">
                      {proj.islandNumber}
                    </span>
                    <span className="text-xs font-mono text-gold-bright bg-ocean-deep px-2.5 py-0.5 rounded border border-gold-treasure/30">
                      {proj.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="text-xs font-mono text-parchment-antique hover:text-gold-bright flex items-center gap-1 transition-colors"
                  >
                    <span>Full Log</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="font-pirate text-2xl sm:text-3xl font-extrabold text-cloud-white group-hover:text-gold-bright transition-colors">
                  {proj.title}
                </h3>
                <p className="mt-1 font-serif italic text-parchment-antique text-sm">
                  "{proj.tagline}"
                </p>

                <p className="mt-4 text-xs sm:text-sm text-cloud-white/80 leading-relaxed font-sans">
                  {proj.description}
                </p>

                {/* Key Features Bullets */}
                <div className="mt-6 space-y-2">
                  <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gold-treasure">
                    CORE HIGHLIGHTS:
                  </h4>
                  <ul className="space-y-1.5">
                    {proj.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-cloud-white/85 flex items-start gap-2">
                        <span className="text-gold-treasure font-bold">⚓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gold-treasure/20 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-ocean-deep border border-gold-treasure/20 text-gold-bright"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveProject(proj)}
                    className="flex-1 py-2.5 rounded-full btn-gold text-xs flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>EXPLORE PROJECT</span>
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-full btn-ocean text-xs flex items-center justify-center gap-1.5"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4 text-gold-treasure" />
                    <span className="hidden sm:inline">CODE</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
