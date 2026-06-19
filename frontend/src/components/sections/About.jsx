import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-brand-neon">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-neon to-brand-purple mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card relative overflow-hidden group"
        >
          {/* Subtle glowing background effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 p-4 md:p-8">
            <h3 className="text-2xl font-heading text-white mb-6">
              {resumeData.title}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-body">
              {resumeData.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
