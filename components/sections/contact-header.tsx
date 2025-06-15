"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export function AboutContactHeader() {

    return (
        <section id="about" className="bg-gray-100 text-gray-900 pt-20 px-4 md:px-8 lg:pt-60">
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
                        <span className="text-sm text-gray-600 font-medium">Available for freelance work</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900">
                        About me
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}