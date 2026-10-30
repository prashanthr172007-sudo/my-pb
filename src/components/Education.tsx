import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
              ACADEMIC FOUNDATION
            </span>
            <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Education & Academic Excellence
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Solid foundations in Artificial Intelligence, Computer Science principles, and applied engineering.
          </p>
        </div>

        {/* Minimalist Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-200 dark:before:bg-white/[0.1]">
          {education.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div key={index} className="relative group">
                {/* Minimalist Timeline Rail Node */}
                <div
                  className={`absolute -left-[27px] sm:-left-[35px] top-6 w-4 h-4 rounded-full border-2 bg-white dark:bg-[#080D1A] transition-transform duration-300 group-hover:scale-125 ${
                    isFirst
                      ? 'border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]'
                      : 'border-slate-400 dark:border-slate-600'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full m-auto mt-[3px] ${
                      isFirst ? 'bg-blue-600' : 'bg-slate-400 dark:bg-slate-600'
                    }`}
                  />
                </div>

                {/* Milestone Minimal Card */}
                <div className="minimal-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.08] transition-smooth hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                    <div>
                      <span className="font-mono text-xs font-semibold text-blue-600 dark:text-[#00F0FF] uppercase tracking-wider block">
                        {item.institution}
                      </span>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5 tracking-tight"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {item.degree}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.period}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                      <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-[#00F0FF]/10 text-blue-700 dark:text-[#00F0FF] border border-blue-200 dark:border-[#00F0FF]/25 font-semibold">
                        {item.statusOrScore}
                      </span>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlights Bulleted Rigor */}
                  <div className="mt-5 space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-[#00F0FF] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Unboxed Acquired Skills Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      Core Subjects:
                    </span>
                    {item.skillsAcquired.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        {sIdx > 0 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>}
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
