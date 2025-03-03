import type { Metadata, Viewport } from 'next';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Providers } from '@/context';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'], // semiBold (600), bold (700)
  variable: '--font-montserrat',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'], // regular (400), semiBold (600)
  variable: '--font-source-sans-3',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7c3aed',
};


export const metadata: Metadata = {
  title:  'Client',
  description: 'consultant next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${sourceSans3.variable} font-semibold text-foreground-900 scrollbar-none`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
