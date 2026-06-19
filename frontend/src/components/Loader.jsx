import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-brand-black)]"
    >
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tighter"
        >
          Santhosh S.
        </motion.h1>
      </div>
      <div className="w-48 h-[2px] bg-white/10 mt-6 relative overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 bg-[var(--color-brand-orange)]"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
