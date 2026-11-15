import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

// ========================================
// SEO Metadata (Global for entire site)
// ========================================
export const metadata: Metadata = {
  title: 'HAKA — Isipin. Tuklasin. Umangat.',
  description: 'Filipino digital media and innovation brand connecting youth, entrepreneurs, professionals, and tech enthusiasts with cutting-edge content on AI, Technology, Business, and Modern Lifestyle.',
  keywords: ['HAKA', 'Filipino Tech', 'Artificial Intelligence', 'Digital Skills', 'Business Innovation', 'Startup Tips', 'Future Careers', 'Technology Trends', 'Philippine Innovation'],
  authors: [{ name: 'HAKA Team' }],
  creator: 'HAKA Team',
  publisher: 'HAKA',
  openGraph: {
    title: 'HAKA — Isipin. Tuklasin. Umangat.',
    description: 'IDEAS THAT MOVE PEOPLE & BUSINESS 🇵🇭',
    type: 'website',
    locale: 'en_PH',
    siteName: 'HAKA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAKA — Isipin. Tuklasin. Umangat.',
    description: 'Filipino digital media and innovation brand',
  },
  metadataBase: new URL('https://haka.ph'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ========================================
// Font Configuration (Oswald for headings, Inter for body)
// ========================================
const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
});

const oswald = Oswald({ 
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

// ========================================
// Root Layout
// ========================================
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white font-sans antialiased">
        {/* Global styles */}
        <style>{`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          
          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
            background-color: #000000;
            color: #f5f5f5;
            line-height: 1.6;
            letter-spacing: -0.01em;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-oswald), Impact, sans-serif;
            font-weight: 700;
            letter-spacing: 0.02em;
          }

          .gradient-text {
            background: linear-gradient(135deg, #FFC107 0%, #FFD700 50%, #FFFACD 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}