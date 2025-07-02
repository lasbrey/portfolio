"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface WorkbodyProps {
    project: {
        id: string;
        title: string;
        category: string;
        date: string;
        description: string;
        image: string;
        technologies: string[];
        company: string;
        location: string;
        role: string;
        highlights: string[];
        challenges?: string[];
    };
}

export function Workbody({ project }: WorkbodyProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const leftSidebarRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const sectionContainer = sectionRef.current;
        const leftSidebar = leftSidebarRef.current;
        const rightContent = rightContentRef.current;

        if (sectionContainer && leftSidebar && rightContent && window.innerWidth > 768) {
            ScrollTrigger.getAll().forEach(st => st.kill());
            
            ScrollTrigger.create({
                trigger: sectionContainer,
                start: 'top top',
                end: 'bottom bottom',
                pin: leftSidebar,
                pinSpacing: false,
            });

            gsap.utils.toArray(rightContent.children).forEach((child) => {
                gsap.fromTo(
                    child as HTMLElement,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: child as HTMLElement,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-100 py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left Sidebar (Sticky on larger screens) */}
                <div
                    ref={leftSidebarRef}
                    className="lg:col-span-1 lg:sticky lg:top-20 lg:h-fit lg:self-start"
                >
                    <div className="space-y-6 mb-10 pt-10">
                        {/* Role */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-1">Role</span>
                            <p className="text-lg font-semibold text-gray-900">{project.role}</p>
                        </div>
                        
                        {/* Company */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-1">Company</span>
                            <p className="text-lg font-semibold text-gray-900">{project.company}</p>
                        </div>
                        
                        {/* Location */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-1">Location</span>
                            <p className="text-lg font-semibold text-gray-900">{project.location}</p>
                        </div>

                        {/* Technologies */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-2">Technologies</span>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-lime-400 text-black text-sm rounded-full font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* View Project Button */}
                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-lime-300 transition-colors group"
                    >
                        View Project
                        <ExternalLink className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </div>

                {/* Right Content Area (Scrolling) */}
                <div ref={rightContentRef} className="lg:col-span-2 space-y-10">
                    {/* Project Image */}
                    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[650px] rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                    </div>

                    {/* Project Description */}
                    <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            Project Overview
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            Key Achievements
                        </h3>
                        <ul className="space-y-4">
                            {project.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-lime-400 mr-3 mt-1 text-lg leading-none">•</span>
                                    <p className="text-lg text-gray-700 leading-relaxed">{highlight}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Challenges (if available) */}
                    {project.challenges && project.challenges.length > 0 && (
                        <div className="space-y-6">
                            <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                Challenges Solved
                            </h3>
                            <ul className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-red-400 mr-3 mt-1 text-lg leading-none">•</span>
                                        <p className="text-lg text-gray-700 leading-relaxed">{challenge}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}