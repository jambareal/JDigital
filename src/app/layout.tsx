import type { Metadata, Viewport } from 'next'
import { Syne, Manrope } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JDigital - Agenzia Digitale | Siti Web e Social Media',
  description: 'Trasformiamo le tue idee digitali in successi concreti. Siti web, grafiche per social media, SEO e branding per far crescere il tuo business online.',
  keywords: 'agenzia digitale, siti web, social media, SEO, branding, marketing digitale, Milano',
  authors: [{ name: 'JDigital' }],
  creator: 'JDigital',
  publisher: 'JDigital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jdigital.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JDigital - Agenzia Digitale | Siti Web e Social Media',
    description: 'Trasformiamo le tue idee digitali in successi concreti. Siti web, grafiche per social media, SEO e branding.',
    url: 'https://jdigital.it',
    siteName: 'JDigital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JDigital - Agenzia Digitale',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JDigital - Agenzia Digitale | Siti Web e Social Media',
    description: 'Trasformiamo le tue idee digitali in successi concreti. Siti web, grafiche per social media, SEO e branding.',
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
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className={`${manrope.variable} ${syne.variable} font-sans bg-background text-foreground antialiased selection:bg-primary-500 selection:text-black overflow-x-hidden w-full relative`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

