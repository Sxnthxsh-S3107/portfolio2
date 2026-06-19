import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PaperPlane = () => {
  const planeRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Create a timeline linked to the scroll of the entire body
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Smooth scrubbing
        }
      });

      // Animate the plane along the flight path SVG
      tl.to(planeRef.current, {
        motionPath: {
          path: "#flight-path",
          align: "#flight-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: 90, 
        },
        ease: "none"
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden w-full h-full">
      {/* Flight path spanning viewport height */}
      <svg className="absolute w-full h-full left-0 top-0 opacity-0" viewBox="0 0 100 1000" preserveAspectRatio="none">
        {/* Start off-screen top-right, weave down */}
        <path 
          id="flight-path" 
          d="M 120 -50 C 50 100, 10 300, 50 500 C 90 700, 20 850, 50 1100" 
          fill="none" 
          stroke="white" 
          strokeWidth="1"
        />
      </svg>

      {/* The Airplane SVG */}
      <div 
        ref={planeRef} 
        className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_20px_rgba(255,87,34,0.8)]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[var(--color-brand-orange)]">
          <path d="M2 12L22 2L15 22L11 13L2 12Z" fill="url(#plane-gradient)" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <path d="M22 2L11 13V20L15 15" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="plane-gradient" x1="2" y1="12" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-brand-orange-dark)" />
              <stop offset="1" stopColor="var(--color-brand-orange)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default PaperPlane;
