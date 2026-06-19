import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="z-10"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-brand-neon font-medium tracking-wider uppercase mb-4"
          >
            Welcome to my universe
          </motion.h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">
              {resumeData.name}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            {resumeData.tagline}
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-transparent border border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-brand-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] font-medium"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-brand-purple text-white hover:bg-transparent hover:text-brand-purple border border-brand-purple transition-all duration-300 font-medium shadow-[0_0_10px_rgba(138,43,226,0.3)] hover:shadow-[0_0_20px_rgba(138,43,226,0.6)]"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative flex justify-center z-10"
        >
          {/* Drifting animation for the image */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass p-2"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-brand-neon/30 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-neon/20 to-brand-purple/20 z-10 mix-blend-overlay"></div>
              {/* Place your profile image here */}
              <img
                src="/assets/images/profile.png"
                alt={resumeData.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400/0a0a0a/00f3ff?text=Profile';
                }}
              />
            </div>
            
            {/* Floating ornamental elements */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-brand-purple/30 blur-xl"
            />
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-brand-neon/30 blur-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
