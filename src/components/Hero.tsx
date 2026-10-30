import React, { useState } from 'react';
import { ArrowDown, Terminal, Cpu, Layers, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, quickStats } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'telemetry'>('architecture');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting - delicate minimalist glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[160px] pointer-events-none transition-slow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-100/40 dark:bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none transition-slow" />

      {/* Ultra-subtle engineering dot grid */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Kicker */}
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
                {personal.kicker}
              </span>
              <span className="h-[1px] w-12 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="block text-gradient-hero">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-[#ADC6FF] tracking-tight">
                Aspiring AI Engineer <span className="text-blue-500/40 dark:text-[#00F0FF]/40">|</span> AIML Student <span className="text-blue-500/40 dark:text-[#00F0FF]/40">|</span> Developer
              </p>
            </div>

            {/* Prose Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personal.shortBio}
            </p>

            {/* Primary Action Buttons with advanced hover transitions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:text-[#080D1A] dark:bg-gradient-to-r dark:from-[#00F0FF] dark:to-[#397BFF] rounded-xl shadow-sm hover:shadow-lg dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-smooth active:scale-95 whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.12] hover:border-slate-300 dark:hover:border-[#00F0FF]/40 rounded-xl transition-smooth whitespace-nowrap shadow-xs"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Unboxed Minimalist Metadata */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="text-slate-700 dark:text-slate-300 font-medium">REVA University</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>B.Tech CSE (AIML)</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-blue-600 dark:text-[#00F0FF]">Ready for Innovation & Collaboration</span>
            </div>
          </div>

          {/* Right Column: Minimalist Interactive AI Console (No Photo) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent dark:from-[#00F0FF]/20 dark:to-[#397BFF]/20 blur-xl opacity-80" />

              {/* Minimalist Command Console Card */}
              <div className="relative rounded-2xl bg-white dark:bg-[#0D1527]/90 border border-slate-200 dark:border-white/[0.12] shadow-xl dark:shadow-2xl overflow-hidden transition-smooth">
                {/* Console Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 dark:bg-[#0B1120]/90 border-b border-slate-200 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      prashanth_ai_runtime.py
                    </span>
                  </div>

                  {/* Minimalist Segmented Tabs */}
                  <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-white/[0.06] p-0.5 rounded-md text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab('architecture')}
                      className={`px-2 py-0.5 rounded transition-smooth ${
                        activeTab === 'architecture'
                          ? 'bg-white dark:bg-[#00F0FF]/20 text-blue-600 dark:text-[#00F0FF] shadow-xs font-semibold'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Spec
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded transition-smooth ${
                        activeTab === 'code'
                          ? 'bg-white dark:bg-[#00F0FF]/20 text-blue-600 dark:text-[#00F0FF] shadow-xs font-semibold'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Code
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('telemetry')}
                      className={`px-2 py-0.5 rounded transition-smooth ${
                        activeTab === 'telemetry'
                          ? 'bg-white dark:bg-[#00F0FF]/20 text-blue-600 dark:text-[#00F0FF] shadow-xs font-semibold'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      System
                    </button>
                  </div>
                </div>

                {/* Console Body with Smooth Tab State Transitions */}
                <div className="p-6 font-mono text-xs text-slate-700 dark:text-slate-300 min-h-[300px] flex flex-col justify-between bg-slate-900 text-slate-100">
                  {activeTab === 'architecture' && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between pb-2 border-b border-white/[0.1]">
                        <span className="text-slate-400 text-[11px] uppercase tracking-wider">ENGINEERING FOCUS</span>
                        <span className="text-sky-400 font-bold">AIML & IoT</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-slate-400 text-[11px] uppercase tracking-wider">CORE ARCHITECTURES:</div>
                        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] space-y-1.5 text-[11px]">
                          <div className="flex justify-between items-center">
                            <span className="text-white">Smart Navigation Wearable</span>
                            <span className="text-emerald-400">IoT Prototype</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white">SportsHub Management</span>
                            <span className="text-sky-400">Full-Stack Web</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white">Neural Net Implementations</span>
                            <span className="text-amber-400">Python / PyTorch</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/20 text-[11px] text-blue-200">
                        "Building purposeful systems where artificial intelligence empowers human autonomy."
                      </div>
                    </div>
                  )}

                  {activeTab === 'code' && (
                    <div className="space-y-1.5 text-[11px] leading-relaxed animate-fadeIn">
                      <p className="text-slate-500"># Prashanth.R — AI Engineering Pipeline</p>
                      <p><span className="text-purple-400">from</span> <span className="text-sky-300">dataclasses</span> <span className="text-purple-400">import</span> dataclass</p>
                      <p><span className="text-purple-400">import</span> <span className="text-sky-300">numpy</span> <span className="text-purple-400">as</span> np</p>
                      <p className="pt-1"><span className="text-purple-400">class</span> <span className="text-yellow-300">AIEngineer</span>:</p>
                      <p className="pl-4 text-slate-300">name: str = <span className="text-emerald-300">"Prashanth.R"</span></p>
                      <p className="pl-4 text-slate-300">degree: str = <span className="text-emerald-300">"B.Tech CSE (AIML)"</span></p>
                      <p className="pl-4 text-slate-300">institution: str = <span className="text-emerald-300">"REVA University"</span></p>
                      <p className="pl-4 text-slate-300">certified: list = [<span className="text-emerald-300">"IBM Python"</span>, <span className="text-emerald-300">"Innovation"</span>]</p>
                      <p className="pl-4 pt-1"><span className="text-purple-400">def</span> <span className="text-sky-300">build_future</span>(self):</p>
                      <p className="pl-8 text-sky-400">return <span className="text-emerald-300">"Innovative, impactful solutions"</span></p>
                    </div>
                  )}

                  {activeTab === 'telemetry' && (
                    <div className="space-y-3.5 text-xs animate-fadeIn">
                      <div className="flex justify-between items-center py-1.5 border-b border-white/[0.1]">
                        <span className="text-slate-400">Current Semester</span>
                        <span className="text-sky-400 font-semibold font-mono">3rd Semester</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-white/[0.1]">
                        <span className="text-slate-400">Pre-University Distinction</span>
                        <span className="text-emerald-400 font-semibold font-mono">95% (BGS PU College)</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-white/[0.1]">
                        <span className="text-slate-400">Hackathons Participated</span>
                        <span className="text-white font-mono">SIH, Web Dev</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5">
                        <span className="text-slate-400">Location</span>
                        <span className="text-white font-mono">Bengaluru, KA</span>
                      </div>
                    </div>
                  )}

                  {/* Terminal Sub-Bar */}
                  <div className="pt-4 mt-2 border-t border-white/[0.1] flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>ONLINE // ACTIVE AGENT</span>
                    </span>
                    <span className="text-slate-500">2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Key Metrics Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col group">
              <span
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-smooth group-hover:text-blue-600 dark:group-hover:text-[#00F0FF]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
