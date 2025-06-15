"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const circleVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20
        }
    }
};

const profilePicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.4
        }
    }
};
export function NameCard() {
    const circleSize = '90px'; 
    const halfCircleWidth = '45px'; 
    const borderRadiusFull = '45px'; 
    const borderRadiusRightHalf = '0 45px 45px 0'; 

    const darkBrown = 'rgb(38, 34, 22)';
    const lightBrown = 'rgb(56, 50, 31)';
    return (
        <div className="flex items-center mb-10">
            <div className="rounded-full overflow-hidden mr-4">
                <motion.div
                    className="relative w-[135px] h-[90px] flex items-center justify-center" 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="absolute z-10" 
                        style={{
                            width: halfCircleWidth, 
                            height: circleSize,
                            backgroundColor: darkBrown,
                            right: '45px', 
                            borderRadius: borderRadiusRightHalf 
                        }}
                        variants={circleVariants}
                    />

                    <motion.div
                        className="absolute z-20"
                        style={{
                            width: halfCircleWidth, 
                            height: circleSize,
                            backgroundColor: darkBrown,
                            right: '30px', 
                            borderRadius: borderRadiusRightHalf 
                        }}
                        variants={circleVariants}
                    />

                    <motion.div
                        className="absolute z-30"
                        style={{
                            width: halfCircleWidth, 
                            height: circleSize,
                            backgroundColor: lightBrown,
                            right: '15px', 
                            borderRadius: borderRadiusRightHalf 
                        }}
                        variants={circleVariants}
                    />

                    {/* Profile Picture: On top, at the rightmost position */}
                    <motion.div
                        className="absolute rounded-full overflow-hidden z-40"
                        style={{ width: circleSize, height: circleSize, borderRadius: borderRadiusFull, right: '0px' }}
                        variants={profilePicVariants}
                    >
                        <img
                            decoding="async"
                            loading="lazy"
                            width="270"
                            height="270"
                            sizes="90px"
                            src="https://framerusercontent.com/images/pB05kmC43Cy1Y9VOuwLRBmbNY.jpg"
                            alt="Profile"
                            className="block w-full h-full object-center object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div>
                <h3 className="text-xl font-semibold">Lasbrey Lawal</h3>
                <p className="text-sm ">Web-designer, developer</p>
                <div className="flex space-x-2 mt-2">
                    <Twitter className="h-5 w-5 transition-colors cursor-pointer" />
                    <Instagram className="h-5 w-5 transition-colors cursor-pointer" />
                    <Linkedin className="h-5 w-5 transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
