import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="my-12 p-8 rounded-2xl shadow-md bg-white hover:shadow-xl transition duration-300">

      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        📩 Contact
      </h2>

      <p className="text-gray-700 mb-4">
        Email: jandelmar.abalos@email.com
      </p>

      {submitted ? (
        <p className="text-green-500 font-semibold">
          ✅ Message sent successfully!
        </p>
      ) : (
        <div className="space-y-3">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg h-28"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>

        </div>
      )}

    </section>
  );
};

export default Contact;