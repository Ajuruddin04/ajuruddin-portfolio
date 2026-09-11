import React from 'react';
import { SOCIAL_LINKS } from '../data/socials';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeforcesIcon } from './BrandIcons';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedinUrl = SOCIAL_LINKS.linkedin || SOCIAL_LINKS.linkedIn;

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-slate-100 text-sm tracking-tight">Ajuruddin Ali</h3>
            <p className="text-slate-400 text-xs font-sans">
              Full-Stack Developer • Web & API Specialist
            </p>
          </div>

          {/* Tagline */}
          <div className="text-slate-400 italic text-center font-sans">
            "Built with curiosity, code & caffeine."
          </div>

          {/* Quick Links & Back To Top */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}

            {SOCIAL_LINKS.codeforces && (
              <a
                href={SOCIAL_LINKS.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Codeforces"
              >
                <CodeforcesIcon className="w-4 h-4" />
              </a>
            )}

            {SOCIAL_LINKS.instagram && (
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-rose-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors flex items-center gap-1 text-[11px]"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 Ajuruddin Ali. All rights reserved.
          </div>
          <div>
            B.Tech Information Technology • Rajkiya Engineering College, Mirzapur
          </div>
        </div>

      </div>
    </footer>
  );
}
