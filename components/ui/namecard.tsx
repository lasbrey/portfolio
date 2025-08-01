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
               
            </div>

            <div>
                {/* <h3 className="text-xl font-semibold">Lasbrey Lawal</h3>
                <p className="text-sm ">Web-designer, developer</p>
                <div className="flex space-x-2 mt-2">
                    <Twitter className="h-5 w-5 transition-colors cursor-pointer" />
                    <Instagram className="h-5 w-5 transition-colors cursor-pointer" />
                    <Linkedin className="h-5 w-5 transition-colors cursor-pointer" />
                </div> */}
            </div>
        </div>
    )
}
