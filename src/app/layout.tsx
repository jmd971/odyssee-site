import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { clothingStoreSchema } from '@/lib/schema'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: '%s | Odyssée Showroom Privé',
    default: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
  },
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
    description: SITE_CONFIG.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Odyssée Showroom Privé – Boutique mode femme en Guadeloupe' }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: SITE_CONFIG.url },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clothingStoreSchema()) }}
        />
      </head>
      <body className="bg-warm-white text-charcoal font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}