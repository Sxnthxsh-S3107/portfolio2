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
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        setStatus({ submitting: false, success: false, error: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Failed to connect to server.' });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 relative bg-[var(--color-brand-black)] border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-7xl"
      >
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-[1.1]">
              Let's Build <br/>
              Something <br/>
              <span className="text-[var(--color-brand-orange)]">Meaningful.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-sm">
              I'm always open to discussing applied AI systems, computer vision challenges, or potential partnerships.
            </p>

            <div className="space-y-6 mb-12">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <span className="font-medium">{resumeData.contact.email}</span>
              </a>
              
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <span className="font-medium">{resumeData.contact.phone}</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-orange)] hover:border-[var(--color-brand-orange)] transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-orange)] hover:border-[var(--color-brand-orange)] transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[var(--color-brand-card)] rounded-[2rem] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors font-body"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors font-body"
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
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors resize-none font-body"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {status.error && (
                  <p className="text-red-400 text-sm font-medium">{status.error}</p>
                )}
                
                {status.success && (
                  <p className="text-green-400 text-sm font-medium">Message sent successfully!</p>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 mt-4 rounded-xl bg-[var(--color-brand-orange)] text-white font-bold flex items-center justify-center gap-2 hover:bg-[var(--color-brand-orange-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {status.submitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
