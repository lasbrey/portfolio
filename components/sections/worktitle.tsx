"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface WorktitleProps {
    project: {
        title: string;
        category: string;
        date: string;
        company: string;
        location: string;
    };
}

export function Worktitle({ project }: WorktitleProps) {
    return (
        <section className="pt-20 lg:pt-40 px-4 md:px-8">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4 text-gray-600 text-md font-medium">
                        <span>[ {project.category} ]</span>
                        <span>{project.date}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900 mb-4">
                        {project.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-lg text-gray-600">
                        <span>{project.company}</span>
                        <span>•</span>
                        <span>{project.location}</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}