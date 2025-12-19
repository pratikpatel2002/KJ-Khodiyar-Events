import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'KJ Khodiyar Events - Premium Event Management & Planning Services',
  description: 'Professional event management company specializing in weddings, birthdays, corporate events, baby showers, and festival decorations. Premium event planning services with royal elegance.',
  keywords: 'event management, wedding planner, birthday decoration, corporate events, baby shower, event planning, festival decoration, surprise events, haldi mehendi setup, fire SFX, cold pyro, event management company, wedding planning services, event organizer',
  authors: [{ name: 'KJ Khodiyar Events' }],
  creator: 'KJ Khodiyar Events',
  publisher: 'KJ Khodiyar Events',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kjkhodiyarevents.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KJ Khodiyar Events - Premium Event Management',
    description: 'Transform your special moments into unforgettable experiences with our premium event management services.',
    url: 'https://kjkhodiyarevents.com',
    siteName: 'KJ Khodiyar Events',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KJ Khodiyar Events - Premium Event Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KJ Khodiyar Events - Premium Event Management',
    description: 'Transform your special moments into unforgettable experiences.',
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventPlanningService',
    name: 'KJ Khodiyar Events',
    description: 'Premium event management and planning services',
    url: 'https://kjkhodiyarevents.com',
    logo: 'https://kjkhodiyarevents.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXX-XXX-XXXX',
      contactType: 'Customer Service',
      email: 'info@kjkhodiyarevents.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/kjkhodiyarevents',
      'https://www.instagram.com/kjkhodiyarevents',
      'https://www.twitter.com/kjkhodiyarevents',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Wedding Planning',
      'Birthday Party Planning',
      'Corporate Event Management',
      'Baby Shower Planning',
      'Festival Decoration',
      'Event Planning',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 transition-colors duration-300">
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
