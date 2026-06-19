import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles for a cool effect before spelling name
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      scale: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 1,
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // Wait 3.5s before completing

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black overflow-hidden"
    >
      <div className="relative">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: p.x * 10, y: p.y * 10 }}
            animate={{
              opacity: [0, 1, 0],
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 2,
              delay: p.delay,
              ease: "circOut",
            }}
            className="absolute w-2 h-2 rounded-full bg-brand-neon"
          />
        ))}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-heading font-bold text-white tracking-widest text-glow"
        >
          SANTHOSH
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Loader;
