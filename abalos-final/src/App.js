import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>

      {/* HEADER */}
      <header className="text-center py-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
        <h1 className="text-4xl font-bold">Jandelmar Abalos</h1>
        <p className="text-lg mt-2 opacity-90">
          IT Student • Aspiring Developer • Gamer 🎮
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 bg-white text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-gray-200 transition"
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </header>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm flex justify-center gap-6 py-3 text-sm font-medium">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        <section id="about">
          <AboutMe darkMode={darkMode} />
        </section>

        <section id="education">
          <Education darkMode={darkMode} />
        </section>

        <section id="experience">
          <Experience darkMode={darkMode} />
        </section>

        <section id="skills">
          <Skills darkMode={darkMode} />
        </section>

        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm opacity-70">
        © 2026 Jandelmar Abalos • Built with React & Tailwind
      </footer>

    </div>
  );
}

export default App;