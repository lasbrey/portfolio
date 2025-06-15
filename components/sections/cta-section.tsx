"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NameCard } from '@/components/ui/namecard';

export function CtaSection() {

  return (
    <section className="bg-foreground text-white py-20" >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Main Call to Action Text */}
        <motion.div
          className="lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-normal leading-tight mb-8">
            Let's create
            <br />
            something
            <br />
            extraordinary
            <br />
            together<span className='text-lime-400'>.</span>
          </h2>
          <p className="text-xl text-white/70 font-medium">
            Let's make an impact
          </p>
        </motion.div>

        {/* Right Column: Contact Details and Profile */}
        <motion.div
          className="lg:p-8 md:p-12 lg:ml-auto lg:w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Profile Section */}
          <NameCard />

          {/* Contact Information */}
          <div className="mb-10">
            <span className="text-sm text-white/60 font-medium uppercase tracking-wider mb-2 block">
              Contact me
            </span>
            <a
              href="mailto:hello@lasbrey.dev"
              className="text-3xl md:text-4xl font-semibold block hover:pl-4 duration-700 transition"
            >
              hello<span className='text-lime-400'>@</span>lasbrey.dev
            </a>
            <p className="text-base text-white/70 mt-4 leading-relaxed">
              Hit me up if you're looking for a fast, reliable web-designer who can bring your vision to life
            </p>
          </div>

          {/* Book a Call Button */}
          <a
            href="#book-a-call"
            className="inline-flex items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 hover:shadow-none transition-colors group shadow-lime-400/50 shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-400/50"
          >
            Book a call
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}