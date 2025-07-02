import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { LoadingScreen } from '@/components/loading-screen';
import { Navigation } from '@/components/navigation';
import { VoiceAssistant } from '@/components/voice-assistant';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { CtaSection } from '@/components/sections/cta-section';
import { Marquee } from '@/components/ui/marquee';
import { Footer } from '@/components/footer';
const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lazarus Lawal - Software Developer & Engineer',
  description: 'Results-driven software developer passionate about creating user-friendly web and mobile applications. Proficient in React Native, Next.js, and Node.js.',
  keywords: ['software developer', 'web developer', 'mobile developer', 'React Native', 'Next.js', 'Node.js', 'Nigeria'],
  authors: [{ name: 'Lazarus Lawal' }],
  openGraph: {
    title: 'Lazarus Lawal - Software Developer & Engineer',
    description: 'Results-driven software developer passionate about creating user-friendly web and mobile applications.',
    type: 'website',
  },
};
const satisfaction = [
  { text: "30+ projects finished", highlight: "30+" },
  { text: "8+ years of experience", highlight: "8+" },
  { text: "95% client retention rate", highlight: "95%" }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} bg-gray-100`}>
        <LoadingScreen />
        <SmoothScrollProvider>
          <div className="relative">
            <Navigation />
            {children}
            <Marquee items={satisfaction} />
            <CtaSection />
            <Footer />
            {/* <VoiceAssistant /> */}
          </div>
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}