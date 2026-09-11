import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { GithubIcon } from './BrandIcons';
import { FolderGit2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filters = ['All', 'Featured', 'Full-Stack', 'Frontend'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.highlight;
    return project.category === activeFilter || project.subCategory === activeFilter;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-purple-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Experiments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical software applications, containerized web systems, and real-world internship work.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-500'
                  : 'glass-panel text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            
            return (
              <div
                key={project.id}
                className={`glass-panel rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl ${
                  project.highlight
                    ? 'border-purple-500/40 hover:border-purple-500/80 glow-purple'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-6 sm:p-7 space-y-5">
                  
                  {/* Top Bar: Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-purple-300 border border-slate-700">
                      {project.subCategory || project.category}
                    </span>

                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.statusColor === 'emerald'
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                        : project.statusColor === 'amber'
                        ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                        : 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Expandable Long Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-3 animate-in fade-in duration-200">
                      <p className="text-slate-400 leading-relaxed">{project.longDescription}</p>
                      {project.bullets && (
                        <ul className="space-y-1.5 pt-1">
                          {project.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-slate-300 text-xs">
                              <span className="text-purple-400 font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Expand/Collapse Toggle */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-[11px] font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Less details' : 'More details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Tech Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Buttons */}
                <div className="p-4 sm:p-5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg glass-panel hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : null}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-md shadow-purple-600/20"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="flex-1 py-2 px-3 rounded-lg bg-slate-900 text-slate-500 font-mono text-[11px] text-center border border-slate-800">
                      {project.status === 'In Development' ? 'Building...' : 'Internal Work'}
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
