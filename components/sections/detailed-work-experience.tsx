"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, MapPin, Calendar, Briefcase } from 'lucide-react';
import Link from 'next/link';
import companiesData from '@/data/companies.json';

export function DetailedWorkExperience() {
  const companies = companiesData.companies;

  return (
    <section className="py-20 bg-background text-foreground font-medium min-h-screen">
      <div className="mb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-md text-foreground/70 font-light"> [02]— Professional Experience</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-12">
          My Professional<br />
          Journey
        </h1>
        <p className="text-xl text-foreground/70 max-w-3xl">
          A comprehensive overview of my professional experience, showcasing the companies I've worked with, 
          the roles I've held, and the impact I've made across different industries and technologies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-8">
          {companies.map((company) => (
            <Card
              key={company.id}
              className="border border-border hover:border-green-500/50 overflow-hidden group transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Company Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-green-500 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-lg text-foreground/60">{company.role}</p>
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-foreground/60">
                      <MapPin className="h-4 w-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-foreground/60">
                      <Calendar className="h-4 w-4" />
                      <span>{company.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 text-base leading-relaxed">
                    {company.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-green-500/10 text-green-600 border-green-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {company.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-foreground/80 flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Ready to work together?
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Let's discuss how I can contribute to your next project and help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-green-500 hover:bg-green-600 text-white"
                >
                  Get In Touch
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-green-500/50 text-green-600 hover:bg-green-500 hover:text-white"
                >
                  View All Projects
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 