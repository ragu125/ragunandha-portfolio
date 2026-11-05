import React from 'react';
import { 
  Compass, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Sparkles, 
  Target, 
  Flame, 
  Brain,
  Code
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { developer } = portfolioData;

  return (
    <section id="about" className="relative py-24 bg-ocean-midnight/70 overflow-hidden">
      {/* Background Nautical Watermark & Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-treasure/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-surface/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-treasure animate-spin" style={{ animationDuration: '30s' }} />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              CAPTAIN'S LOG
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            MEET THE <span className="text-gold-treasure">CAPTAIN</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Setting Sail Towards Intelligent Digital Experiences."
          </p>
        </div>

        {/* Character Profile Card & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Captain Portrait & Vital Stats Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="pirate-card p-6 sm:p-8 rounded-2xl flex-1 flex flex-col justify-between border-gold-treasure/30 relative overflow-hidden group">
              {/* Corner Nautical Accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold-treasure" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold-treasure" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold-treasure" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold-treasure" />

              <div>
                {/* Photo with golden frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full p-1.5 bg-gradient-to-tr from-gold-treasure via-amber-200 to-amber-700 shadow-xl shadow-gold-treasure/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-ocean-deep border-2 border-ocean-deep">
                    <img
                      src={developer.avatarUrl}
                      alt={developer.name}
                      className="w-full h-full object-cover object-[center_40%] filter contrast-[1.04]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/src/assets/ragunandha.jpg';
                      }}
                    />
                  </div>
                  {/* Captain Emblem Pin */}
                  <div className="absolute bottom-1 right-2 w-10 h-10 rounded-full bg-ocean-midnight border-2 border-gold-treasure flex items-center justify-center text-gold-bright shadow-lg">
                    <Sparkles className="w-5 h-5 text-gold-treasure" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-pirate text-2xl sm:text-3xl font-bold text-gold-bright tracking-wide">
                    {developer.name}
                  </h3>
                  <p className="font-heading text-xs sm:text-sm font-bold tracking-widest text-sunset-orange uppercase mt-1">
                    {developer.title}
                  </p>
                  <p className="text-xs font-mono text-parchment-antique mt-1">
                    {developer.alias}
                  </p>
                </div>
              </div>

              {/* Verified Contact Details Grid */}
              <div className="mt-8 pt-6 border-t border-gold-treasure/20 space-y-3 text-xs">
                <div className="flex items-center gap-3 text-cloud-white/80">
                  <MapPin className="w-4 h-4 text-gold-treasure shrink-0" />
                  <span>{developer.social.location}</span>
                </div>
                <div className="flex items-center gap-3 text-cloud-white/80">
                  <Mail className="w-4 h-4 text-gold-treasure shrink-0" />
                  <a href={`mailto:${developer.social.email}`} className="hover:text-gold-bright transition-colors">
                    {developer.social.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-cloud-white/80">
                  <Phone className="w-4 h-4 text-gold-treasure shrink-0" />
                  <a href={`tel:${developer.social.phone}`} className="hover:text-gold-bright transition-colors font-mono">
                    {developer.social.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-cloud-white/80">
                  <GraduationCap className="w-4 h-4 text-gold-treasure shrink-0" />
                  <span>V.S.B Engineering College (Anna Univ.)</span>
                </div>

                {/* Social Badges */}
                <div className="pt-3 flex items-center gap-3 justify-center">
                  <a
                    href={developer.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-ocean-deep border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={developer.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-ocean-deep border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={developer.social.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-ocean-deep border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                    title="LeetCode Profile"
                  >
                    <Code className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Interests, Philosophy & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Biography Card */}
            <div className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/25 space-y-4">
              <div className="flex items-center gap-2 text-gold-bright">
                <Flame className="w-5 h-5 text-sunset-orange" />
                <h4 className="font-heading text-sm font-bold tracking-widest uppercase">
                  CAPTAIN'S BIOGRAPHY & MISSION
                </h4>
              </div>
              
              <p className="text-sm sm:text-base text-cloud-white/90 leading-relaxed font-sans">
                {developer.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold-treasure/15">
                {/* Technical Interests */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gold-treasure font-heading text-xs font-bold tracking-wider">
                    <Brain className="w-4 h-4 text-emerald-400" />
                    <span>TECHNICAL INTERESTS</span>
                  </div>
                  <ul className="text-xs text-cloud-white/80 space-y-1">
                    <li>• Full Stack Web Architectures</li>
                    <li>• Large Language Models & LangGraph</li>
                    <li>• Retrieval-Augmented Generation (RAG)</li>
                    <li>• Augmented Reality (MediaPipe) & 3D WebGL</li>
                  </ul>
                </div>

                {/* Career Goals & Philosophy */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gold-treasure font-heading text-xs font-bold tracking-wider">
                    <Target className="w-4 h-4 text-sunset-orange" />
                    <span>CAREER GOALS & PHILOSOPHY</span>
                  </div>
                  <p className="text-xs text-cloud-white/80 leading-relaxed">
                    Committed to crafting scalable, user-centric software that bridges intelligence with seamless user experience. Every line of code is an investment into reliable digital architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Statistics Cards (CGPA 8.23, Internships 3, Projects 4, Graduation 2027) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="pirate-card p-4 rounded-xl text-center border-gold-treasure/30 group hover:border-gold-treasure transition-all">
                <span className="block font-pirate text-3xl sm:text-4xl font-extrabold text-gold-bright group-hover:scale-110 transition-transform">
                  {developer.stats.cgpa}
                </span>
                <span className="text-xs font-heading font-bold tracking-widest text-parchment-antique uppercase mt-1 block">
                  CGPA
                </span>
                <span className="text-[10px] text-cloud-white/60 block mt-0.5">
                  Computer Science Engg
                </span>
              </div>

              <div className="pirate-card p-4 rounded-xl text-center border-gold-treasure/30 group hover:border-sunset-orange transition-all">
                <span className="block font-pirate text-3xl sm:text-4xl font-extrabold text-sunset-orange group-hover:scale-110 transition-transform">
                  {developer.stats.internships}
                </span>
                <span className="text-xs font-heading font-bold tracking-widest text-parchment-antique uppercase mt-1 block">
                  INTERNSHIPS
                </span>
                <span className="text-[10px] text-cloud-white/60 block mt-0.5">
                  Professional Voyages
                </span>
              </div>

              <div className="pirate-card p-4 rounded-xl text-center border-gold-treasure/30 group hover:border-emerald-400 transition-all">
                <span className="block font-pirate text-3xl sm:text-4xl font-extrabold text-emerald-400 group-hover:scale-110 transition-transform">
                  {developer.stats.projects}
                </span>
                <span className="text-xs font-heading font-bold tracking-widest text-parchment-antique uppercase mt-1 block">
                  PROJECTS
                </span>
                <span className="text-[10px] text-cloud-white/60 block mt-0.5">
                  Interactive & AI Systems
                </span>
              </div>

              <div className="pirate-card p-4 rounded-xl text-center border-gold-treasure/30 group hover:border-sky-400 transition-all">
                <span className="block font-pirate text-3xl sm:text-4xl font-extrabold text-sky-400 group-hover:scale-110 transition-transform">
                  {developer.stats.graduation}
                </span>
                <span className="text-xs font-heading font-bold tracking-widest text-parchment-antique uppercase mt-1 block">
                  GRADUATION
                </span>
                <span className="text-[10px] text-cloud-white/60 block mt-0.5">
                  Anna University
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

