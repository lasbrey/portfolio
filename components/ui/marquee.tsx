"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type MarqueeItem = {
  text: string;
  highlight: string;
};

interface MarqueeProps {
  items: MarqueeItem[];
}

export function Marquee({ items }: MarqueeProps) {
  const containerVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    },
  };

  const repeatedItems = [...items, ...items]; // For seamless looping

  return (
    <div className="w-full overflow-hidden bg-primary py-7 relative">
      <motion.div
        className="flex items-center whitespace-nowrap text-white"
        variants={containerVariants}
        animate="animate"
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="flex items-center text-lg md:text-xl lg:text-3xl font-semibold px-8 tracking-wide"
          >
            <Sparkles className="text-green-400 mx-3 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-white">
              <span className="text-green-400">{item.highlight}</span>
              {item.text.replace(item.highlight, '')}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
