import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ProcessSection } from '@/components/sections/process-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ToolSection } from '@/components/sections/tools-section';
import { FaqSection } from '@/components/sections/faq';
// import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Marquee } from '@/components/ui/marquee';

export default function Home() {
  const satisfaction = [
    { text: "20+ projects finished", highlight: "20+" },
    { text: "8+ years of experience", highlight: "8+" },
    { text: "95% client retention rate", highlight: "95%" }
  ];
  const projects = [
    { text: "20+ projects finished", highlight: "20+" },
    { text: "8+ years of experience", highlight: "8+" },
    { text: "95% client retention rate", highlight: "95%" }
  ];
  return (
    <>
      <main>
        <HeroSection />
        <Marquee items={satisfaction} />
        <ProjectsSection />
        <ToolSection />
        <Marquee items={projects} />
        <ProcessSection />
        <StatsSection />
        <FaqSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
    </>
  );
}