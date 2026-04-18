import React from 'react';

const AboutMe = ({ darkMode }) => {
  return (
    <section className={`p-8 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>

      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        🎮 About Me
      </h2>

      <p>
        Hi, I’m <b>Jandelmar Abalos</b>. I’m an IT student who enjoys coding and gaming.
      </p>

      <p className="mt-3">
        I like experimenting with code like it’s a game — sometimes I win, sometimes I debug 😅
        but I always learn something new.
      </p>

    </section>
  );
};

export default AboutMe;