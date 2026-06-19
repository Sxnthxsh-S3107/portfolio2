import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/80 backdrop-blur-md border-b border-glass-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-white text-glow">
          SS.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand-neon hover:text-glow transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/resume/Santhosh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 text-sm font-medium text-brand-black bg-brand-neon rounded-full hover:shadow-[0_0_15px_rgba(0,243,255,0.6)] transition-all duration-300"
          >
            Resume
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
        className="md:hidden overflow-hidden bg-brand-black/95 backdrop-blur-lg"
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-brand-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/assets/resume/Santhosh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2 text-center text-sm font-medium text-brand-black bg-brand-neon rounded-full"
          >
            Resume
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
