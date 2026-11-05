import React from 'react';
import { LogPoseNavbar } from './components/LogPose/LogPoseNavbar';
import { HeroSection } from './components/Hero/HeroSection';
import { AboutSection } from './components/About/AboutSection';
import { EducationSection } from './components/Education/EducationSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { CertificationsSection } from './components/Certifications/CertificationsSection';
import { CodingDashboard } from './components/CodingDashboard/CodingDashboard';
import { MilestonesSection } from './components/Achievements/MilestonesSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ocean-deep text-cloud-white selection:bg-gold-treasure/30 selection:text-gold-bright relative">
      {/* Interactive Log Pose Navigation Bar */}
      <LogPoseNavbar />

      {/* Main Voyage Sections */}
      <main className="relative z-10">
        {/* 1. Grand Line Hero with 3D Thousand Sunny, Waves & Wanted Poster */}
        <HeroSection />

        {/* 2. Meet the Captain (About) */}
        <AboutSection />

        {/* 3. Origin Island (Education) */}
        <EducationSection />

        {/* 4. Crew Abilities (Skills) */}
        <SkillsSection />

        {/* 5. Treasure Islands (Projects) */}
        <ProjectsSection />

        {/* 6. Past Voyages (Experience / Internships) */}
        <ExperienceSection />

        {/* 7. Treasure Collection (Certifications) */}
        <CertificationsSection />

        {/* 8. Pirate Records (GitHub & Coding Activity) */}
        <CodingDashboard />

        {/* 9. Milestones (Achievements) */}
        <MilestonesSection />

        {/* 10. Join the Crew (Contact & Verified Resume Download) */}
        <ContactSection />
      </main>

      {/* Pirate Themed Footer */}
      <Footer />
    </div>
  );
};

export default App;

