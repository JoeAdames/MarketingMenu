import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (et) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Contact Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
