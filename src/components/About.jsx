import React from 'react';
import { PROFILE } from '../data/profile';
import { Terminal, Server, Laptop, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-purple-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Software, Understanding Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging the gap between software development, Linux systems, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Bio & Core Focus */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Who I Am</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PROFILE.bio}
              </p>
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-purple-200 text-sm font-medium leading-relaxed">
                <span className="text-purple-400 font-bold font-mono">Primary Goal: </span>
                <span>To become a versatile software engineer who understands how modern applications are designed, containerized, deployed, and automated at scale.</span>
              </div>
            </div>

            {/* Core Philosophy Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Server className="w-4 h-4" />
                  <span>Infrastructure Aware</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  I write software with execution environment and server resources in mind.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Continuous Learner</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consistently learning through hands-on labs, projects, and active DSA practice.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Developer Workstation Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 glow-purple">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <Laptop className="w-5 h-5 text-purple-400" />
                  <span className="font-bold text-slate-100 text-base">Developer Workstation</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  ENVIRONMENT
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm font-mono">
                {Object.entries(PROFILE.workstation).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 capitalize">{key}:</span>
                    <span className="text-purple-300 font-semibold">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-slate-500 font-mono">
                <code>Ubuntu Linux • VS Code • Docker • AWS CLI</code>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
