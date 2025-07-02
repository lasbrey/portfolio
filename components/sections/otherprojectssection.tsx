"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import projectsData from '@/data/projects.json';

interface OtherProjectsSectionProps {
    currentProjectId: string;
}

export function OtherProjectsSection({ currentProjectId }: OtherProjectsSectionProps) {
    const otherProjects = projectsData.projects
        .filter(project => project.id !== currentProjectId)
        .slice(0, 3);

    return (
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-500 font-medium">More projects</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-gray-900">
                        Other work
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="overflow-hidden border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href={`/projects/work?id=${project.id}`}>
                                {/* Project Image */}
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-6 flex flex-col">
                                    <div className="mb-6 flex-grow space-y-3">
                                        <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                                            <span>[ {project.category} ]</span>
                                            <span>{project.company}</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-900 leading-tight group-hover:text-lime-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-base text-gray-600 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-700 transition-colors group"
                    >
                        View All Projects
                        <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}