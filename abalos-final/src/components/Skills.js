import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [data, setData] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (data.name && data.message) {
      setSent(true);
    }
  };

  return (
    <section className={`p-8 rounded-2xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>

      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        📩 Contact Me
      </h2>

      <p>Email: jandelmar.abalos@email.com</p>

      {!sent ? (
        <div className="mt-4 space-y-3">

          <input
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <textarea
            className="w-full p-2 border rounded"
            placeholder="Your Message"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>

        </div>
      ) : (
        <p className="text-green-500 mt-4">Message sent! 👍</p>
      )}

    </section>
  );
};

export default Contact;