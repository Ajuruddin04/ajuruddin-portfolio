import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CurrentlyLearning from './components/CurrentlyLearning';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-purple-600 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CurrentlyLearning />
        <Projects />
        <Journey />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
