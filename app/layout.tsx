import type { Metadata } from 'next'
import { Poppins, Playfair_Display, Open_Sans, Montserrat } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-playfair',
})

const googleSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-google-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://edurise.com'),
  title: 'Edu Rise - Best Coaching Institute for Classes 1-10 in Delhi',
  description: 'Professional coaching institute offering expert guidance for Classes 1-10. Personalized attention, digital board classes, and holistic development. Join 5000+ successful students today!',
  keywords: ['coaching institute', 'classes 1-10', 'education', 'tutoring', 'Delhi', 'online classes', 'personalized learning'],
  authors: [{ name: 'Edu Rise' }],
  creator: 'Edu Rise',
  publisher: 'Edu Rise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://edurise.com',
    siteName: 'Edu Rise',
    title: 'Edu Rise - Best Coaching Institute for Classes 1-10',
    description: 'Professional coaching institute with expert guidance, personalized attention, and holistic development for Classes 1-10.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Edu Rise Coaching Institute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edu Rise - Best Coaching Institute for Classes 1-10',
    description: 'Professional coaching with expert guidance and personalized learning paths.',
    images: ['/images/logo.jpg'],
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
  alternates: {
    canonical: 'https://edurise.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${googleSans.variable} ${montserrat.variable}`}>
      <body className="bg-white text-gray-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
