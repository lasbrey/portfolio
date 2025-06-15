// components/ProcessSection.tsx
"use client"; // Added as per your old code's pattern, for potential future client-side interactivity

import { useEffect, useRef } from 'react'; // Keep for potential GSAP/Framer Motion integration
import { motion } from 'framer-motion'; // Keep for potential Framer Motion integration
import { gsap } from 'gsap'; // Keep for potential GSAP integration
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Keep for potential ScrollTrigger integration

// Ensure GSAP plugins are registered only in the browser environment
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Data for the process steps
const processSteps = [
    {
        category: 'Discovery',
        number: '01',
        title: "We'll dive deep into your personal goals and long-term vision",
        points: [
            'Initial Consultation: Understand the client’s vision, goals, and target audience.',
            'Research: Analyze competitors and industry trends to gather insights.',
            'Define Scope: Set the project’s objectives, deliverables, and timelines.',
        ],
        timeEstimate: '3-5 days',
    },
    {
        category: 'Design',
        number: '02',
        title: "I'll create mockups that bring your brand to life",
        points: [
            'Wireframing: Create low-fidelity wireframes to map out the site’s structure.',
            'Style Guide Creation: Develop a design language including colors, fonts, and UI elements.',
            'Prototype Development: Build clickable prototypes for client feedback.',
            'Finalize Design: Approve the final design with detailed mockups for all pages.',
        ],
        timeEstimate: '1-2 weeks',
    },
    {
        category: 'Build',
        number: '03',
        title: "Using no-code tools, I'll construct your site",
        points: [
            'Page Construction: Build out the website structure using selected tools.',
            'Content Integration: Import and format content (text, images, videos).',
            'Basic SEO Setup: Optimize on-page elements for search engines.',
        ],
        timeEstimate: '1 week',
    },
    {
        category: 'Launch',
        number: '04',
        title: "Your site goes live, ready to make an impact",
        points: [
            'Client Review: Present the site to the client for feedback.',
            'Revisions: Make necessary changes based on client feedback.',
        ],
        timeEstimate: '2-3 days',
    },
];
export function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const processStepsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const section = sectionRef.current;
        const header = headerRef.current;
        const processStepsContainer = processStepsContainerRef.current;

        if (section && header && processStepsContainer) {
            ScrollTrigger.getAll().forEach(st => st.kill());
            const stepCards = processStepsContainer.querySelectorAll('.process-step-card');
            gsap.fromTo(
                stepCards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15, // Stagger each step's animation
                    scrollTrigger: {
                        trigger: processStepsContainer, // Trigger when the container enters view
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            ScrollTrigger.create({
                trigger: processStepsContainer,
                start: 'top top',
                end: 'bottom bottom',
                pin: header, // Pin the 'How it works' header
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
            id="how-it-works"
            className="bg-foreground text-white py-20"
            data-scroll-section
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div ref={headerRef} className="mb-16">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-md font-medium">[03] — Process</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight">
                        How it works
                    </h2>
                </div>

                <div ref={processStepsContainerRef} className="space-y-16">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="process-step-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start justify-center col-span-2">
                                <span className="py-2 px-4 rounded-full border border-gray-700 text-sm font-medium mr-4 mb-4 md:mb-0 lg:mb-4 w-fit">
                                    {step.category}
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start col-span-2">
                                <span className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tighest">
                                    <span className='text-lime-400'>/</span> {step.number}
                                </span>
                            </div>

                            <div className="col-span-7">
                                <h3 className="text-2xl font-semibold mb-6 leading-snug">
                                    {step.title}
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    {step.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start">
                                            <span className="text-lime-400 mr-3 mt-1 text-lg leading-none">*</span>
                                            <p>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-span-1 md:text-right lg:text-left md:mt-0 mt-4">
                                <span className="text-sm text-white/50 whitespace-nowrap">
                                    {step.timeEstimate}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}