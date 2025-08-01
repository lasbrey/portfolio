// components/sections/ContactSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, ArrowUpRight, Linkedin } from 'lucide-react';

// Data for the contact/social cards
const contactItems = [
    {
        name: 'Facebook',
        icon: <Facebook className="h-6 w-6 text-primary" />,
        link: 'https://web.facebook.com/lazarusosi.lawal',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
        iconBgColor: 'bg-lime-400',
    },
    {
        name: 'Twitter/X',
        icon: <Twitter className="h-6 w-6 text-primary" />,
        link: 'https://x.com/lasbreylawal',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
        iconBgColor: 'bg-lime-400',
    },
    {
        name: 'Instagram',
        icon: <Instagram className="h-6 w-6 text-primary" />,
        link: 'https://www.instagram.com/lasbreylawal/',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
        iconBgColor: 'bg-lime-400',
    },
    {
        name: 'Linkedin',
        icon: <Linkedin className="h-6 w-6 text-primary" />,
        link: 'https://www.linkedin.com/in/lawal-lazarus/',
        bgColor: 'bg-white',
        textColor: 'text-gray-900',
        iconBgColor: 'bg-lime-400',
    },
    {
        name: 'Get in touch',
        icon: <ArrowUpRight className="h-6 w-6 text-primary" />,
        link: 'mailto:lazarusosilawal@gmail.com',
        bgColor: 'bg-lime-400',
        textColor: 'text-black',
        iconBgColor: 'bg-lime-400',
    },
];

export function ContactSection() {
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-md text-gray-500 font-medium">[06] — Contact me</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-[80px] tracking-tightest font-normal leading-tight text-gray-900">
                        I'm all over the internet
                    </h2>
                </motion.div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contactItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative p-8 rounded-md flex flex-col justify-between overflow-hidden cursor-pointer
                          transition-all duration-300 group ${item.bgColor} ${item.textColor}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-20">
                                <span className="text-xl font-medium">
                                    {item.name}
                                </span>
                                <div className={`flex-shrink-0 p-3 float-right rounded-full transition-transform duration-300 ease-out group-hover:rotate-[180deg] ${item.iconBgColor}`}>
                                    {item.icon}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}