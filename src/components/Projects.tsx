import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Globe, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<'All' | 'IoT' | 'Web Development'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-blue-100/40 dark:bg-[#00F0FF]/5 rounded-full blur-[150px] pointer-events-none transition-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
                FEATURED WORK
              </span>
              <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Engineered Systems & Innovations
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Transforming innovative ideas into functioning hardware and scalable web solutions.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] shrink-0 self-start md:self-auto">
            {(['All', 'IoT', 'Web Development'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-smooth whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-white dark:bg-gradient-to-r dark:from-[#00F0FF] dark:to-[#397BFF] text-blue-600 dark:text-[#080D1A] font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/[0.04]'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl minimal-card border border-slate-200 dark:border-white/[0.08] transition-smooth overflow-hidden"
            >
              {/* Dynamic Hairline Top Border Accent on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600 dark:via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Visual Asset Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-[#0A0E18]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                {/* Category Indicator */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-white bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-sm">
                    {project.category === 'IoT' ? <Cpu className="w-3.5 h-3.5 text-blue-400" /> : <Globe className="w-3.5 h-3.5 text-sky-400" />}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3
                    className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-[#00F0FF] transition-smooth"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics / Highlights */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06]">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col text-center">
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-[#00F0FF]">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-mono text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Trigger */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-[#00F0FF] hover:text-blue-800 dark:hover:text-white transition-smooth"
                  >
                    <span>Explore Architecture & Specs</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] hover:bg-blue-50 dark:hover:bg-[#00F0FF]/10 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-white/[0.08] transition-smooth"
                    title="View details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
