import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const CoCurricular = () => {
  if (!resumeData.coCurricular || resumeData.coCurricular.length === 0) return null;

  return (
    <section id="cocurricular" className="py-16 px-6 relative bg-[var(--color-brand-black)] border-t border-white/5">
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
          className="mb-16 text-center md:text-left"
        >
          <p className="text-[var(--color-brand-orange)] font-heading font-medium mb-4 uppercase tracking-wider text-sm">
            Beyond Code
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white inline-block">
            Co-Curricular Interests
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {resumeData.coCurricular.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 p-8 rounded-[2rem] flex flex-col hover:bg-white/5 transition-colors"
            >
              <h4 className="font-bold text-[var(--color-brand-orange)] mb-3 text-xl leading-tight">{item.title}</h4>
              <p className="text-base text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoCurricular;
