"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Dribbble, ArrowRight, Github, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export function AboutContactBody() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const mainContentGridRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Message sent! (Check console for data)');
        setFormData({ name: '', email: '', message: '' });
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const section = sectionRef.current;
        const headerToPin = leftColumnRef.current;
        const pinTriggerContainer = mainContentGridRef.current;
        if (section && headerToPin && pinTriggerContainer && window.innerWidth > 768) {
            ScrollTrigger.getAll().forEach(st => st.kill());

            ScrollTrigger.create({
                trigger: pinTriggerContainer,
                start: 'top top',
                end: 'bottom bottom',
                pin: headerToPin,
                pinSpacing: false,
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (    
        <section id="about" className="bg-gray-100 text-gray-900 px-4 md:px-8 lg:pb-20 pb-10">
            <div className="max-w-7xl mx-auto">

                <div ref={mainContentGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <motion.div
                        ref={leftColumnRef} 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:items-start lg:sticky lg:top-20 lg:h-fit lg:self-start"
                    >
                         <div className="w-44 rounded-full overflow-hidden mb-6"> 
                            <img
                                src="/images/user-profile.png"
                                alt="Lazarus Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex space-x-3 mb-6">
                                <a href="https://github.com/lazarusosilawal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-400">
                                    <Github className="h-5 w-5 text-black" />
                                </a>
                                <a href="https://www.linkedin.com/in/lawal-lazarus/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-400">
                                    <Linkedin className="h-5 w-5 text-black" />
                                </a>
                                <a href="https://x.com/lasbreylawal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-400">
                                    <Twitter className="h-5 w-5 text-black" />
                                </a>
                            </div>

                            <a href="mailto:lazarusosilawal@gmail.com" className="text-xl font-medium text-gray-900 hover:underline mb-4">
                                lazarusosilawal@gmail.com
                            </a>

                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                I'm Lazarus, a passionate software developer with expertise in creating user-friendly web and mobile applications.
                            </p>

                            <a
                                href="#book-a-call"
                                className="inline-flex items-center bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-base
                                     hover:bg-lime-300 transition-colors group"
                            >
                                Book a call
                                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-700 leading-relaxed space-y-6"
                        >
                            <p className='font-semibold'>
                                Hi, I'm Lazarus, a results-driven software developer passionate about creating user-friendly web and mobile applications. 
                                With expertise in React Native, Next.js, and Node.js, plus experience in Kotlin and Swift, I specialize in building 
                                scalable solutions that solve real-world problems.
                            </p>
                            <p>
                                Over the years, I've had the opportunity to work with diverse clients and companies, from startups to established 
                                organizations like Celebut and Nigeria Communication Satellite Limited, helping them bring their digital visions to life.
                            </p>
                            <p>
                                My experience spans frontend engineering, full-stack development, mobile app development, and AI/ML projects. 
                                I'm committed to delivering clean, scalable code and enhancing user experience through collaboration and continuous learning.
                            </p>
                            <p className='font-semibold'>
                                Let's create something amazing together!
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100"
                        >
                            <h3 className="text-2xl font-semibold mb-8">Let's get in touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none transition-all placeholder-gray-500 text-gray-900"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none transition-all placeholder-gray-500 text-gray-900"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Leave me a message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Leave me a message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:border-lime-400 outline-none transition-all resize-y placeholder-gray-500 text-gray-900"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-base
                                 hover:bg-gray-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}