import type { Metadata } from 'next'
import { Header } from './_components/header'
import { ThemeProvider } from './_components/theme-provider/server'
import './globals.css'
import { Footer } from './_components/footer'
import { SearchProvider } from './_components/search'
import { GoogleTagManager } from './_components/google-tag-manager'
import { AnalyticsWrapper } from './_components/analytics-wrapper'
import { sampleSettings } from '@/lib/data/sample-data'

export const metadata: Metadata = {
  title: {
    template: '%s | Carpooll Help Center',
    default: 'Carpooll Help Center - Get Help with Your Rides',
  },
  description: 'Get help with Carpooll rideshare services. Find answers to common questions about rides, payments, safety, and more.',
  keywords: ['carpooll', 'rideshare', 'help', 'support', 'faq', 'rides', 'transportation'],
  authors: [{ name: 'Carpooll Team' }],
  creator: 'Carpooll',
  publisher: 'Carpooll',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    },
  metadataBase: new URL('https://help.carpooll.com'),
  alternates: {
    canonical: '/',
  },
    openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://help.carpooll.com',
    title: 'Carpooll Help Center',
    description: 'Get help with Carpooll rideshare services. Find answers to common questions about rides, payments, safety, and more.',
    siteName: 'Carpooll Help Center',
      images: [
        {
        url: '/logo-green.png',
          width: 1200,
          height: 630,
        alt: 'Carpooll Help Center',
        },
      ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpooll Help Center',
    description: 'Get help with Carpooll rideshare services. Find answers to common questions about rides, payments, safety, and more.',
    images: ['/logo-green.png'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GoogleTagManager />
        <ThemeProvider>
          <SearchProvider _searchKey="local-search">
            <AnalyticsWrapper>
              <Header />
              {children}
            </AnalyticsWrapper>
            </SearchProvider>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
