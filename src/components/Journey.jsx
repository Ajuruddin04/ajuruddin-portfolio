import React from 'react';
import { LEARNING_JOURNEY, GOAL_STATEMENT } from '../data/journey';
import { Compass, Layout, Code, Cloud, Box, Layers, Ship, Target, ArrowDown } from 'lucide-react';

export default function Journey() {
  const iconMap = {
    Layout: Layout,
    Code: Code,
    Cloud: Cloud,
    Box: Box,
    Layers: Layers,
    Ship: Ship,
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-purple-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>LEARNING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Evolution Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            My structured progression from frontend web development to cloud infrastructure and platform engineering.
          </p>
        </div>

        {/* Journey Timeline Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 via-cyan-500 to-indigo-600 opacity-30" />

          <div className="space-y-8 sm:space-y-12 relative z-10">
            {LEARNING_JOURNEY.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Code;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 space-y-3 hover:shadow-lg hover:shadow-purple-950/20">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                          {step.phase}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {step.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-100">{step.title}</h3>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Badge Center Node */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center text-purple-300 font-mono text-xs font-bold shadow-md shadow-purple-500/30">
                    {idx + 1}
                  </div>

                  {/* Empty Spacer Column for Desktop Grid Alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Goal Destination Banner */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl border-2 border-dashed border-purple-500/50 space-y-4 glow-purple">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto border border-purple-500/40">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-widest block mb-1">
                  CAREER GOAL & DIRECTION
                </span>
                <h3 className="text-xl font-bold text-white">
                  Cloud / DevOps & Infrastructure Engineer
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {GOAL_STATEMENT.motto}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
