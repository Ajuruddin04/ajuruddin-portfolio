import React from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { Code2, Cloud, Cpu, Terminal, Wrench, Sparkles, CheckCircle, Clock } from 'lucide-react';

export default function Skills() {
  const iconMap = {
    Code2: Code2,
    Cloud: Cloud,
    Cpu: Cpu,
    Terminal: Terminal,
    Wrench: Wrench,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECH STACK & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies I build with daily and infrastructure concepts I am actively expanding.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;

            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-purple-950/20"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-100 text-base">{cat.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => {
                      const isLearning = skill.status === 'Currently Learning';
                      
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800/60 transition-colors"
                        >
                          <div>
                            <span className="font-semibold text-slate-200 text-sm block">{skill.name}</span>
                            <span className="text-[10px] font-mono text-slate-400">{skill.level}</span>
                          </div>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            isLearning
                              ? 'bg-amber-950/40 text-amber-300 border-amber-800/40'
                              : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40'
                          }`}>
                            {skill.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 text-right">
                  {cat.skills.length} Technologies
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
