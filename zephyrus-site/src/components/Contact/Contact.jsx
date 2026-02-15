/**
 * Contact Form Section
 * Features: Form with validation, animated feedback states
 * Mobile-first design
 */

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission (Supabase/Formspree/Resend)
    console.log('Form submitted:', formData);
    
    // Simulate success for now
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-16 md:px-8 lg:px-16 bg-[#0a0a0f]"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#12121a] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#12121a] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#12121a] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
              Something went wrong. Please try again.
            </div>
          )}
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Or connect with us on</p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
