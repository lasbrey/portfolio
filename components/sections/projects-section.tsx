"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: 'SilverLynx Technologies',
    category: 'Pottery artist portfolio',
    date: '5/31/24',
    description: 'Web design & Web development',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Evergreen Solutions',
    category: 'Artist Portfolio',
    date: '8/8/24',
    description: 'Web design & Web development',
    image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'EchoStream Entertainment',
    category: 'Mobile app',
    date: '6/20/24',
    description: 'UI/UX design',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'PulseTech Innovations',
    category: 'Boutique E-commerce Store',
    date: '7/13/24',
    description: 'Web design & Web development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    if (section) {
      const projectCards = section.querySelectorAll('.project-card');

      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-foreground text-white font-medium"
      data-scroll-section
    >
      <motion.div
        className="mb-16 max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-md text-white/70 font-light"> [01]— Featured projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-12">
          I blend creativity with<br />
          technical expertise
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 transition-colors group shadow-lime-400/50 shadow-xl hover:shadow-none focus:outline-none focus:ring-4 focus:ring-lime-400/50"
        >
          Become a client
          <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <Card
            key={project.title}
            className="border border-[#282828]  project-card overflow-hidden group hover:shadow-2xl transition-all duration-300 p-5 hover:bg-primary cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-400 font-light">
                  <span className="text-green-500">{`[ ${project.category} ]`}</span>
                  <span>{project.date}</span>
                </div>

                <h3 className="text-2xl font-normal text-white group-hover:text-green-400 transition-colors mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-base font-light mt-1">
                  {project.description}
                </p>
              </div>
            </CardContent>
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-96 rounded-md object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.slice(2, 4).map((project) => (
          <Card
            key={project.title}
            className="border border-[#282828]  project-card overflow-hidden group hover:shadow-2xl transition-all duration-300 p-5 hover:bg-primary cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-400 font-light">
                  <span className="text-green-500">{`[ ${project.category} ]`}</span>
                  <span>{project.date}</span>
                </div>

                <h3 className="text-2xl font-normal text-white group-hover:text-green-400 transition-colors mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-base font-light mt-1">
                  {project.description}
                </p>
              </div>
            </CardContent>
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-72 rounded-md object-cover transition-transform duration-500"
                loading="lazy"
              />
            </div>

          </Card>
        ))}
        <Card className="p-5 hover:p-0 cursor-pointer min-h-[400px] border border-[#282828] ">
          <Link href="projects">
            <div className='bg-[#A7F300] hover:rounded-none rounded-md project-card p-5 text-foreground overflow-hidden group hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-h-full'>
              <CardContent className="p-8 text-center">
                <div
                  className="text-foreground rounded-full px-8 py-6 text-base font-medium flex items-center justify-center"
                >
                  View all projects
                  <div className='bg-forground '>
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </CardContent>
            </div>
          </Link>

        </Card>

      </div>
    </section>
  );
}