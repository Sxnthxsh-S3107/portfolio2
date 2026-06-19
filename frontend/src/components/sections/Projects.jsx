import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import resumeData from '../../data/resumeData.json';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.3 6.5-1.5 6.5-7.07a4.6 4.6 0 0 0-1.3-3.2 4.6 4.6 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.6 4.6 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.57 3.3 6.77 6.5 7.07a4.8 4.8 0 0 0-1 3.03V22"></path>
    <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      // Parallax effect for the image inside the card
      gsap.to(imageRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Reveal animation for the card itself
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 100, scale: 0.95 },
        { 
          opacity: 1, y: 0, scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });
    return () => mm.revert();
  }, []);

  // Alternate image position left/right on desktop
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-[var(--color-brand-card)] rounded-[2rem] overflow-hidden w-full`}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] lg:min-h-[400px] bg-black overflow-hidden relative">
         <a href={project.github || "#"} target={project.github ? "_blank" : "_self"} rel="noreferrer" className="block w-full h-full cursor-pointer">
           <img 
              ref={imageRef}
              src={`/assets/images/projects/project${index + 1}.png`} 
              alt={project.title}
              className="absolute top-[-10%] left-0 w-full h-[120%] object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/800x600/111111/444444?text=Project+Image`;
              }}
           />
         </a>
         {/* Gradient overlay to blend image edge with card color on desktop */}
         <div className={`hidden md:block absolute inset-0 bg-gradient-to-${isEven ? 'l' : 'r'} from-[var(--color-brand-card)] to-transparent w-full h-full pointer-events-none`}></div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-16 z-10">
        <a href={project.github || "#"} target={project.github ? "_blank" : "_self"} rel="noreferrer" className="block w-fit cursor-pointer hover:text-[var(--color-brand-orange)] transition-colors">
          <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-white hover:text-inherit transition-colors">
            {project.title}
          </h3>
        </a>
        
        <p className="text-gray-400 mb-8 font-body text-base lg:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span key={tech} className="text-sm font-semibold px-4 py-2 rounded-full bg-white/5 text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto pt-6 border-t border-white/10">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link">
              <GithubIcon size={24} />
              <span className="font-medium">View Source</span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[var(--color-brand-orange)] hover:text-white transition-colors ml-auto font-medium">
              Live Demo <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" className="py-32 px-6 relative bg-[var(--color-brand-black)] border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <p className="text-[var(--color-brand-orange)] font-heading font-medium mb-4 uppercase tracking-wider text-sm">
            Featured Work
          </p>
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient-animate inline-block"
          >
            Recent Projects
          </h2>
        </motion.div>

        <div className="flex flex-col space-y-12 lg:space-y-24">
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
