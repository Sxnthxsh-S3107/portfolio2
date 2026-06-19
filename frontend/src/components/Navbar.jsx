import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import resumeData from '../data/resumeData.json';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-brand-black)]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
          {resumeData.name.split(' ')[0]}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/Santhosh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-[var(--color-brand-orange)] transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white hover:text-black rounded-full transition-all duration-300 border border-white/20"
          >
            Get in touch <ArrowRight size={16} />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[var(--color-brand-black)] border-b border-gray-800"
      >
        <nav className="flex flex-col px-6 py-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-heading font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/Santhosh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-heading font-medium text-gray-300 hover:text-[var(--color-brand-orange)] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-black bg-white rounded-full"
          >
            Get in touch <ArrowRight size={16} />
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
