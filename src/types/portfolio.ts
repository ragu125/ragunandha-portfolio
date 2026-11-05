export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  phone: string;
  location: string;
}

export interface EducationItem {
  id: string;
  islandNumber: string;
  institution: string;
  degree: string;
  university?: string;
  duration: string;
  gradeLabel: string;
  gradeValue: string;
  description: string;
  location: string;
  achievements: string[];
  icon: string;
  coordinates: { x: number; y: number };
}

export interface SkillCategory {
  id: string;
  title: string;
  pirateRole: string;
  badge: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    description?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  islandNumber: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  githubUrl: string;
  liveUrl?: string;
  coordinates: { x: number; y: number };
  badge: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  voyageNumber: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
  highlight: string;
  seaRoute: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date?: string;
  skillsAcquired: string[];
  credentialUrl?: string;
  rarity: 'Legendary' | 'Treasure' | 'Rare';
}

export interface MilestoneItem {
  id: string;
  title: string;
  year: string;
  bountyPoints: string;
  category: string;
  description: string;
  icon: string;
}

export interface PortfolioData {
  developer: {
    name: string;
    title: string;
    alias: string;
    tagline: string;
    heroStatement: string;
    bio: string;
    avatarUrl: string;
    resumeUrl: string;
    social: SocialLinks;
    stats: {
      cgpa: string;
      internships: number;
      projects: number;
      graduation: string;
    };
  };
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: CertificateItem[];
  milestones: MilestoneItem[];
}

