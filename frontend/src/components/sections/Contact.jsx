import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import resumeData from '../../data/resumeData.json';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.07a4.6 4.6 0 0 0-1.3-3.2 4.6 4.6 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.6 4.6 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.57 3.3 6.77 6.5 7.07a4.8 4.8 0 0 0-1 3.03V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        setStatus({ submitting: false, success: false, error: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Failed to connect to server.' });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="text-brand-neon">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-neon to-brand-purple rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-neon/10 flex items-center justify-center text-brand-neon group-hover:bg-brand-neon group-hover:text-brand-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">{resumeData.contact.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">{resumeData.contact.phone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-heading font-bold mb-4 border-b border-glass-border pb-2">Socials</h4>
                <div className="flex gap-4">
                  <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-neon hover:border-brand-neon transition-colors">
                    <GithubIcon size={20} />
                  </a>
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-neon hover:border-brand-neon transition-colors">
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <div className="glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-brand-black/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {status.error && (
                  <p className="text-red-400 text-sm">{status.error}</p>
                )}
                
                {status.success && (
                  <p className="text-green-400 text-sm">Message sent successfully!</p>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-lg bg-brand-neon text-brand-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
