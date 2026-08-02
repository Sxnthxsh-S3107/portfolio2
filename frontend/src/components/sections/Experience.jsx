import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink } from 'lucide-react';
import resumeData from '../../data/resumeData.json';

const Experience = () => {
  const headingRef = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

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
    <section id="experience" className="py-16 px-6 relative bg-[var(--color-brand-black)] border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-7xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <p className="text-[var(--color-brand-orange)] font-heading font-medium mb-4 uppercase tracking-wider text-sm">
            Background
          </p>
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-gradient-animate inline-block"
          >
            Journey & Experience
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* Education & Certifications (Grid for uniform wide look) */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-3xl font-heading font-bold mb-10 text-white border-b border-white/10 pb-4">Education</h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[var(--color-brand-card)] p-8 lg:p-10 rounded-[2rem]"
                  >
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-400 mb-4">{edu.institution} <span className="mx-2">•</span> {edu.year}</p>
                    <div className="flex gap-4">
                      {edu.cgpa && <span className="text-base font-medium text-[var(--color-brand-orange)]">CGPA: {edu.cgpa}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-heading font-bold mb-10 text-white border-b border-white/10 pb-4">Certifications</h3>
              <div className="space-y-6">
                {resumeData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[var(--color-brand-card)] p-8 lg:p-10 rounded-[2rem] flex flex-col"
                  >
                    <h4 className="font-bold text-white mb-2 text-xl leading-tight">{cert.title}</h4>
                    <p className="text-[var(--color-brand-orange)] font-medium mb-4 text-sm">{cert.org} <span className="mx-2">•</span> {cert.year}</p>
                    {cert.description && (
                      <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience */}
          {resumeData.experience.length > 0 && (
            <div>
              <h3 className="text-3xl font-heading font-bold mb-10 text-white border-b border-white/10 pb-4">Work Experience</h3>
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => exp.fullDescription && setSelectedExperience(exp)}
                    className={`bg-[var(--color-brand-card)] p-10 lg:p-14 rounded-[2rem] flex flex-col md:flex-row md:items-start justify-between gap-8 ${exp.fullDescription ? 'cursor-pointer hover:bg-white/5 hover:ring-1 hover:ring-[var(--color-brand-orange)] transition-all group' : ''}`}
                  >
                    <div className="md:w-3/4">
                      <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[var(--color-brand-orange)] transition-colors">{exp.role}</h4>
                      <p className="text-[var(--color-brand-orange)] text-lg font-medium mb-6">{exp.company}</p>
                      <ul className="space-y-3 text-gray-400 text-base font-body mb-6">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="text-gray-600 mt-1">-</span> 
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.fullDescription && (
                        <span className="inline-block mt-4 text-sm font-bold text-[var(--color-brand-orange)] uppercase tracking-widest border border-[var(--color-brand-orange)] px-4 py-2 rounded-full group-hover:bg-[var(--color-brand-orange)] group-hover:text-white transition-all">Read Full Experience &rarr;</span>
                      )}
                    </div>
                    <div className="md:w-1/4 md:text-right">
                      <span className="inline-block px-5 py-3 rounded-full bg-white/5 text-sm font-medium text-gray-300">
                        {exp.duration}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
            data-lenis-prevent="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -90, z: -500 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90, z: -500 }}
              transition={{ type: "spring", damping: 20, stiffness: 100, mass: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-[var(--color-brand-card)] border border-white/10 rounded-[2rem] p-10 md:p-16 shadow-[0_0_50px_rgba(255,87,34,0.15)] custom-scrollbar transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <button 
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300 z-10"
              >
                <X size={24} />
              </button>

              <div className="max-w-3xl">
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 pr-12 leading-tight">
                  {selectedExperience.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <span className="text-xl text-[var(--color-brand-orange)] font-bold">
                    {selectedExperience.company}
                  </span>
                  <span className="text-sm font-medium text-gray-400 bg-black/50 border border-white/10 px-4 py-2 rounded-full">
                    {selectedExperience.duration}
                  </span>
                  {selectedExperience.certificate && (
                    <a 
                      href={selectedExperience.certificate} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm font-medium text-white bg-[var(--color-brand-orange)] px-4 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  )}
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white">
                  {selectedExperience.fullDescription.split('\n').map((paragraph, idx) => {
                    if (paragraph.trim().startsWith('🔹')) {
                      return (
                        <div key={idx} className="flex gap-4 mb-4 items-start bg-black/20 p-4 rounded-xl border border-white/5">
                          <span className="text-[var(--color-brand-orange)] text-xl leading-none">🔹</span>
                          <span className="text-gray-300 text-lg">{paragraph.replace('🔹', '').trim()}</span>
                        </div>
                      );
                    }
                    if (paragraph.trim() === '') return null;
                    return (
                      <p key={idx} className="text-gray-300 font-body text-lg leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
