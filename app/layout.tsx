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
  title: 'Lasbrey Lawal - Digital Designer & Developer',
  description: 'Digital designer and developer from Boston, turning your ideas into pixel-perfect realities. Specializing in web design, development, and brand identity.',
  keywords: ['digital designer', 'web developer', 'Boston', 'web design', 'UI/UX', 'brand identity'],
  authors: [{ name: 'Lasbrey Lawal' }],
  openGraph: {
    title: 'Lasbrey Lawal - Digital Designer & Developer',
    description: 'Digital designer and developer from Boston, turning your ideas into pixel-perfect realities.',
    type: 'website',
  },
};
const satisfaction = [
  { text: "20+ projects finished", highlight: "20+" },
  { text: "5+ years of experience", highlight: "8+" },
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