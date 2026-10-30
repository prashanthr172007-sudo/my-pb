import React, { useState } from 'react';
import { Terminal, Users, Lightbulb, Compass, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skills[0].id);

  const iconsMap: Record<string, any> = {
    'problem-solving': Lightbulb,
    'programming': Code2,
    'teamwork': Users,
    'promoting': Compass,
  };

  const selectedSkill = skills.find((s) => s.id === selectedSkillId) || skills[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-blue-100/30 dark:bg-[#397BFF]/5 rounded-full blur-[160px] pointer-events-none transition-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
              CAPABILITIES & TALENT
            </span>
            <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Core Competencies & Skill Matrix
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A balanced synthesis of algorithmic discipline, software development, cross-functional collaboration, and technical communication.
          </p>
        </div>

        {/* 4 Primary Cards Visual Grid with Advanced Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = iconsMap[skill.id] || Terminal;
            const isSelected = skill.id === selectedSkillId;

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`group cursor-pointer rounded-2xl p-6 transition-smooth flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/60 dark:bg-[#0D1527] border-2 border-blue-600 dark:border-[#00F0FF]/50 shadow-md -translate-y-1'
                    : 'minimal-card border border-slate-200 dark:border-white/[0.08] hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-smooth ${
                        isSelected
                          ? 'bg-blue-600 text-white dark:bg-gradient-to-br dark:from-[#00F0FF] dark:to-[#397BFF] dark:text-[#080D1A]'
                          : 'bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-[#00F0FF] group-hover:bg-blue-50 dark:group-hover:bg-[#00F0FF]/10'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-blue-600 dark:text-[#00F0FF] uppercase tracking-wider">
                    {skill.kicker}
                  </span>
                  <h3
                    className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {skill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.summary}
                  </p>
                </div>

                {/* Sub-items bullet count */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{skill.items.length} focus areas</span>
                  <span
                    className={`font-semibold flex items-center gap-1 transition-smooth ${
                      isSelected ? 'text-blue-600 dark:text-[#00F0FF]' : 'text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'
                    }`}
                  >
                    Inspect
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Interactive Focus Tray */}
        <div className="mt-8 rounded-2xl minimal-card p-6 sm:p-8 border border-slate-200 dark:border-white/[0.1] relative overflow-hidden transition-smooth">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-[#00F0FF] font-semibold">
                  ACTIVE DOMAIN VIEW
                </span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{selectedSkill.level}</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {selectedSkill.title} Application & Scope
              </h3>
            </div>

            <div className="max-w-md text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono bg-slate-50 dark:bg-white/[0.03] p-3 rounded-lg border border-slate-200 dark:border-white/[0.06]">
              <span className="text-blue-600 dark:text-[#00F0FF] font-bold">APPLICATION: </span>
              {selectedSkill.practicalApplication}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              PRACTICAL PROFICIENCIES & EXPERTISE:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {selectedSkill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-sm text-slate-700 dark:text-slate-200 transition-smooth hover:border-blue-300 dark:hover:border-blue-500/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-[#00F0FF] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Ecosystem Strip */}
        <div className="mt-10 p-5 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
          <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0 font-semibold">
            DEVELOPER TOOLCHAIN:
          </span>
          <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300">
            <span className="text-slate-900 dark:text-white font-semibold">Python</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>C/C++</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>TypeScript</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>React</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Tailwind CSS</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Node.js / Express</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Arduino / IoT Hardware</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Git / GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};
