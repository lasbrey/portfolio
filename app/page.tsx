import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { WorkExperienceSection } from '@/components/sections/work-experience-section';
import { ProcessSection } from '@/components/sections/process-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ToolSection } from '@/components/sections/tools-section';
import { FaqSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact-section';
import { Marquee } from '@/components/ui/marquee';

export default function Home() {
  const satisfaction = [
    { text: "30+ projects finished", highlight: "30+" },
    { text: "8+ years of experience", highlight: "8+" },
    { text: "95% client retention rate", highlight: "95%" }
  ];
  const projects = [
    { text: "Frontend Development", highlight: "Frontend" },
    { text: "Mobile Applications", highlight: "Mobile" },
    { text: "Full-Stack Solutions", highlight: "Full-Stack" }
  ];
  return (
    <>
      <main>
        <HeroSection />
        <Marquee items={satisfaction} />
        <ProjectsSection />
        <WorkExperienceSection />
        <ToolSection />
        <Marquee items={projects} />
        <ProcessSection />
        <StatsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
}