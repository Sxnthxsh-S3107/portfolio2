import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Journey & <span className="text-brand-purple">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-neon rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon">💼</span>
              Work Experience
            </h3>
            <div className="relative border-l border-glass-border ml-4 space-y-12">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 bg-brand-neon rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
                  <div className="glass-card">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-brand-neon mb-4 font-medium">{exp.company} <span className="text-gray-400 text-sm ml-2">({exp.duration})</span></p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple">🎓</span>
              Education
            </h3>
            <div className="relative border-l border-glass-border ml-4 space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute w-4 h-4 bg-brand-purple rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(138,43,226,0.8)]"></div>
                  <div className="glass p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-brand-purple mb-2">{edu.institution} <span className="text-gray-400 text-sm ml-2">({edu.year})</span></p>
                    {edu.cgpa && <p className="text-gray-300 font-medium">CGPA: {edu.cgpa}</p>}
                    {edu.score && <p className="text-gray-300 font-medium">Score: {edu.score}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon">📜</span>
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-5 rounded-xl flex flex-col justify-between"
                >
                  <h4 className="font-bold text-white mb-2">{cert.title}</h4>
                  <div className="flex justify-between items-end text-sm text-gray-400">
                    <span>{cert.org}</span>
                    <span>{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
