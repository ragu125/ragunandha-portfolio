import React from 'react';
import { Compass, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const { developer } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ocean-deep border-t border-gold-treasure/30 py-16 overflow-hidden">
      {/* Top Gold Wave Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-foil" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-gold-treasure/15">
          
          {/* Brand & Tagline (5 Columns) */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <Compass className="w-6 h-6 text-gold-treasure animate-spin" style={{ animationDuration: '40s' }} />
              <h3 className="font-pirate text-2xl font-bold text-gold-bright tracking-wider">
                {developer.name}
              </h3>
            </div>
            <p className="font-heading text-xs font-bold tracking-widest text-sunset-orange uppercase">
              THE GRAND LINE DEVELOPER
            </p>
            <p className="font-serif italic text-sm text-parchment-antique max-w-sm mx-auto md:mx-0">
              "Every great adventure begins with a single line of code."
            </p>
          </div>

          {/* Quick Nav Links (4 Columns) */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-heading tracking-wider uppercase text-cloud-white/80">
            <button onClick={() => scrollToSection('about')} className="hover:text-gold-bright transition-colors">
              Captain
            </button>
            <button onClick={() => scrollToSection('education')} className="hover:text-gold-bright transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-gold-bright transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-gold-bright transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-gold-bright transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-gold-bright transition-colors">
              Treasures
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gold-bright transition-colors">
              Contact
            </button>
          </div>

          {/* Social Icons & Back to Top (3 Columns) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={developer.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-ocean-midnight border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={developer.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-ocean-midnight border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${developer.social.email}`}
                className="p-2.5 rounded-full bg-ocean-midnight border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-mono text-parchment-antique hover:text-gold-bright transition-colors"
            >
              <span>Back to Crow's Nest</span>
              <ArrowUp className="w-3.5 h-3.5 text-gold-treasure" />
            </button>
          </div>

        </div>

        {/* Copyright Subtext */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cloud-white/60 gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {developer.name}. All Grand Line Voyages Reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-rose-500">⚓</span>
            <span>Three.js, React & One Piece Spirit</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
