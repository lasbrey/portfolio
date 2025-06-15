"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const creatorName = "Lasbrey Lawal";

    return (
        <footer className="bg-foreground text-white py-12 px-4 md:px-8 border-t border-[#282828]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center flex-shrink-0"
                >
                    <Layers className="h-6 w-6 text-lime-400 mr-2" />
                    <span className="text-xl font-bold">Lasbrey</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start text-sm text-white/70 flex-grow"
                >
                    <p className="mb-1">
                        Copyright &copy; Web Design and Development, {currentYear}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center flex-shrink-0"
                >
                    <span className="text-sm text-white/70 mr-2">Created by</span>
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img
                            src="https://placehold.co/32x32/A7F300/000000?text=LL" 
                            alt={creatorName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-sm font-medium">{creatorName}</span>
                </motion.div>
            </div>
        </footer>
    );
}