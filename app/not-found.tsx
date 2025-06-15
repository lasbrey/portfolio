"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; 
import Link from 'next/link'; 

const NotFound = () => {
  return (
       <section className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900 font-inter px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-xl mx-auto py-12"
            >
                {/* Main 404 Title */}
                <h1 className="text-8xl md:text-9xl lg:text-[80px] font-normal leading-none mb-6">
                    404<span className="text-lime-400">-</span>OOPS!
                </h1>

                {/* Page Not Found Message */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Page not found
                </h2>

                {/* Custom Message */}
                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                    Sorry, this page is out of my design grid
                </p>

                {/* To Homepage Button */}
                <Link
                    href="/"
                    className="inline-flex items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-lg
                     hover:bg-lime-300 transition-colors group
                     shadow-lg hover:shadow-lime-400/50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-400/50"
                >
                    To homepage
                    <ArrowUpRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </section>
  )
}

export default NotFound