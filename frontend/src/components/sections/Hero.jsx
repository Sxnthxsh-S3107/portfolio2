import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        ></div>
        
        {/* Drip Fade Gradient (fades from transparent to solid brand black at the bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-brand-black)]/60 to-[var(--color-brand-black)] z-10"></div>
        
        {/* Subtle orange glow on top of the image to keep the warm theme */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--color-brand-orange)_0%,_transparent_70%)] opacity-30 mix-blend-screen z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex-grow flex flex-col justify-center">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 z-30"
          >
            <p className="text-xl md:text-2xl font-medium mb-2 font-heading tracking-wide">Hey, I'm a</p>
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold leading-[0.9] tracking-tighter text-white drop-shadow-lg">
              Machine <br />
              Learning <br />
              Engineer
            </h1>
          </motion.div>

          {/* Center Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:col-span-4 flex justify-center relative -mt-12 md:mt-0 z-20"
          >
            <div className="relative w-72 h-96 md:w-full md:h-[600px] overflow-hidden rounded-t-[100px] rounded-b-3xl grayscale contrast-125 brightness-90 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-700">
              <img 
                src="/assets/images/profile.JPG" 
                alt={resumeData.name}
                className="w-full h-full object-cover object-[60%_top]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x800/1a1a1a/ff5722?text=Upload+profile.JPG';
                }}
              />
              {/* Gradient overlay on image to blend with background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="md:col-span-3 z-30 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">
              Intelligence should feel invisible.
            </h3>
            <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed">
              {resumeData.tagline}. I build deep learning pipelines and computer vision systems that connect data to real-world solutions.
            </p>
          </motion.div>
        </div>

        {/* Bottom Metrics/Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8"
        >
          <div>
            <p className="text-[var(--color-brand-orange)] font-bold font-heading mb-1">#01</p>
            <h4 className="text-white font-medium text-sm md:text-base">Deep Learning</h4>
          </div>
          <div>
            <p className="text-[var(--color-brand-orange)] font-bold font-heading mb-1">#02</p>
            <h4 className="text-white font-medium text-sm md:text-base">Computer Vision</h4>
          </div>
          <div>
            <p className="text-[var(--color-brand-orange)] font-bold font-heading mb-1">#03</p>
            <h4 className="text-white font-medium text-sm md:text-base">Satellite Data</h4>
          </div>
          <div>
            <p className="text-[var(--color-brand-orange)] font-bold font-heading mb-1">#04</p>
            <h4 className="text-white font-medium text-sm md:text-base">Applied AI Systems</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
