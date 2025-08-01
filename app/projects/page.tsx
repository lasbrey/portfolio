"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Calendar, MapPin, Building, Image as ImageIcon } from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(projectsData.projects.map(project => project.category)))];

    // Filter projects based on category and search
    const filteredProjects = projectsData.projects.filter(project => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const displayedProjects = filteredProjects.slice(0, visibleProjects);

    const handleShowMore = () => {
        setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setVisibleProjects(6);
    };

    const handleImageError = (projectId: string) => {
        setImageErrors(prev => new Set(prev).add(projectId));
    };

    const getDefaultImage = (project: any) => {
        // Create a gradient background based on project category
        const categoryColors: { [key: string]: string } = {
            'Social Platform': 'from-blue-500 to-purple-600',
            'Smart Health Monitoring': 'from-green-500 to-teal-600',
            'Data Payment App': 'from-orange-500 to-red-600',
            'Credit Scoring API': 'from-indigo-500 to-blue-600',
            'AI-Powered Playground': 'from-purple-500 to-pink-600',
            'Voice Payment App': 'from-yellow-500 to-orange-600',
            'Video Communication Platform': 'from-cyan-500 to-blue-600',
            'Company Directory Platform': 'from-gray-500 to-gray-700'
        };

        const gradientClass = categoryColors[project.category] || 'from-gray-400 to-gray-600';
        
        return (
            <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                <div className="text-center text-white">
                    <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-80" />
                    <div className="text-lg font-semibold">{project.title}</div>
                    <div className="text-sm opacity-80">{project.category}</div>
                </div>
            </div>
        );
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4 md:px-8 pt-10 lg:pt-60">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-md text-gray-500 font-medium">Portfolio</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900 mb-6">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects showcasing my expertise in web development, mobile apps, and innovative solutions.
                    </p>
                </motion.div>

                {/* Search and Filter Section */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Search Bar */}
                    <div className="max-w-md mx-auto mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="text-center text-gray-500 mb-8">
                        Showing {displayedProjects.length} of {filteredProjects.length} projects
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        {imageErrors.has(project.id) ? (
                                            getDefaultImage(project)
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                                onError={() => handleImageError(project.id)}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        {/* Project Meta */}
                                        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Building className="w-4 h-4" />
                                                <span>{project.company}</span>
                                            </div>
                                        </div>

                                        {/* Project Title */}
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Project Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                    +{project.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Project Highlights */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Highlights:</h4>
                                            <ul className="space-y-1">
                                                {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="text-xs text-gray-600 flex items-start">
                                                        <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Button */}
                                        <Link
                                            href={`/projects/work?id=${project.id}`}
                                            className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-all duration-300 group-hover:bg-green-600 group-hover:shadow-lg group-hover:shadow-green-500/30"
                                        >
                                            View Project
                                            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More Button */}
                {visibleProjects < filteredProjects.length && (
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            onClick={handleShowMore}
                            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1"
                        >
                            Load More Projects
                            <span className="ml-2 text-sm opacity-75">
                                ({filteredProjects.length - visibleProjects} remaining)
                            </span>
                        </button>
                    </motion.div>
                )}

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No projects found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}