import React from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Profile />
      <About />
      <Education />
      <Experience />
      <Projects />
      <OpenSource />
      <Contact />
    </div>
  );
}

export default App;