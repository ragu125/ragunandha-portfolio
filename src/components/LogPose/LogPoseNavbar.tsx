import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  FileDown, 
  Anchor, 
  Ship, 
  Sparkles,
  MapPin,
  Flame,
  Award
} from 'lucide-react';
import { oceanAudio } from '../../utils/audio';
import confetti from 'canvas-confetti';

interface NavSection {
  id: string;
  name: string;
  shortName: string;
  island: string;
  icon: React.ReactNode;
}

const navSections: NavSection[] = [
  { id: 'hero', name: 'Grand Line', shortName: 'Home', island: 'Starting Harbor', icon: <Anchor className="w-4 h-4" /> },
  { id: 'about', name: "Captain's Profile", shortName: 'Captain', island: 'Pirate Deck', icon: <Ship className="w-4 h-4" /> },
  { id: 'education', name: 'Origin Island', shortName: 'Education', island: 'Island of Knowledge', icon: <MapPin className="w-4 h-4" /> },
  { id: 'skills', name: 'Crew Abilities', shortName: 'Skills', island: 'Ability Forge', icon: <Flame className="w-4 h-4" /> },
  { id: 'projects', name: 'Treasure Islands', shortName: 'Projects', island: 'Treasure Archipelagos', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'experience', name: 'Past Voyages', shortName: 'Experience', island: 'Voyage Logs', icon: <Compass className="w-4 h-4" /> },
  { id: 'certifications', name: 'Treasure Vault', shortName: 'Certificates', island: 'Golden Vaults', icon: <Award className="w-4 h-4" /> },
  { id: 'coding-dashboard', name: 'Pirate Records', shortName: 'GitHub/LeetCode', island: 'Bounty Board', icon: <Anchor className="w-4 h-4" /> },
  { id: 'milestones', name: 'Milestones', shortName: 'Achievements', island: 'Glory Peaks', icon: <Award className="w-4 h-4" /> },
  { id: 'contact', name: 'Join the Crew', shortName: 'Contact', island: 'Tavern Port', icon: <Ship className="w-4 h-4" /> },
];

export const LogPoseNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [needleAngle, setNeedleAngle] = useState<number>(0);

  // Scroll detection & section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionElements = navSections.map((sec) => ({
        id: sec.id,
        el: document.getElementById(sec.id),
      }));

      const scrollPosition = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            // Spin needle slightly towards the new target
            setNeedleAngle(i * 36 + Math.sin(window.scrollY * 0.01) * 15);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const playing = oceanAudio.toggle();
    setIsAudioPlaying(playing);
  };

  const handleResumeDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#D6AF62', '#E78B45', '#0B3552', '#F4F1E8'],
    });
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ocean-midnight/90 backdrop-blur-md border-b border-gold-treasure/30 py-2.5 shadow-2xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand & Log Pose Icon */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* 3D-Look Log Pose Compass Sphere */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 p-0.5 shadow-lg shadow-gold-treasure/20 group-hover:shadow-gold-treasure/50 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-ocean-midnight flex items-center justify-center relative overflow-hidden border border-gold-treasure/50">
                {/* Compass Needle */}
                <div
                  style={{ transform: `rotate(${needleAngle}deg)` }}
                  className="w-1.5 h-6 transition-transform duration-500 ease-out relative flex flex-col items-center justify-between pointer-events-none"
                >
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[10px] border-b-red-600" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-treasure" />
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[10px] border-t-amber-200" />
                </div>
                {/* Glass reflection sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 rounded-full pointer-events-none" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-pirate text-lg sm:text-xl font-bold tracking-wider text-gold-bright group-hover:text-gold-treasure transition-colors">
                  RAGUNANDHA M
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-gold-treasure/20 text-gold-bright border border-gold-treasure/30 font-mono hidden sm:inline-block">
                  LOG POSE
                </span>
              </div>
              <p className="text-[10px] font-heading tracking-widest text-parchment-antique uppercase">
                THE GRAND LINE
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-ocean-deep/80 px-3 py-1.5 rounded-full border border-gold-treasure/25 backdrop-blur-md shadow-inner">
            {navSections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`px-3 py-1 rounded-full text-xs font-heading tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-treasure/90 to-amber-600 text-ocean-deep font-bold shadow-md shadow-gold-treasure/30'
                      : 'text-cloud-white/80 hover:text-gold-bright hover:bg-white/5'
                  }`}
                >
                  {sec.shortName}
                </button>
              );
            })}
          </nav>

          {/* Action Utilities (Audio Ambience, Resume, Mobile Menu Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Ocean Sound Toggle */}
            <button
              onClick={handleAudioToggle}
              title={isAudioPlaying ? 'Mute Ocean Ambience' : 'Play Gentle Ocean Ambience'}
              className={`p-2 sm:px-3 sm:py-1.5 rounded-full border text-xs flex items-center gap-1.5 transition-all duration-300 ${
                isAudioPlaying
                  ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-400 shadow-sm shadow-emerald-500/30'
                  : 'border-gold-treasure/30 bg-ocean-midnight/60 text-parchment hover:border-gold-treasure hover:text-gold-bright'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse text-emerald-400" />
                  <span className="hidden sm:inline font-mono text-[11px]">OCEAN ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-parchment-antique" />
                  <span className="hidden sm:inline font-mono text-[11px]">OCEAN OFF</span>
                </>
              )}
            </button>

            {/* Quick Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Ragunandha_M_Resume.pdf"
              onClick={handleResumeDownload}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full btn-gold text-xs shadow-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg border border-gold-treasure/30 bg-ocean-midnight/70 text-gold-bright hover:bg-gold-treasure/10 transition-colors"
              aria-label="Toggle Navigation Drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Pirate Map Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ocean-deep/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] wanted-paper border-l-4 border-gold-dark p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-dashed border-[#24170F]/40 mb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#24170F] animate-spin" style={{ animationDuration: '25s' }} />
                  <span className="font-pirate text-lg font-bold text-[#24170F] tracking-wider">
                    LOG POSE MAP
                  </span>
                </div>
                <span className="text-[10px] font-mono text-stone-800 bg-[#24170F]/10 px-2 py-0.5 rounded">
                  GRAND LINE
                </span>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1.5">
                {navSections.map((sec, idx) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-left transition-all ${
                        isActive
                          ? 'bg-[#24170F] text-amber-200 font-bold shadow-md'
                          : 'text-[#24170F] hover:bg-[#24170F]/10 font-semibold'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono opacity-60">0{idx + 1}</span>
                        <div>
                          <p className="text-sm font-heading">{sec.name}</p>
                          <p className="text-[10px] opacity-75">{sec.island}</p>
                        </div>
                      </div>
                      <div className={isActive ? 'text-amber-400' : 'text-stone-700'}>
                        {sec.icon}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t-2 border-dashed border-[#24170F]/40 space-y-3">
              <a
                href="/resume.pdf"
                download="Ragunandha_M_Resume.pdf"
                onClick={handleResumeDownload}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-[#24170F] text-amber-200 font-heading text-xs font-bold tracking-wider uppercase shadow-md hover:bg-stone-900 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD CAPTAIN'S RESUME</span>
              </a>

              <div className="flex items-center justify-between text-xs text-stone-800 pt-1">
                <span>Ambient Ocean Audio</span>
                <button
                  onClick={handleAudioToggle}
                  className="font-bold underline uppercase text-stone-900"
                >
                  {isAudioPlaying ? 'Turn Off' : 'Turn On'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

