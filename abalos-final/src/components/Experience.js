import React from 'react';

const Experience = ({ darkMode }) => {
  return (
    <section className={`p-8 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>

      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        💼 Experience
      </h2>

      <p>
        I don’t have professional experience yet, but I’ve built small projects while learning.
      </p>

      <p className="mt-3">
        Every project I make helps me understand coding better and improve step by step.
      </p>

    </section>
  );
};

export default Experience;