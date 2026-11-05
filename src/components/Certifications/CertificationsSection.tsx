import React from 'react';
import { Award, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;

  const getRarityBadge = (rarity: string) => {
    switch (rarity) {
      case 'Legendary':
        return 'bg-gradient-to-r from-amber-500 to-yellow-300 text-ocean-deep border-yellow-200';
      case 'Treasure':
        return 'bg-gradient-to-r from-emerald-600 to-teal-400 text-ocean-deep border-emerald-300';
      default:
        return 'bg-gradient-to-r from-blue-600 to-indigo-400 text-cloud-white border-blue-300';
    }
  };

  return (
    <section id="certifications" className="relative py-24 bg-ocean-deep overflow-hidden">
      {/* Background Gold Shimmer Dust */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-treasure/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Award className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              GOLDEN CHEST ARTIFACTS
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            TREASURE <span className="text-gold-treasure">COLLECTION</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Verified Industry Credentials from Google, Cisco, and Global Engineering Academies."
          </p>
        </div>

        {/* Treasure Chest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/30 hover:border-gold-treasure transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Chest Lid / Ornament Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gold-foil" />

              <div>
                {/* Rarity & Platform */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-heading font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full border shadow-sm ${getRarityBadge(cert.rarity)}`}>
                    ★ {cert.rarity}
                  </span>
                  <span className="text-xs font-mono text-parchment-antique bg-ocean-deep px-2 py-0.5 rounded border border-gold-treasure/20">
                    {cert.platform}
                  </span>
                </div>

                {/* Stylized Treasure Chest / Seal Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-treasure/30 via-ocean-deep to-ocean-midnight border-2 border-gold-treasure flex items-center justify-center text-gold-treasure shadow-lg shadow-gold-treasure/15 mb-6 group-hover:scale-105 group-hover:shadow-gold-treasure/40 transition-all duration-300">
                  <Award className="w-8 h-8 text-gold-bright" />
                </div>

                {/* Certificate Title & Issuer */}
                <h3 className="font-pirate text-xl sm:text-2xl font-bold text-cloud-white group-hover:text-gold-bright transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="font-heading text-xs font-bold text-sunset-orange uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ISSUED BY: {cert.issuer}</span>
                </p>

                {/* Skills Acquired */}
                <div className="mt-6 pt-6 border-t border-gold-treasure/15 space-y-2">
                  <h4 className="font-heading text-[11px] font-bold text-gold-treasure uppercase tracking-wider">
                    VERIFIED DOMAIN SKILLS:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsAcquired.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-ocean-deep border border-gold-treasure/20 text-cloud-white/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential Verification Link */}
              <div className="mt-8 pt-4 border-t border-gold-treasure/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Credential</span>
                </span>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-heading font-bold text-gold-treasure hover:text-gold-bright flex items-center gap-1 transition-colors uppercase"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
