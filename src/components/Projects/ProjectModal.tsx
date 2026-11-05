import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Layers, 
  Code2, 
  Terminal
} from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-ocean-deep/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-ocean-midnight border-2 border-gold-treasure rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-ocean-deep via-ocean-surface/40 to-ocean-deep border-b border-gold-treasure/30 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-pirate text-xs tracking-wider text-ocean-deep bg-gold-treasure px-2.5 py-0.5 rounded font-bold">
                {project.islandNumber}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-ocean-deep border border-gold-treasure/30 text-gold-bright">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                {project.badge}
              </span>
            </div>
            <h3 className="font-pirate text-2xl sm:text-4xl font-extrabold text-cloud-white tracking-wide">
              {project.title}
            </h3>
            <p className="mt-1 font-serif italic text-parchment text-sm sm:text-base">
              "{project.tagline}"
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-ocean-deep border border-gold-treasure/30 text-parchment-antique hover:text-gold-bright hover:border-gold-treasure transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[72vh] overflow-y-auto">
          
          {/* Simulated Project Showcase Preview Canvas */}
          <div className="rounded-xl overflow-hidden border border-gold-treasure/30 bg-ocean-deep relative shadow-inner">
            <div className="h-9 bg-ocean-midnight/90 border-b border-gold-treasure/20 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-cloud-white/60">
                  {project.id}://grand-line-preview.sh
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gold-bright">
                <Terminal className="w-3.5 h-3.5" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Interactive Preview Canvas */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-ocean-deep via-ocean-surface/20 to-ocean-deep min-h-[180px] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-ocean-midnight border-2 border-gold-treasure flex items-center justify-center text-gold-treasure shadow-lg shadow-gold-treasure/20 mb-3">
                <Code2 className="w-8 h-8" />
              </div>
              <h4 className="font-pirate text-xl text-gold-bright tracking-wider">
                {project.title}
              </h4>
              <p className="text-xs font-mono text-parchment-antique max-w-md mt-1">
                {project.technologies.join(' • ')}
              </p>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gold-treasure flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sunset-orange" />
              <span>PROJECT OVERVIEW & VOYAGE PURPOSE</span>
            </h4>
            <p className="text-sm text-cloud-white/85 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Features Checklist */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gold-treasure flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>KEY FEATURES & CAPABILITIES</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15 text-xs text-cloud-white/90">
                  <span className="text-gold-treasure font-bold">⚓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown (when available) */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gold-treasure flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-400" />
                <span>SYSTEM ARCHITECTURE & DESIGN</span>
              </h4>
              <div className="space-y-2">
                {project.architecture.map((arch, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-lg bg-ocean-deep/60 border-l-4 border-gold-treasure text-xs text-cloud-white/85 font-mono">
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used Badges */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gold-treasure flex items-center gap-2">
              <Layers className="w-4 h-4 text-sunset-orange" />
              <span>TECHNOLOGIES & TOOLS</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-ocean-deep border border-gold-treasure/30 text-gold-bright"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Real Working GitHub and Demo Links */}
        <div className="p-6 bg-ocean-deep border-t border-gold-treasure/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-parchment-antique text-center sm:text-left">
            Source Code Repository: <span className="text-cloud-white font-semibold">{project.githubUrl}</span>
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full btn-gold text-xs flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>VIEW REPOSITORY</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full btn-ocean text-xs flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE PREVIEW</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
