import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/socials';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeforcesIcon } from './BrandIcons';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    const emailToCopy = SOCIAL_LINKS.email || 'ajuruddinali03@gmail.com';
    navigator.clipboard.writeText(emailToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    try { confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } }); } catch {}
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const linkedinUrl = SOCIAL_LINKS.linkedin || SOCIAL_LINKS.linkedIn;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-purple-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an interesting project, internship opportunity, collaboration, or just want to talk tech? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Connect & Collaborate</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you're looking for a passionate Full-Stack Developer, React/Node.js engineer, or intern for your tech team, feel free to reach out.
              </p>

              {/* Direct Buttons */}
              <div className="space-y-3 pt-2">
                
                {/* Phone Direct */}
                {SOCIAL_LINKS.phone && (
                  <a
                    href={`tel:${SOCIAL_LINKS.phone}`}
                    className="w-full p-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-700 group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span>{SOCIAL_LINKS.phone}</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-300">CALL ME ↗</span>
                  </a>
                )}

                {/* Email Direct */}
                {SOCIAL_LINKS.email && (
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="w-full p-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-700 group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span>{SOCIAL_LINKS.email}</span>
                    </div>
                    <span className="font-mono text-[10px] text-purple-300">EMAIL ME ↗</span>
                  </a>
                )}

                {/* GitHub Verified Button */}
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-700 group"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span>github.com/Ajuruddin04</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400">GITHUB</span>
                  </a>
                )}

                {/* LinkedIn Button */}
                {linkedinUrl ? (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-700 group"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">CONNECT ↗</span>
                  </a>
                ) : null}

                {/* Codeforces Button */}
                {SOCIAL_LINKS.codeforces && (
                  <a
                    href={SOCIAL_LINKS.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-700 group"
                  >
                    <div className="flex items-center gap-3">
                      <CodeforcesIcon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                      <span>Codeforces Profile</span>
                    </div>
                    <span className="font-mono text-[10px] text-amber-300">CP ↗</span>
                  </a>
                )}

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full p-3.5 rounded-xl glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-between border border-slate-700 group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Copy Email Address</span>
                  </div>
                  <span className="font-mono text-[10px] text-purple-300 flex items-center gap-1">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </span>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column — Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                    Thanks for reaching out, {formData.name || 'friend'}! I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:border-purple-500 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:border-purple-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-semibold text-slate-300 uppercase">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ajuruddin, I saw your portfolio and wanted to talk about..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 text-sm focus:border-purple-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
