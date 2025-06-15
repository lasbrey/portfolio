"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOutLoader, setFadeOutLoader] = useState(false);

  useEffect(() => {
    const loaderDisplayDuration = 2000;

    const startFadeOutDelay = 1500;

    const timerFadeOut = setTimeout(() => {
      setFadeOutLoader(true);
    }, startFadeOutDelay);

    const timerUnmount = setTimeout(() => {
      setLoading(false);
    }, loaderDisplayDuration);

    return () => {
      clearTimeout(timerFadeOut);
      clearTimeout(timerUnmount);
    };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOutLoader ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 text-gray-900"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Lasbrey
        </motion.h1>

        <div className="w-40 h-2 bg-gray-300 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-lime-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
}