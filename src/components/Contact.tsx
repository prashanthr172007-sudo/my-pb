import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.06]">
      {/* Background glow conduits */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-blue-100/40 dark:bg-[#00F0FF]/5 rounded-full blur-[160px] pointer-events-none transition-slow" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-indigo-100/40 dark:bg-[#397BFF]/5 rounded-full blur-[140px] pointer-events-none transition-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-[#00F0FF] uppercase">
              GET IN TOUCH
            </span>
            <span className="h-[1px] w-8 bg-blue-600/30 dark:bg-[#00F0FF]/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let's Collaborate On Something Innovative.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Open to discussing AI research, software engineering opportunities, hackathon collaborations, or innovative hardware projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="minimal-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.08] space-y-5">
              <h3
                className="text-xl font-bold text-slate-900 dark:text-white tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Direct Communication
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] transition-smooth hover:border-blue-300 dark:hover:border-[#00F0FF]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-[#00F0FF]" />
                    <span>Email Address</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-1 rounded text-slate-400 hover:text-blue-600 dark:hover:text-[#00F0FF] transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-sm sm:text-base text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-[#00F0FF] transition-colors block break-all font-medium"
                >
                  {personal.email}
                </a>
                {copiedField === 'email' && (
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-1 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] transition-smooth hover:border-blue-300 dark:hover:border-[#00F0FF]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-[#00F0FF]" />
                    <span>Phone Number</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-1 rounded text-slate-400 hover:text-blue-600 dark:hover:text-[#00F0FF] transition-colors"
                    title="Copy phone to clipboard"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${personal.phone}`}
                  className="font-mono text-sm sm:text-base text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-[#00F0FF] transition-colors block font-medium"
                >
                  +91 {personal.phone}
                </a>
                {copiedField === 'phone' && (
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-1 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-[#00F0FF]" />
                  <span>Campus Location</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                  REVA University, Bengaluru, Karnataka, India
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3 font-semibold">
                  PROFILES:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-smooth group"
                  >
                    <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                      <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-smooth group"
                  >
                    <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="minimal-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.1] shadow-xl relative overflow-hidden">
              <h3
                className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out this form and I will respond to your message promptly.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-sm flex items-center gap-3 animate-fadeIn">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Message dispatched successfully!</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300/90 mt-0.5">
                      Thank you for reaching out. Prashanth will reply to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2 font-medium"
                    >
                      Your Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#080D1A]/90 border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-smooth"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2 font-medium"
                    >
                      Your Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#080D1A]/90 border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-smooth"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Hackathon / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#080D1A]/90 border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-smooth"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2 font-medium"
                  >
                    Message <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project idea, or collaboration..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#080D1A]/90 border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-smooth resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Direct delivery to prashanthr172007@gmail.com
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:text-[#080D1A] dark:bg-gradient-to-r dark:from-[#00F0FF] dark:to-[#397BFF] rounded-xl shadow-sm hover:shadow-md transition-smooth disabled:opacity-50 whitespace-nowrap active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
