import React from 'react';
import { Compass, FileDown, Mail, ArrowDown, Anchor } from 'lucide-react';
import { WantedPoster } from '../WantedPoster/WantedPoster';
import { GrandLineScene } from '../ThreeOcean/GrandLineScene';
import confetti from 'canvas-confetti';

export const HeroSection: React.FC = () => {
  const handleExplore = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D6AF62', '#E78B45', '#0B3552', '#F4F1E8'],
    });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Grand Line Ocean & Thousand Sunny Canvas */}
      <GrandLineScene />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Captain Wanted Poster */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Golden pirate aura behind the poster */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-treasure/20 via-sunset-orange/15 to-transparent rounded-2xl blur-2xl pointer-events-none" />
              
              <WantedPoster interactive={true} />
            </div>
          </div>

          {/* Right Column: Hero Typography & Call-To-Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            
            {/* Pirate Flag & Subtitle Ribbon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ocean-midnight/80 border border-gold-treasure/40 backdrop-blur-md shadow-lg shadow-gold-treasure/10">
              <Anchor className="w-4 h-4 text-gold-treasure animate-pulse" />
              <span className="font-heading text-xs tracking-widest text-gold-bright uppercase">
                THE GRAND LINE DEVELOPER
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sunset-orange" />
              <span className="text-[11px] font-mono text-cloud-white/80">
                CLASS OF 2027
              </span>
            </div>

            {/* Captain Name & Professional Title */}
            <div>
              <h1 className="font-pirate text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-cloud-white tracking-wide leading-none gold-text-glow">
                RAGUNANDHA <span className="text-gold-treasure">M</span>
              </h1>
              <div className="mt-2.5 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest text-sunset-orange">
                  FULL STACK & AI ENGINEER
                </span>
              </div>
            </div>

            {/* Main Tagline & Hero Statement */}
            <div className="space-y-2 border-l-0 lg:border-l-4 lg:border-gold-treasure/60 lg:pl-4 py-1">
              <p className="font-serif italic text-lg sm:text-xl text-gold-bright tracking-wide">
                "Setting Sail Towards Intelligent Digital Experiences."
              </p>
              <p className="text-xs sm:text-sm font-heading tracking-widest text-parchment-antique uppercase">
                Every Great Developer Begins With An Adventure.
              </p>
            </div>

            {/* Authentic Bio Description */}
            <p className="text-sm sm:text-base text-cloud-white/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              I'm a Computer Science Engineering student passionate about{' '}
              <span className="text-gold-bright font-semibold">Full Stack Development</span>,{' '}
              <span className="text-gold-bright font-semibold">Artificial Intelligence</span>, and building innovative digital experiences. I enjoy transforming ideas into practical software solutions through programming, modern technologies, and intelligent systems.
            </p>

            {/* Action Buttons: All 3 Buttons Working Perfectly */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap">
              {/* 1. Explore The Grand Line */}
              <button
                onClick={handleExplore}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full btn-gold text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-ocean-deep group-hover:rotate-45 transition-transform duration-300" />
                <span>EXPLORE THE GRAND LINE</span>
              </button>

              {/* 2. Download My Resume */}
              <a
                href="/resume.pdf"
                download="Ragunandha_M_Resume.pdf"
                onClick={handleResumeDownload}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full btn-ocean text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-gold-treasure group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD MY RESUME</span>
              </a>

              {/* 3. Contact The Captain */}
              <button
                onClick={handleContact}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-heading tracking-wider uppercase text-cloud-white/80 hover:text-gold-bright flex items-center justify-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-gold-treasure" />
                <span>CONTACT THE CAPTAIN</span>
              </button>
            </div>

            {/* Quick Stats Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="pirate-card p-2.5 rounded-lg text-center border-gold-treasure/20">
                <span className="block font-pirate text-xl sm:text-2xl font-bold text-gold-bright">8.23</span>
                <span className="text-[10px] font-heading tracking-widest text-parchment-antique uppercase">CGPA (CSE)</span>
              </div>
              <div className="pirate-card p-2.5 rounded-lg text-center border-gold-treasure/20">
                <span className="block font-pirate text-xl sm:text-2xl font-bold text-sunset-orange">3</span>
                <span className="text-[10px] font-heading tracking-widest text-parchment-antique uppercase">VOYAGES (INTERNS)</span>
              </div>
              <div className="pirate-card p-2.5 rounded-lg text-center border-gold-treasure/20">
                <span className="block font-pirate text-xl sm:text-2xl font-bold text-emerald-400">4</span>
                <span className="text-[10px] font-heading tracking-widest text-parchment-antique uppercase">MAJOR PROJECTS</span>
              </div>
              <div className="pirate-card p-2.5 rounded-lg text-center border-gold-treasure/20">
                <span className="block font-pirate text-xl sm:text-2xl font-bold text-sky-400">2027</span>
                <span className="text-[10px] font-heading tracking-widest text-parchment-antique uppercase">GRADUATION</span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <button
            onClick={handleExplore}
            className="flex flex-col items-center gap-1.5 text-parchment-antique hover:text-gold-bright transition-colors group cursor-pointer focus:outline-none"
            aria-label="Scroll to Meet the Captain"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">NAVIGATE SOUTHWARD</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-gold-treasure group-hover:text-gold-bright" />
          </button>
        </div>
      </div>
    </section>
  );
};
