"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Palette, Calculator, Hash, Clock, MessageSquare, FileText, Braces, Type } from 'lucide-react';
import Link from 'next/link';

interface Tool {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl?: string;
  icon: React.ReactNode;
  category: string;
}

const tools: Tool[] = [
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills with ease. Perfect for restaurants and group dining.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '/tools/tip-calculator',
    icon: <Calculator className="w-6 h-6" />,
    category: 'Utility'
  },
  {
    id: 'duplicate-word-counter',
    name: 'Duplicate Word Counter',
    description: 'Analyze text and find duplicate words with frequency counts and statistics.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    demoUrl: '/tools/duplicate-word-counter',
    icon: <Hash className="w-6 h-6" />,
    category: 'Text Analysis'
  },
  {
    id: 'ai-chat-companion',
    name: 'AI Chat Companion',
    description: 'Interactive AI chat interface with conversation memory and multiple AI models.',
    technologies: ['React', 'OpenAI API', 'TypeScript'],
    demoUrl: '/tools/ai-chat-companion',
    icon: <MessageSquare className="w-6 h-6" />,
    category: 'AI'
  },
  {
    id: 'markdown-converter',
    name: 'Markdown to HTML Converter',
    description: 'Convert Markdown to HTML with live preview and syntax highlighting.',
    technologies: ['React', 'Marked.js', 'Prism.js'],
    demoUrl: '/tools/markdown-converter',
    icon: <FileText className="w-6 h-6" />,
    category: 'Developer'
  },
  {
    id: 'json-beautifier',
    name: 'JSON Beautifier & Validator',
    description: 'Format, validate, and beautify JSON with syntax highlighting and error detection.',
    technologies: ['JavaScript', 'Prism.js', 'HTML'],
    demoUrl: '/tools/json-beautifier',
    icon: <Braces className="w-6 h-6" />,
    category: 'Developer'
  },
  {
    id: 'glassmorphism-generator',
    name: 'CSS Glassmorphism Generator',
    description: 'Create beautiful glassmorphism effects with real-time CSS code generation.',
    technologies: ['React', 'CSS', 'JavaScript'],
    demoUrl: '/tools/glassmorphism-generator',
    icon: <Palette className="w-6 h-6" />,
    category: 'Design'
  },
  {
    id: 'text-to-hashtags',
    name: 'Text to Hashtags Tool',
    description: 'Convert text into relevant hashtags for social media optimization.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    demoUrl: '/tools/text-to-hashtags',
    icon: <Hash className="w-6 h-6" />,
    category: 'Social Media'
  },
  {
    id: 'read-time-estimator',
    name: 'Read Time Estimator',
    description: 'Calculate reading time for articles and content with customizable reading speeds.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '/tools/read-time-estimator',
    icon: <Clock className="w-6 h-6" />,
    category: 'Utility'
  }
];

const categories = ['All', ...Array.from(new Set(tools.map(tool => tool.category)).values())];

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8 pt-10 lg:pt-60">
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
            <span className="text-md text-gray-500 dark:text-gray-400 font-medium">Developer Tools</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900 dark:text-white mb-6">
            Web Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of useful web-based tools built with modern technologies. Each tool is designed to solve specific problems and improve productivity.
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
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Showing {filteredTools.length} of {tools.length} tools
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
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
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  {/* Tool Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                        {tool.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {tool.name}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{tool.category}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {tool.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6">
                    <div className="flex space-x-3">
                      <Link
                        href={tool.demoUrl}
                        className="flex-1 inline-flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-xl font-medium text-sm hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transform hover:-translate-y-1"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                      {tool.githubUrl && (
                        <Link
                          href={tool.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-3 rounded-xl font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🔧</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
} 