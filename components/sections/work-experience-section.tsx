"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, MapPin, Calendar, Briefcase } from 'lucide-react';
import Link from 'next/link';
import companiesData from '@/data/companies.json';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function WorkExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const companies = companiesData.companies;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    if (section) {
      const companyCards = section.querySelectorAll('.company-card');

      companyCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work-experience"
      className="py-20 bg-background text-foreground font-medium"
      data-scroll-section
    >
      <motion.div
        className="mb-16 max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-md text-foreground/70 font-light"> [02]— Work Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-12">
          Professional<br />
          Experience
        </h2>
        <p className="text-xl text-foreground/70 max-w-3xl">
          My journey through various companies, roles, and technologies - from frontend development 
          to full-stack solutions across different industries.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <Card
              key={company.id}
              className="company-card border border-border hover:border-green-500/50 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCompany(selectedCompany === company.id ? null : company.id)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Company Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-green-500 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm text-foreground/60">{company.role}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-foreground/40 group-hover:text-green-500 transition-colors" />
                  </div>

                  {/* Company Details */}
                  <div className="flex items-center space-x-4 text-sm text-foreground/60">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{company.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {company.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {company.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-green-500/10 text-green-600 border-green-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {company.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{company.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Achievements (Collapsible) */}
                  {selectedCompany === company.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-border/50"
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {company.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                        {company.achievements.length > 3 && (
                          <li className="text-sm text-foreground/50 italic">
                            +{company.achievements.length - 3} more achievements
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Experience CTA */}
        <div className="mt-12 text-center">
          <Link href="/work-experience">
            <Button
              variant="outline"
              size="lg"
              className="group border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              More Experience
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 