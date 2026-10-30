import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, Globe, CheckCircle, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 dark:bg-[#04070F]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-white/[0.15] shadow-2xl z-10 text-slate-800 dark:text-slate-200 transition-smooth">
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#080D1A]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-[#00F0FF] font-semibold">
              {project.category} SPECIFICATION
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Deep Dive</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.1] bg-slate-100 dark:bg-[#0A0E18] aspect-video w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-mono uppercase tracking-wider bg-blue-600/90 text-white px-2.5 py-1 rounded">
                {project.category}
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-2 tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {project.title}
              </h2>
            </div>
          </div>

          {/* Tagline & Long Description */}
          <div className="space-y-3">
            <h3
              className="text-lg font-bold text-blue-600 dark:text-[#ADC6FF]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {project.tagline}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Quantitative Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]"
              >
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="mt-1 text-xl font-bold text-slate-900 dark:text-white font-mono text-blue-600 dark:text-[#00F0FF]">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Overview */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0B1120] border border-slate-200 dark:border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Layers className="w-4 h-4 text-blue-600 dark:text-[#00F0FF]" />
              <span>System Architecture Overview</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Features & Engineering Milestones */}
          <div className="space-y-3">
            <h4
              className="text-base font-bold text-slate-900 dark:text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-[#00F0FF] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2">
              Technology Stack:
            </span>
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#080D1A]/95 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Engineered by Prashanth.R
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-white bg-slate-200 dark:bg-white/[0.08] hover:bg-slate-300 dark:hover:bg-white/[0.12] rounded-lg transition-smooth"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
