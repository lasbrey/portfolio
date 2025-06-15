"use client";

import React from 'react';
import { motion } from 'framer-motion';

const otherProjectsData = [
  {
    category: 'Boutique E-commerce Store',
    date: '7/13/24',
    title: 'PulseTech Innovations',
    description: 'Web design & Web development',
    image: 'https://framerusercontent.com/images/axepF1LtSgXFCUPKabyiv1p0.jpg',
  },
  {
    category: 'Pottery artist portfolio',
    date: '5/31/24',
    title: 'SilverLynx Technologies',
    description: 'Web design & Web development',
    image: 'https://framerusercontent.com/images/ZB6UoOHkk9rIorhxI6xU88xLt0.jpg?lossless=1',
  },
  {
    category: 'Artist Portfolio',
    date: '8/8/24',
    title: 'Evergreen Solutions',
    description: 'Web design & Web development',
    image: 'https://framerusercontent.com/images/Hf6jnmXgx83Hv4wqxOCx6V5zaU.jpg?scale-down-to=4096',
  },
];

export function OtherProjectsSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 font-inter">
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
            <span className="text-sm text-gray-500 font-medium">Latest projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-gray-900">
            Some of my other stuff
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {otherProjectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="overflow-hidden border border-gray-100 p-6 flex flex-col cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 flex-grow space-y-5">
                <div className="flex items-center justify-between text-sm text-gray-500 font-medium mb-2">
                  <span>[ {project.category} ]</span>
                  <span>{project.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Image (Bottom of card) */}
              <div className="w-full h-48 rounded-lg overflow-hidden mt-auto"> {/* mt-auto pushes image to bottom */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
