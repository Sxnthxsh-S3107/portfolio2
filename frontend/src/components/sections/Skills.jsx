import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resumeData.json';

const SkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="px-4 py-2 rounded-full glass text-sm font-medium border border-brand-neon/20 hover:border-brand-neon/60 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all cursor-default"
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
    <section id="skills" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-brand-purple">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-neon rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="glass-card"
            >
              <h3 className="text-xl font-heading text-white mb-6 border-b border-glass-border pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
