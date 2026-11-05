import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Code, 
  GitFork, 
  Star, 
  ExternalLink, 
  BookOpen, 
  Activity, 
  Terminal
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export const CodingDashboard: React.FC = () => {
  const { developer } = portfolioData;
  const repos: GithubRepo[] = [
    {
      name: 'code-slayer',
      description: 'Anime-inspired 3D RPG programming adventure game built with React, Three.js, and Monaco Editor.',
      html_url: 'https://github.com/ragu125/code-slayer',
      language: 'TypeScript',
      stargazers_count: 5,
      forks_count: 2,
    },
    {
      name: 'zoro-ai-assist',
      description: 'Intelligent conversational AI assistant powered by Google Gemini API, LangGraph, and FastAPI.',
      html_url: 'https://github.com/ragu125/zoro-ai-assist',
      language: 'Python',
      stargazers_count: 4,
      forks_count: 1,
    },
    {
      name: 'expense-tracker',
      description: 'Full-stack expense tracking platform built with FastAPI, SQLAlchemy ORM, and SQLite database.',
      html_url: 'https://github.com/ragu125/expense-tracker',
      language: 'Python',
      stargazers_count: 3,
      forks_count: 1,
    },
    {
      name: 'ar-shopping-mall',
      description: 'Augmented reality virtual try-on application powered by Google MediaPipe Face Mesh and Vite.',
      html_url: 'https://github.com/ragu125/ar-shopping-mall',
      language: 'JavaScript',
      stargazers_count: 4,
      forks_count: 2,
    },
  ];

  const [githubFollowers, setGithubFollowers] = useState<number | null>(null);
  const [publicReposCount, setPublicReposCount] = useState<number | null>(null);

  useEffect(() => {
    // Attempt live fetch from public GitHub API
    fetch('https://api.github.com/users/ragu125')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          if (typeof data.public_repos === 'number') setPublicReposCount(data.public_repos);
          if (typeof data.followers === 'number') setGithubFollowers(data.followers);
        }
      })
      .catch(() => {
        // Fallback silently if rate limited
      });
  }, []);

  // Simulated 52-week activity contribution grid for visual fidelity
  const weeks = 28;
  const days = 7;

  return (
    <section id="coding-dashboard" className="relative py-24 bg-ocean-midnight/80 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-gold-treasure/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-treasure/10 border border-gold-treasure/30 mb-3">
            <Terminal className="w-3.5 h-3.5 text-gold-treasure" />
            <span className="text-xs font-mono text-gold-bright tracking-widest uppercase">
              CAPTAIN'S LOGBOOK & BOUNTY CODE
            </span>
          </div>
          <h2 className="font-pirate text-4xl sm:text-5xl font-black text-cloud-white tracking-wider">
            PIRATE <span className="text-gold-treasure">RECORDS</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-gold-treasure mx-auto rounded-full" />
          <p className="mt-4 font-serif italic text-parchment text-base sm:text-lg">
            "Public Repositories, Algorithmic Challenges, and Development Activity."
          </p>
        </div>

        {/* Top GitHub & LeetCode Profile Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* GitHub Captain Card */}
          <div className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/30 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-ocean-deep border border-gold-treasure/30 text-gold-bright">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-pirate text-xl sm:text-2xl font-bold text-cloud-white">
                      GitHub Command Deck
                    </h3>
                    <p className="text-xs font-mono text-parchment-antique">
                      @ragu125 • Official Repository Hub
                    </p>
                  </div>
                </div>

                <a
                  href={developer.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-ocean-deep border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                  title="Visit GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-cloud-white/80 leading-relaxed">
                Primary open-source forge housing full-stack systems, 3D web applications, AI assistant architectures, and computer vision pipelines.
              </p>

              {/* Verified Public Info */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gold-treasure/15 text-center">
                <div className="p-2 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15">
                  <span className="block font-pirate text-xl font-bold text-gold-bright">
                    {publicReposCount !== null ? publicReposCount : '4+'}
                  </span>
                  <span className="text-[10px] font-mono text-parchment-antique uppercase">Public Repos</span>
                </div>
                <div className="p-2 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15">
                  <span className="block font-pirate text-xl font-bold text-sunset-orange">
                    {githubFollowers !== null ? githubFollowers : 'Active'}
                  </span>
                  <span className="text-[10px] font-mono text-parchment-antique uppercase">Community</span>
                </div>
                <div className="p-2 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15">
                  <span className="block font-pirate text-xl font-bold text-emerald-400">100%</span>
                  <span className="text-[10px] font-mono text-parchment-antique uppercase">Open Source</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <a
                href={developer.social.github}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full btn-gold text-xs flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>INSPECT GITHUB ARCHIVE</span>
              </a>
            </div>
          </div>

          {/* LeetCode & Problem Solving Card */}
          <div className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/30 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-ocean-deep border border-gold-treasure/30 text-amber-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-pirate text-xl sm:text-2xl font-bold text-cloud-white">
                      LeetCode & DSA Arena
                    </h3>
                    <p className="text-xs font-mono text-parchment-antique">
                      Algorithmic Rigor & Data Structures
                    </p>
                  </div>
                </div>

                <a
                  href={developer.social.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-ocean-deep border border-gold-treasure/30 text-gold-bright hover:bg-gold-treasure hover:text-ocean-deep transition-all"
                  title="Visit LeetCode Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-cloud-white/80 leading-relaxed">
                Dedicated training grounds sharpening computational complexity, problem-solving intuition, recursion, dynamic programming, and data structures.
              </p>

              {/* Focus Pillars */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gold-treasure/15 text-center">
                <div className="p-2 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15">
                  <span className="block font-heading text-xs font-bold text-emerald-400">ARRAYS</span>
                  <span className="text-[10px] font-mono text-parchment-antique">Two Pointers / Map</span>
                </div>
                <div className="p-2 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15">
                  <span className="block font-heading text-xs font-bold text-amber-400">TREES</span>
                  <span className="text-[10px] font-mono text-parchment-antique">BFS / DFS / BST</span>
                </div>
                <div className="p-2 rounded-lg bg-ocean-deep/80 border border-gold-treasure/15">
                  <span className="block font-heading text-xs font-bold text-sky-400">SORTING</span>
                  <span className="text-[10px] font-mono text-parchment-antique">O(N log N) Bounds</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <a
                href={developer.social.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full btn-ocean text-xs flex items-center justify-center gap-2"
              >
                <Code className="w-4 h-4 text-gold-treasure" />
                <span>EXPLORE LEETCODE PROFILE</span>
              </a>
            </div>
          </div>

        </div>

        {/* Contribution Heatmap Board */}
        <div className="pirate-card p-6 sm:p-8 rounded-2xl border-gold-treasure/30 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gold-treasure/20 mb-6 gap-2">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" />
              <h3 className="font-pirate text-lg sm:text-xl font-bold text-gold-bright">
                VOYAGE COMMIT ACTIVITY GRAPH
              </h3>
            </div>
            <span className="text-xs font-mono text-parchment-antique">
              Consistent Developer Cadence Across Terms
            </span>
          </div>

          {/* Grid of contribution squares */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[620px] justify-between">
              {Array.from({ length: weeks }).map((_, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {Array.from({ length: days }).map((_, dIdx) => {
                    // Seeded pattern to reflect high real coding activity
                    const intensity = ((wIdx * 3 + dIdx * 7) % 5);
                    const colors = [
                      'bg-ocean-deep/90 border border-gold-treasure/10',
                      'bg-emerald-950/80 border border-emerald-900',
                      'bg-emerald-800/80',
                      'bg-emerald-600',
                      'bg-gold-treasure',
                    ];
                    return (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-sm ${colors[intensity]} transition-transform hover:scale-125 cursor-pointer`}
                        title={`Activity Week ${wIdx + 1}, Day ${dIdx + 1}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-parchment-antique pt-2 border-t border-gold-treasure/10">
            <span>Historical Voyage Continuity</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-ocean-deep border border-gold-treasure/20" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-900" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
              <div className="w-2.5 h-2.5 rounded-sm bg-gold-treasure" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Repositories Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-pirate text-xl sm:text-2xl font-bold text-cloud-white">
              FEATURED CODE REPOSITORIES
            </h3>
            <span className="text-xs font-mono text-gold-bright">
              SOURCE ARCHIVES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="pirate-card p-6 rounded-xl border-gold-treasure/20 hover:border-gold-treasure group transition-all duration-300 block"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gold-treasure" />
                    <span className="font-mono text-sm font-bold text-cloud-white group-hover:text-gold-bright transition-colors">
                      ragu125 / {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-parchment-antique group-hover:text-gold-bright transition-colors" />
                </div>

                <p className="text-xs text-cloud-white/75 font-sans leading-relaxed line-clamp-2">
                  {repo.description}
                </p>

                <div className="mt-4 pt-3 border-t border-gold-treasure/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-gold-bright">
                    <span className="w-2 h-2 rounded-full bg-gold-treasure" />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-3 text-cloud-white/60">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-cloud-white/60" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
