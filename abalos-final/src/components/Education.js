import React from 'react';

const Education = ({ darkMode }) => {
  return (
    <section className={`p-8 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>

      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        📚 Education
      </h2>

      <p>
        I finished Senior High School at Benguet National High School (BeNHS).
      </p>

      <p className="mt-3">
        Right now, I’m focused on improving my skills in programming and web development.
      </p>

    </section>
  );
};

export default Education;