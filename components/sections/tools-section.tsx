"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Figma, Framer, Box, Feather, Zap, Code, Database, Cloud, Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const toolsData = [
  {
    name: 'Framer',
    description: 'No-code website builder',
    percentage: 80,
    icon: <Framer className="h-8 w-8 text-[#0055FF]" />,
  },
  {
    name: 'Figma',
    description: 'Leading collaborative design tool',
    percentage: 90,
    icon: <Figma className="h-8 w-8 text-[#FF7262]" />,
  },
  {
    name: 'React',
    description: 'JavaScript library for UIs',
    percentage: 95,
    icon: <Zap className="h-8 w-8 text-blue-400" />,
  },
  {
    name: 'Next.js',
    description: 'React framework for production',
    percentage: 90,
    icon: <Code className="h-8 w-8 text-gray-800" />,
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript superset',
    percentage: 85,
    icon: <Box className="h-8 w-8 text-blue-500" />,
  },
  {
    name: 'Node.js',
    description: 'Runtime environment for JS',
    percentage: 80,
    icon: <Feather className="h-8 w-8 text-green-500" />,
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database',
    percentage: 75,
    icon: <Database className="h-8 w-8 text-green-700" />,
  },
  {
    name: 'PostgreSQL',
    description: 'Relational database',
    percentage: 70,
    icon: <Database className="h-8 w-8 text-blue-700" />,
  },
  {
    name: 'AWS',
    description: 'Cloud computing services',
    percentage: 70,
    icon: <Cloud className="h-8 w-8 text-orange-500" />,
  },
  {
    name: 'Vercel',
    description: 'Platform for frontend developers',
    percentage: 90,
    icon: <Globe className="h-8 w-8 text-black" />,
  }
];

export function ToolSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const toolsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const toolsGrid = toolsGridRef.current;

    if (section && header && toolsGrid) {
      const toolCards = toolsGrid.querySelectorAll('.tool-card');
      toolCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      ScrollTrigger.create({
        trigger: toolsGrid,
        start: 'top top',
        end: 'bottom bottom',
        pin: header,
        pinSpacing: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tools-skills"
      className="py-20 relative text-primary"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={headerRef} className="lg:sticky lg:top-20 lg:self-start lg:h-fit text-right">
            <div className="flex items-center space-x-2 mb-8 justify-end">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-md font-medium">[02] — Tools & Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-[80px] font-normal leading-tight">
              My creative
              <br />
              toolbox
            </h2>
          </div>

          <div ref={toolsGridRef} className="grid grid-cols-1 gap-6">
            {toolsData.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="tool-card bg-white p-6 rounded-xl shadow-md flex items-start"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mr-4 mt-1">
                  {tool.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-md font-medium text-gray-500 mb-4">{tool.description}</p>

                  <div className="relative w-full h-2 rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-lime-400"
                      style={{ width: `${tool.percentage}%` }}
                    ></div>

                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 py-1 px-2 rounded-full bg-lime-400 flex items-center justify-center text-black text-xs font-semibold shadow-md z-10"
                      style={{ left: `${tool.percentage}%` }}
                    >
                      {tool.percentage}%
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}