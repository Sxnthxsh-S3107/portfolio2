import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import resumeData from '../../data/resumeData.json';

const About = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to(headingRef.current, {
        backgroundPosition: "200% center",
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="about" className="py-16 px-6 bg-[var(--color-brand-black)] relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-7xl"
      >
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <p className="text-[var(--color-brand-orange)] font-heading font-medium mb-4 uppercase tracking-wider text-sm">
              Behind the code
            </p>
            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 text-gradient-animate"
            >
              Shaping <br/>
              Intelligent Systems <br/>
              That Make Sense
            </h2>
          </div>

          <div className="md:pt-12">
            <h3 className="text-xl md:text-2xl font-heading text-white mb-6 font-medium leading-relaxed">
              I'm an engineer focused on building robust machine learning pipelines that solve real-world problems.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-body mb-8">
              {resumeData.about}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">Let's Build Something Meaningful</span>
              <div className="h-px w-12 bg-gray-700"></div>
              <a href="#contact" className="text-sm font-medium text-white hover:text-[var(--color-brand-orange)] transition-colors">
                Get in touch →
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
