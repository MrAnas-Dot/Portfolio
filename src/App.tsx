import React from 'react';
import  Welcomemsg  from './components/Welcomemsg/welcome';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { TestIndicator } from './components/TestIndicator';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-black text-white">
      <TestIndicator />
      <Welcomemsg />
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;