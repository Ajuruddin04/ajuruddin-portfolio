import React from 'react';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socials';
import { GithubIcon } from './BrandIcons';
import { ArrowRight, Download, Sparkles, Cloud, Server, Code2 } from 'lucide-react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Text & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/30 text-purple-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span>B.Tech IT • Software Development • Cloud & DevOps</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Ajuruddin Ali</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-200 tracking-tight leading-snug">
                {PROFILE.headline}
              </p>
            </div>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {PROFILE.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {SOCIAL_LINKS.resume ? (
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl glass-panel hover:bg-slate-800/80 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 border border-slate-700 hover:border-slate-600"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download Resume</span>
                </a>
              ) : (
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl glass-panel hover:bg-slate-800/80 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 border border-slate-700 hover:border-slate-600"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Get In Touch</span>
                </a>
              )}

              {/* GitHub Quick Button */}
              {SOCIAL_LINKS.github && (
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl glass-panel text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Quick Tech Highlights */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Java & JS</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span>AWS Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-emerald-400" />
                <span>Docker & DevOps</span>
              </div>
            </div>

          </div>

          {/* Right Column — Interactive Developer Terminal */}
          <div className="lg:col-span-5">
            <Terminal />
          </div>

        </div>
      </div>
    </section>
  );
}
