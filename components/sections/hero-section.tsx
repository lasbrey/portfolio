"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NameCard } from '../ui/namecard';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="flex pt-10 lg:pt-60 max-w-7xl mx-auto font-medium px-6 lg:px-8">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className='col-span-1 py-10'>
          <NameCard />
        </div>

        <motion.div
          className="col-span-2 flex flex-col justify-between py-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 text-xs font-light text-green-600 bg-green-50 px-2 py-1 rounded-full w-fit mb-4">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>Available for freelance</span>
          </div>

          <div className="text-4xl md:text-6xl lg:text-[80px] leading-none font-medium tracking-tightest text-primary">
            <span className="block mb-2">
              Hi! I'm{" "}
              <span className="inline-block bg-white text-2xl md:text-[42px] p-2 md:p-4 rounded-md transform -rotate-1 origin-bottom-left whitespace-nowrap">
                Lazarus Lawal
              </span>
            </span>
            <span className="block mb-2">
              a{" "}
              <span className="inline-block bg-foreground text-white text-2xl md:text-[42px] p-2 md:p-4 rounded-md transform -rotate-2 origin-bottom-left leading-none">
                Software Developer
              </span>{' '}
              from{' '}
              <span className="inline-block border border-foreground text-2xl md:text-[42px] p-2 md:p-4 rounded-full transform rotate-1 origin-bottom-right whitespace-nowrap">
                Nigeria
              </span>
            </span>
            <span className="block mb-2">turning your ideas into</span>
            <span className="block">pixel-perfect realities</span>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 flex flex-col py-10 px-6 border-r border-gray-100 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* (2017 - PRESENT) text */}
          <p className="text-xl text-black font-semibold">
            (2017 – PRESENT)
          </p>
        </motion.div>

        <motion.div
          className="col-span-2 flex flex-col justify-between py-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          {/* Description */}
          <p className="text-xl text-[#6b6b6b] mb-10">
            Results-driven software developer passionate about creating user-friendly web and mobile applications. 
            Proficient in React Native, Next.js, and Node.js, with experience in Kotlin and Swift.
          </p>

          {/* See what I can do button */}
          <Link href="/contact"
            className="inline-flex self-start items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 transition-colors group shadow-lime-400/50 shadow-xl hover:shadow-none focus:outline-none focus:ring-4 focus:ring-lime-400/50"
          >
            <span>See what I can do</span>
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}