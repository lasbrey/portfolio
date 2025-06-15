"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const projectData = {
    services: 'UI/UX design',
    category: 'Mobile app',
    client: 'Stonks inc.',
    websiteLink: '#',
    sections: [
        {
            type: 'text', 
            heading: null, 
            content: `The goal was to create a modern, elegant, and user-friendly website that
                    would not only attract potential clients but also provide a seamless online
                    experience, showcasing the studio and allowing customers to book
                    appointments and explore services.`,
        },
        {
            type: 'text',
            heading: null, 
            content: `I'm passionate about empowering creators with no-code web design tools.
                     My mission is to bring your digital visions to life quickly and effectively.`,
        },
        {
            type: 'image',
            src: 'https://framerusercontent.com/images/ZB6UoOHkk9rIorhxI6xU88xLt0.jpg',
            alt: 'MacBook Air Mockup',
        },
        {
            type: 'text',
            heading: 'Stunning results',
            content: `This project involved the complete design and development of a bespoke website for a luxury
                tailoring studio. The goal was to create a digital experience that reflects the studio's commitment
                to craftsmanship, quality, and personalized service, while also offering a seamless user
                experience.
                The project began with an in-depth consultation to understand the brand's identity, target
                audience, and unique selling points. We focused on creating a visually stunning and intuitive
                design that would resonate with the high-end clientele.`,
        },
        {
            type: 'image',
            src: 'https://framerusercontent.com/images/Hf6jnmXgx83Hv4wqxOCx6V5zaU.jpg?scale-down-to=4096', 
            alt: 'MacBook Pro Mockup',
        },
        {
            type: 'text',
            heading: 'But with risks',
            content: `The goal was to create a modern, elegant, and user-friendly website that would not only attract
                potential clients but also provide a seamless online experience, showcasing the studio's
                expertise and allowing customers to easily book appointments and explore services.`,
        },
    ],
};

export function Workbody() {

    const sectionRef = useRef<HTMLElement>(null);
    const leftSidebarRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') return;

        const sectionContainer = sectionRef.current;
        const leftSidebar = leftSidebarRef.current;
        const rightContent = rightContentRef.current;

        if (sectionContainer && leftSidebar && rightContent) {
            ScrollTrigger.getAll().forEach(st => st.kill());
            ScrollTrigger.create({
                trigger: sectionContainer, 
                start: 'top top', 
                end: `bottom bottom`, 
                pin: leftSidebar,
                pinSpacing: false,
            });

            // GSAP animation for right content sections
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
                            start: 'top 80%', // Triggers animation when child is 80% from top
                            toggleActions: 'play none none reverse',
                            // markers: true // Uncomment to see individual child triggers
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
        <section ref={sectionRef} className="bg-gray-100 py-20 px-4 md:px-8 font-inter">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left Sidebar (Sticky on larger screens) */}
                <div
                    ref={leftSidebarRef} // Correctly reference the left sidebar for pinning
                    className="lg:col-span-1 lg:sticky lg:top-0 lg:h-fit lg:self-start" // Adjusted top-0 based on previous discussion
                >
                    {/* The mainDescription and missionStatement paragraphs are REMOVED from here */}
                    {/* They are now part of the projectData.sections and will render in the right column */}

                    <div className="space-y-6 mb-10 pt-10"> {/* Added pt-10 for top spacing */}
                        {/* Services - Added bottom border and padding */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-1">Services</span>
                            <p className="text-lg font-semibold text-gray-900">{projectData.services}</p>
                        </div>
                        {/* Category - Added bottom border and padding */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-1">Category</span>
                            <p className="text-lg font-semibold text-gray-900">{projectData.category}</p>
                        </div>
                        {/* Client - Added bottom border and padding */}
                        <div className="pb-4 border-b border-gray-300">
                            <span className="block text-sm text-gray-500 uppercase font-medium mb-1">Client</span>
                            <p className="text-lg font-semibold text-gray-900">{projectData.client}</p>
                        </div>
                    </div>

                    {/* Visit Website Button */}
                    <motion.a
                        href={projectData.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-base
                       hover:bg-lime-300 transition-colors group"
                    >
                        Visit website
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </div>

                {/* Right Content Area (Scrolling) */}
                <div ref={rightContentRef} className="lg:col-span-2 space-y-10">
                    {/* Render sections from projectData.sections */}
                    {projectData.sections.map((section, index) => (
                        <React.Fragment key={index}>
                            {section.type === 'image' && (
                                <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[650px] rounded-2xl overflow-hidden shadow-md">
                                    <img
                                        src={section.src}
                                        alt={section.alt}
                                        className="w-full h-full object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            {section.type === 'text' && (
                                <div className="space-y-6">
                                    {section.heading && ( // Only render heading if it exists
                                        <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                            {section.heading}
                                        </h3>
                                    )}
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}