import React from 'react';
import { PROFILE } from '../data/profile';
import { Briefcase, GraduationCap, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world enterprise IT internship experience and academic foundation in Information Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Work Experience</h3>
                <span className="text-xs text-slate-400 font-mono">Hands-on Industry Exposure</span>
              </div>
            </div>

            {/* UPPCL Internship Card */}
            <div className="glass-panel p-7 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="text-lg font-bold text-slate-100">Full Stack Developer Intern</h4>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Uttar Pradesh Power Corporation Limited (UPPCL)</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/60">
                  June 2026 – July 2026
                </span>
              </div>

              <div className="text-xs text-slate-400 font-mono flex items-center gap-4 border-t border-b border-slate-800/60 py-2.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Lucknow, UP</span>
                </span>
                <span>• Full Stack Web Development</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Contributed to the development of the UPPCL Consolidated Billing System using React.js, Vite, Node.js, and MongoDB.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Developed responsive frontend components and integrated REST APIs with backend services to implement end-to-end application functionality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Worked on CRUD operations, database management, testing, and debugging, gaining hands-on experience in full-stack web application development.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education Column */}
          <div id="education" className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Academic Education</h3>
                <span className="text-xs text-slate-400 font-mono">Core Computer Science & IT</span>
              </div>
            </div>

            {/* B.Tech Education Card */}
            <div className="glass-panel p-7 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition-all">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="text-lg font-bold text-slate-100">{PROFILE.education.degree}</h4>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{PROFILE.education.institution}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                  {PROFILE.education.period}
                </span>
              </div>

              <div className="text-xs text-slate-400 font-mono flex items-center gap-4 border-t border-b border-slate-800/60 py-2.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{PROFILE.education.period}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Mirzapur, Uttar Pradesh</span>
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Pursuing B.Tech in Information Technology with specialized coursework in Data Structures & Algorithms, Database Management Systems, Software Engineering, Web Technologies, and Cloud Infrastructure.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {['Python', 'Java', 'Data Structures', 'SQL & DBMS', 'Web Technologies', 'Operating Systems', 'Docker & GCP'].map((subject, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
