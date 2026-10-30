import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#050811] text-slate-600 dark:text-slate-400 relative transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span
              className="text-lg font-bold text-slate-900 dark:text-white tracking-wider flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-[#00F0FF]" />
              PRASHANTH.R
            </span>
            <span className="text-xs text-blue-600 dark:text-[#00F0FF] font-mono mt-0.5 font-medium">
              Aspiring AI Engineer
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-slate-900 dark:hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-smooth shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-smooth shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-[#00F0FF] transition-smooth shadow-xs"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-[#00F0FF]/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-white/[0.08] transition-smooth ml-2 shadow-xs"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2 text-center">
          <p>Copyright © 2026 Prashanth.R. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            Engineered with Precision & Passion for Artificial Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};
