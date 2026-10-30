import React from 'react';
import { Trophy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  const { hackathons } = PORTFOLIO_DATA;

  return (
    <section id="hackathons" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/30 dark:bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none transition-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
              COMPETITIVE SPRINT EXPERIENCE
            </span>
            <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Hackathons & Innovation Sprints
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Rapid prototyping, high-intensity team collaboration, and building high-impact technology under strict sprint deadlines.
          </p>
        </div>

        {/* Hackathon Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="group relative rounded-2xl p-6 sm:p-8 minimal-card border border-slate-200 dark:border-white/[0.08] transition-smooth hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Event Tag & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-white/[0.05] text-blue-600 dark:text-[#00F0FF] border border-blue-100 dark:border-white/[0.08] transition-smooth group-hover:scale-105">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-blue-600 dark:text-[#00F0FF] uppercase tracking-wider block font-semibold">
                        {hackathon.event}
                      </span>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {hackathon.name}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] self-start sm:self-auto font-medium">
                    {hackathon.role}
                  </span>
                </div>

                {/* Body Narrative */}
                <div className="mt-5 space-y-4">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      CHALLENGE CONTEXT:
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {hackathon.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-[#00F0FF] mb-1 font-semibold">
                      PROTOTYPE & DELIVERABLE:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {hackathon.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 uppercase mr-1">
                  Stack:
                </span>
                {hackathon.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
