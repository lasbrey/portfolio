"use client";

import { motion } from 'framer-motion';
import React from 'react';

const statsData = [
  {
    value: '95+',
    description: 'Percent customer satisfaction',
    bgColor: 'bg-[#98FF00]',
    textColor: 'text-black',
    shape: (
      <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#B2FF33] opacity-30 blur-xl"></div>
    ),
  },
  {
    value: '10+',
    description: 'Years of experience',
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    shape: (
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
        <svg className="w-full h-auto text-gray-700 opacity-20" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,100 L50,60 L100,100 Z" />
        </svg>
      </div>
    ),
  },
  {
    value: '24+',
    description: 'Projects completed',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    shape: (
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden">
        <svg className="w-2/3 h-2/3 text-gray-200 opacity-50" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none">
          <polygon points="50,0 100,50 50,100 0,50" />
        </svg>
      </div>
    ),
  },
];

export function StatsSection() {
  return (
    <section className="bg-foreground py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.value}
              className={`relative p-8 md:p-10 rounded-2xl overflow-hidden flex flex-col justify-between items-start h-[250px] md:h-[300px] ${stat.bgColor} ${stat.textColor}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {stat.shape}
              <div className="relative z-10">
                <h3 className="text-6xl md:text-7xl font-light leading-none mb-2">
                  {stat.value}
                </h3>
                <p className="text-xl md:text-2xl font-medium opacity-80">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}