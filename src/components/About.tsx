import React from 'react';
import { Compass, Lightbulb, Target, BookOpen, MapPin, GraduationCap, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: Cpu,
      title: 'Artificial Intelligence & ML',
      description: 'Studying intelligent algorithms, neural structures, and machine learning models to solve practical real-world problems.',
    },
    {
      icon: Lightbulb,
      title: 'IoT & Embedded Systems',
      description: 'Fusing physical sensor arrays, microcontrollers, and software logic to build assistive and automated physical tech.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented Engineering',
      description: 'Focused on evolving into an impactful AI Engineer capable of architecting innovative, deployable systems.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Mastery',
      description: 'Constantly absorbing modern software paradigms, algorithmic optimization, and emerging artificial intelligence breakthroughs.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Background radial bleed */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-[#397BFF]/5 rounded-full blur-[140px] pointer-events-none transition-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
              ABOUT ME
            </span>
            <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Engineering With Purpose, Curiosity & Technical Rigor.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Minimalist Bento Identity & Academic Card (NO PHOTO) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="minimal-card rounded-2xl p-7 border border-slate-200 dark:border-white/[0.08] relative overflow-hidden group">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-white/[0.08]">
                <div>
                  <span className="font-mono text-xs font-semibold text-blue-600 dark:text-[#00F0FF] uppercase tracking-wider block">
                    BIOGRAPHY & PROFILE
                  </span>
                  <h3
                    className="text-2xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Prashanth.R
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/[0.05] border border-blue-100 dark:border-white/[0.08] flex items-center justify-center text-blue-600 dark:text-[#00F0FF]">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              {/* Minimalist Credential Specs */}
              <div className="mt-5 space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">Current Program</span>
                  <span className="font-semibold text-slate-900 dark:text-white">B.Tech – CSE (AIML)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">Institution</span>
                  <span className="font-semibold text-slate-900 dark:text-white">REVA University</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">Academic Standing</span>
                  <span className="font-semibold text-blue-600 dark:text-[#00F0FF]">3rd Semester</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-white/[0.04]">
                  <span className="text-slate-500 dark:text-slate-400">12th / PUC Merit</span>
                  <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">95% (BGS PU College)</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Bengaluru, India</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Full-Time Student & Builder</span>
                </span>
                <span>Active 2026</span>
              </div>
            </div>

            {/* Aspirations Quote Card */}
            <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-[#0D1527]/70 border border-blue-200/60 dark:border-blue-500/20 transition-smooth">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-slate-900 dark:text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Engineering North Star
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    "My goal is to become an AI Engineer and build something innovative in the future."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose & Core Engineering Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Direct Bio text from prompt */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                {personal.fullBio}
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                As a Computer Science student specializing in Artificial Intelligence and Machine Learning, I enjoy turning abstract concepts into functioning systems. My work ranges from wearable IoT hardware like the Assistance Cap for blind individuals to full-stack web applications like SportsHub. I believe in disciplined problem solving, clear communication, and working productively in team settings.
              </p>
            </div>

            {/* Core Pillars 2x2 Grid */}
            <div className="pt-2">
              <h3
                className="text-lg font-bold text-slate-900 dark:text-white mb-5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Core Engineering Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="minimal-card rounded-xl p-5 border border-slate-200 dark:border-white/[0.08] transition-smooth hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-white/[0.05] border border-blue-100 dark:border-white/[0.08] flex items-center justify-center text-blue-600 dark:text-[#00F0FF] mb-3 transition-smooth group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4
                        className="text-base font-bold text-slate-900 dark:text-white mb-1.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
