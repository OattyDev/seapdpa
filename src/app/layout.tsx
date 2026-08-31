import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const plexSansThai = IBM_Plex_Sans_Thai({
  weight: ['400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SeaPDPA - PDPA Readiness Playbook',
  description: 'Free bilingual PDPA compliance checklists, templates, and guides for Thai SMEs. Open source under MIT license.',
  keywords: ['PDPA', 'Thailand', 'data protection', 'privacy', 'compliance', 'SME', 'checklist', 'templates'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${plexSansThai.variable} ${plexMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}