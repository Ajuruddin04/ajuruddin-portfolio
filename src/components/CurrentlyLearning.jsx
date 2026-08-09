import React from 'react';
import { CURRENTLY_LEVELING_UP } from '../data/skills';
import { TrendingUp, Flame, CheckCircle2 } from 'lucide-react';

export default function CurrentlyLearning() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-amber-400 text-xs font-mono mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>ACTIVE PROGRESSION SYSTEM</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Currently Leveling Up 🚀
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Active learning tracks, hands-on labs, and ongoing domain mastery.
            </p>
          </div>

          <div className="glass-panel px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Updated Daily // Continuous Learning</span>
          </div>
        </div>

        {/* Leveling Up Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_LEVELING_UP.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 space-y-4 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-slate-100 text-sm sm:text-base">{item.topic}</span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-950/50 text-amber-300 border border-amber-800/40">
                  {item.badge}
                </span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {item.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Learning Depth</span>
                  <span className="text-amber-400 font-bold">{item.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
