import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const SkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.03 }}
    whileHover={{ y: -2 }}
    className="px-4 py-2 rounded-full bg-white/5 text-gray-200 text-sm font-medium border border-white/5 hover:bg-[var(--color-brand-orange)] hover:text-white hover:border-[var(--color-brand-orange)] transition-colors cursor-default"
  >
    {skill}
  </motion.div>
);

const Skills = () => {
  const { programming, ml_tools, ml_concepts, geospatial } = resumeData.skills;

  const skillCategories = [
    { title: "Programming", skills: programming },
    { title: "ML Tools & Libraries", skills: ml_tools },
    { title: "ML Concepts", skills: ml_concepts },
    { title: "Geospatial & Others", skills: geospatial },
  ];

  return (
    <section id="skills" className="py-16 px-6 relative bg-[var(--color-brand-black)] border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[var(--color-brand-orange)] font-heading font-medium mb-4 uppercase tracking-wider text-sm">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-[var(--color-brand-card)] rounded-[2rem] p-8"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
