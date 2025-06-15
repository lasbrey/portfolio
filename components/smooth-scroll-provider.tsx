"use client";
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;
    const initializeScroll = () => {
      if (scrollRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: scrollRef.current,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          },
        });

      }
    };

    const timer = setTimeout(initializeScroll, 100);
    return () => {
      clearTimeout(timer);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}