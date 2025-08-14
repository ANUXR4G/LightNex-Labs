'use client'; // For Next.js 13+ App Router

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

interface SmoothScrollProps {
  children: ReactNode;
  smooth?: number;
  effects?: boolean;
  smoothTouch?: number;
  ease?: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  children, 
  smooth = 1.5, 
  effects = true, 
  smoothTouch = 0.1,
  ease = "expo" 
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create ScrollSmoother instance
    if (wrapperRef.current && contentRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth,
        effects,
        smoothTouch,
        ease,
      });
    }

    // Cleanup function
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      ScrollTrigger.killAll();
    };
  }, [smooth, effects, smoothTouch, ease]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="bg-black">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
