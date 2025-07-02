"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import projectsData from '@/data/projects.json';

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(2); // State to track how many projects are visible
    const projectsToShowIncrement = 3; // Number of projects to show when "Show More" is clicked

    const handleShowMore = () => {
        setVisibleProjects((prevVisibleProjects) =>
            Math.min(prevVisibleProjects + projectsToShowIncrement, projectsData.projects.length)
        );
    };

    return (
        <section className="py-20 px-4 md:px-8 pt-10 lg:pt-60">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-md text-gray-500 font-medium">My recent projects</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900">
                        Selected work
                    </h2>
                </motion.div>

                {/* Displaying a subset of projects based on `visibleProjects` state */}
                {projectsData.projects.slice(0, visibleProjects).map((project) => (
                    <motion.div
                        key={project.id}
                        className="overflow-hidden p-6 lg:p-10 mb-16"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[650px] mb-8 rounded-2xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
                            <div className="lg:w-3/4">
                                <div className="flex items-center space-x-4 mb-4 text-gray-600 text-md font-medium">
                                    <span>[ {project.category} ]</span>
                                    <span>{project.date}</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-8 lg:mt-0 lg:ml-auto">
                                <Link
                                    href={`/projects/work?id=${project.id}`}
                                    className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-700 transition-colors group"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Show More Button */}
                {visibleProjects < projectsData.projects.length && (
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={handleShowMore}
                            className="inline-flex items-center bg-green-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
                        >
                            Show More Projects
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}