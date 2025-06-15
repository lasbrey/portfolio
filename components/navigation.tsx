"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: "Projects", href: "projects" },
  { name: "About & Contact", href: "contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-transparent py-4 md:py-8">
      <div className="max-w-[1320px] mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-lime-400" />
            <h3 className="text-[rgb(47,47,47)] text-lg font-semibold whitespace-nowrap">Lasbrey</h3>
          </Link>
        </div>

        <nav className="hidden lg:flex gap-10 items-center mx-auto">
          <Link href="projects" className="text-primary hover:underline transition-colors font-semibold">
            Projects
          </Link>
          <Link href="contact" className="text-primary hover:underline transition-colors font-semibold">
            About & Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            Email:
            <a href="mailto:hello@lasbrey.dev" className="text-black font-semibold hover:underline whitespace-nowrap">
              hello@lasbrey.dev
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-[rgb(47,47,47)] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-gray-800 transition whitespace-nowrap"
          >
            Contact me
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-md text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-400 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="fixed right-0 top-0 h-full w-full bg-white shadow-lg p-6 flex flex-col justify-between rounded-l-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Layers className="h-7 w-7 text-lime-400" />
                  <h3 className="text-[rgb(47,47,47)] text-xl font-semibold">Lasbrey</h3>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-400 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 flex-grow">
                <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                  <Link
                    href="projects"
                    className="block text-primary text-xl font-semibold hover:text-lime-400 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                  <Link
                    href="contact"
                    className="block text-primary text-xl font-semibold hover:text-lime-400 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About & Contact
                  </Link>
                </motion.div>
              </nav>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                  <div className="flex items-center gap-3 text-lg text-gray-700 mb-4">
                    Email:
                    <a href="mailto:hello@lasbrey.dev" className="hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
                      hello@lasbrey.dev
                    </a>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                  <Link
                    href="/contact"
                    className="w-full flex justify-center items-center bg-[rgb(47,47,47)] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-800 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
