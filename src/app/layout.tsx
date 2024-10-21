import { NavBar } from '@/app/navbar';
import { ThemeProvider } from 'next-themes';
import { Oxanium } from 'next/font/google';
import { Container, Flex } from 'styled-system/jsx';
import './globals.css';

const font = Oxanium({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://xaviercarpentier.com'),
  title: {
    default: 'Home | Xavier Carpentier Senior App Developer',
    template: '%s | Xavier Carpentier Senior App Developer',
  },
  description:
    'Need to quickly develop a high-end mobile app? Benefit from my expertise.',
  // TODO: manifest: '/site.webmanifest',
  keywords: [
    'React',
    'React-Native',
    'Next.js',
    'TypeScript',
    'SSR',
    'Senior App Developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xaviercarpentier.com',
    description:
      'Need to quickly develop a high-end mobile app? Benefit from my expertise.',
  },
  twitter: {
    creator: '@xcapetir',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={font.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <NavBar />
          <Container mt={'16'}>
            <Flex flexDir={'column'} alignItems={'center'}>
              {children}
            </Flex>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
