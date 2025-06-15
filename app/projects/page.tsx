"use client";

import React from 'react';
import { motion } from 'framer-motion';


const featuredProject = [
    {
        category: 'Mobile app',
        date: 'Jun 20, 2024',
        title: 'EchoStream Entertainment',
        description: 'Interface is streamlined for ease of navigation, with clean layouts',
        image: 'https://framerusercontent.com/images/Hf6jnmXgx83Hv4wqxOCx6V5zaU.jpg?scale-down-to=4096',
    },
    {
        category: 'E-commerce',
        date: 'Feb 20, 2025',
        title: 'PulseTech Innovations',
        description: 'Result: 200% increase in online sales within the first quarter',
        image: 'https://framerusercontent.com/images/ZB6UoOHkk9rIorhxI6xU88xLt0.jpg?lossless=1',
    },
]

export default function Projects() {
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

                {featuredProject.map((projects) => (
                    <motion.div
                        className="overflow-hidden p-6 lg:p-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className=" relative w-full h-[300px] md:h-[450px] lg:h-[550px] xl:h-[650px] mb-8 rounded-2xl overflow-hidden">
                            <img
                                src={projects.image}
                                alt={projects.title}
                                className="w-full h-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
                            <div className="lg:w-3/4">
                                <div className="flex items-center space-x-4 mb-4 text-gray-600 text-md font-medium">
                                    <span>[ {projects.category} ]</span>
                                    <span>{projects.date}</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                                    {projects.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {projects.description}
                                </p>
                            </div>

                            <div className="mt-8 lg:mt-0 lg:ml-auto">
                                <a
                                    href="projects/work"
                                    className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-700 transition-colors group">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}