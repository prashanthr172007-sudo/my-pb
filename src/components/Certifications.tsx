import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-100/30 dark:bg-[#397BFF]/5 rounded-full blur-[140px] pointer-events-none transition-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
              CREDENTIALS & HONORS
            </span>
            <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Certifications & Accreditations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal recognition validating industry-relevant competencies in Python programming, venture innovation, and product thinking.
          </p>
        </div>

        {/* 2-Column Minimal Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl p-6 sm:p-8 minimal-card border border-slate-200 dark:border-white/[0.08] transition-smooth hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header with Issuer & Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/[0.05] border border-blue-100 dark:border-white/[0.08] flex items-center justify-center text-blue-600 dark:text-[#00F0FF] shrink-0 transition-smooth group-hover:scale-105">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-slate-400 dark:text-slate-500">VERIFIED ID: </span>
                    <span className="text-blue-600 dark:text-[#00F0FF] font-semibold">{cert.credentialId}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs text-blue-600 dark:text-[#00F0FF] uppercase tracking-wider font-semibold">
                    {cert.issuer}
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-[#00F0FF] transition-smooth"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {cert.description}
                </p>

                {/* Topics / Skills Validated */}
                <div className="mt-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Disciplines Mastered:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential</span>
                </span>
                <span>Autonomous Evaluation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
