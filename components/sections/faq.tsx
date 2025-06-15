"use client"; 

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; 

// Data for the FAQ items
const faqItems = [
  {
    value: 'item-1', 
    questionNumber: '01/',
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary greatly depending on complexity, features, and client responsiveness. A typical small to medium website might take 4-8 weeks from discovery to launch, while larger projects can take several months. We provide a detailed timeline after the initial consultation.',
  },
  {
    value: 'item-2',
    questionNumber: '02/',
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes, we offer various post-launch maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. This can include regular backups, security monitoring, software updates, and content assistance.',
  },
  {
    value: 'item-3',
    questionNumber: '03/',
    question: 'Can you work with existing brand guidelines?',
    answer: 'Absolutely! We specialize in creating designs that are consistent with your existing brand identity. Please provide your brand guidelines, logos, color palettes, and typography, and we will integrate them seamlessly into the new design.',
  },
  {
    value: 'item-4',
    questionNumber: '04/',
    question: 'How do you handle revisions and feedback?',
    answer: 'Our process includes dedicated revision rounds at key project milestones. We use collaborative tools to gather feedback efficiently, ensuring all comments are addressed. Clear communication is a priority throughout the revision phase.',
  },
  {
    value: 'item-5',
    questionNumber: '05/',
    question: 'How do I get started?',
    answer: "Getting started is easy! Simply reach out to us through our contact form, email, or phone. We'll schedule an initial consultation to discuss your needs, provide a tailored proposal, and outline the next steps to kick off your project.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center space-x-2 mb-4 justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-md text-gray-500 font-medium">[05] — FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-normal leading-tight text-gray-900">
            Got Questions?
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="border my-4 border-gray-200 p-4 rounded-md">
              <AccordionTrigger className="flex justify-between items-center text-left text-lg md:text-xl font-medium text-gray-800 hover:no-underline">
                <span className="flex-shrink-0 text-gray-500 mr-4 whitespace-nowrap">
                  {item.questionNumber}
                </span>
                <span className="flex-grow">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-base text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}