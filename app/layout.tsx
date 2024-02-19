import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { generateFontClasses } from '@/lib/utils';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const fontClasses = generateFontClasses(raleway, inter);

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={fontClasses}>{children}</body>
    </html>
  );
}
