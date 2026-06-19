import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import resumeData from '../../data/resumeData.json';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.07a4.6 4.6 0 0 0-1.3-3.2 4.6 4.6 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.6 4.6 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.57 3.3 6.77 6.5 7.07a4.8 4.8 0 0 0-1 3.03V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="glass-card group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-full h-48 rounded-lg overflow-hidden mb-6 bg-brand-black/50 relative border border-glass-border">
           <img 
              src={`/assets/images/projects/project${index + 1}.png`} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/600x400/0a0a0a/8a2be2?text=Project+${index+1}`;
              }}
           />
        </div>

        <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-brand-neon transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-brand-neon/10 text-brand-neon border border-brand-neon/20">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-glass-border">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:text-glow transition-all">
              <GithubIcon size={20} />
            </a>
          )}
          <a href="#" className="text-gray-400 hover:text-brand-neon hover:text-glow transition-all ml-auto">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-brand-neon">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-neon to-brand-purple rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
