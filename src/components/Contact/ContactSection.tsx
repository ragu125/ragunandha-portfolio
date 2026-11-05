import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  FileDown, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Ship,
  Compass
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const { developer } = portfolioData;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Captain needs to know your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Carrier Den Den Mushi requires an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please state your voyage subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message for the captain.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory pirate confetti
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D6AF62', '#E78B45', '#0B3552', '#F4F1E8'],
      });

      // Prepare mailto fallback link for user's email client
      const mailtoUrl = `mailto:${developer.social.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;

      // Open mail client after brief moment
      setTimeout(() => {
        window.open(mailtoUrl, '_blank');
      }, 800);
    }, 1000);
  };

  const handleResumeDownload = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D6AF62', '#E78B45', '#0B3552', '#F4F1E8'],
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-ocean-midnight/90 overflow-hidden">
      {/* Sunset Horizon Glow & Sailing Ship Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-sunset-orange/15 via-ocean-surface/10 to-transparent pointer-events-none" />

      {/* Animated Sailing Ship heading into the horizon */}
      <div className="absolute bottom-8 right-12 opacity-40 pointer-events-none hidden md:block animate-float-gentle">
        <Ship className="w-20 h-20 text-gold-treasure/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              ALLIANCE TAVERN & RECRUITING DOCK
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            THE GRAND LINE IS <span className="text-gold-treasure">WAITING.</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-lg sm:text-xl">
            "Let's Build Something Extraordinary Together."
          </p>
        </div>

        {/* Main Grid: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication & Resume Download (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Coordinates Card */}
            <div className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/30 space-y-6">
              <h3 className="font-pirate text-xl sm:text-2xl font-bold text-gold-bright">
                CAPTAIN'S DISPATCH TERMINAL
              </h3>
              <p className="text-xs sm:text-sm text-cloud-white/80 leading-relaxed font-sans">
                Open to software engineering roles, full stack opportunities, AI/ML initiatives, and technological collaborations worldwide.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${developer.social.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-ocean-deep/80 border border-gold-treasure/20 hover:border-gold-treasure hover:bg-ocean-deep transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-ocean-midnight border border-gold-treasure/30 text-gold-bright group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-heading text-parchment-antique uppercase">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-cloud-white group-hover:text-gold-bright transition-colors">
                      {developer.social.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${developer.social.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-ocean-deep/80 border border-gold-treasure/20 hover:border-gold-treasure hover:bg-ocean-deep transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-ocean-midnight border border-gold-treasure/30 text-gold-bright group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-heading text-parchment-antique uppercase">Phone & WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-cloud-white group-hover:text-gold-bright transition-colors font-mono">
                      {developer.social.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-ocean-deep/80 border border-gold-treasure/20">
                  <div className="p-2.5 rounded-lg bg-ocean-midnight border border-gold-treasure/30 text-sunset-orange">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-heading text-parchment-antique uppercase">Port of Origin</span>
                    <span className="text-xs sm:text-sm font-semibold text-cloud-white">
                      {developer.social.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gold-treasure/15 flex items-center gap-3">
                <a
                  href={developer.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-ocean-deep border border-gold-treasure/25 hover:border-gold-treasure text-xs font-mono text-cloud-white hover:text-gold-bright flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={developer.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-ocean-deep border border-gold-treasure/25 hover:border-gold-treasure text-xs font-mono text-cloud-white hover:text-gold-bright flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Parchment Styled Resume Download Card */}
            <div className="wanted-paper wanted-border p-6 rounded-xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-heading font-black tracking-widest text-[#24170F] uppercase block mb-1">
                  OFFICIAL ADMIRALTY DOSSIER
                </span>
                <h4 className="font-pirate text-xl font-bold text-[#24170F]">
                  CURRICULUM VITAE
                </h4>
                <p className="text-xs font-serif text-stone-800/90 mt-1">
                  Download the complete verified resume of Ragunandha M in PDF format.
                </p>
              </div>

              <div className="mt-5">
                <a
                  href="/resume.pdf"
                  download="Ragunandha_M_Resume.pdf"
                  onClick={handleResumeDownload}
                  className="w-full py-3 rounded bg-[#24170F] text-amber-200 hover:bg-stone-900 transition-colors font-heading text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
                >
                  <FileDown className="w-4 h-4 text-amber-300" />
                  <span>DOWNLOAD CAPTAIN'S RESUME</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Transmission Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="pirate-card p-6 sm:p-10 rounded-2xl border-gold-treasure/30 relative">
              <h3 className="font-pirate text-2xl sm:text-3xl font-bold text-cloud-white mb-2">
                SEND A CARRIER MESSAGE
              </h3>
              <p className="text-xs sm:text-sm text-parchment-antique font-mono mb-8">
                Transmit a dispatch directly to Captain Ragunandha M
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/60 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-pirate text-2xl font-bold text-emerald-300">
                    DISPATCH TRANSMITTED!
                  </h4>
                  <p className="text-sm text-cloud-white/90 font-serif max-w-md mx-auto">
                    Thank you, <span className="font-bold text-gold-bright">{formData.name}</span>. Your message has been prepared and your email client has been summoned to deliver it to <span className="underline">{developer.social.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full btn-gold text-xs font-bold uppercase"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-parchment-antique mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Shanks or Tech Recruiter"
                        className={`w-full px-4 py-3 rounded-xl bg-ocean-deep border text-sm text-cloud-white placeholder-cloud-white/30 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-gold-treasure/30 focus:border-gold-treasure'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-parchment-antique mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-ocean-deep border text-sm text-cloud-white placeholder-cloud-white/30 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-gold-treasure/30 focus:border-gold-treasure'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-parchment-antique mb-2">
                      VOYAGE SUBJECT *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Full Stack Engineering Role / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-ocean-deep border text-sm text-cloud-white placeholder-cloud-white/30 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-gold-treasure/30 focus:border-gold-treasure'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-parchment-antique mb-2">
                      MESSAGE FOR THE CAPTAIN *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share your opportunity, project scope, or greetings..."
                      className={`w-full px-4 py-3 rounded-xl bg-ocean-deep border text-sm text-cloud-white placeholder-cloud-white/30 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-gold-treasure/30 focus:border-gold-treasure'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl btn-gold text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>PREPARING CARRIER PIGEON...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-ocean-deep" />
                        <span>TRANSMIT DISPATCH TO CAPTAIN</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
