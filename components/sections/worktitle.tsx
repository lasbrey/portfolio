"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Worktitle() {
    return (
        <motion.div
            className="pt-20 lg:pt-40 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900">
                EchoStream Entertainment
            </h2>
        </motion.div>
    )
}
