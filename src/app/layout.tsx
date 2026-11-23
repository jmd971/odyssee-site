import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { clothingStoreSchema } from '@/lib/schema'

/* Polices hebergees dans le depot, pas chargees chez Google au build.
   Le 23/11/2026, trois builds de production de suite ont echoue parce que
   Google Fonts renvoyait une adresse de police que next/font/google ne savait
   pas lire. Avec des fichiers locaux, le build ne depend plus de personne.

   Ce sont les fichiers variables de Google Fonts (sous-ensemble latin, qui
   couvre le francais, l'apostrophe typographique et le signe euro), sous
   licence SIL Open Font License. Un fichier couvre les graisses 300 a 700. */
const cormorant = localFont({
  src: [
    { path: './fonts/cormorant-garamond-latin.woff2', weight: '300 700', style: 'normal' },
    { path: './fonts/cormorant-garamond-italic-latin.woff2', weight: '300 700', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
})

const manrope = localFont({
  src: './fonts/manrope-latin.woff2',
  weight: '300 700',
  style: 'normal',
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    /* Pas de suffixe : chaque page porte deja « | Odyssee » dans son titre,
       et le gabarit ajoutait la marque une seconde fois — 30 caracteres
       perdus par page, tronques par Google. */
    template: '%s',
    default: 'Boutique vêtements femme à Jarry – essayage privé | Odyssée',
  },
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Boutique vêtements femme à Jarry – essayage privé | Odyssée',
    description: SITE_CONFIG.description,
    images: [{ url: '/images/logo-odyssee.webp', width: 1080, height: 1080, alt: 'Odyssée Showroom Privé – Boutique mode femme à Jarry, Guadeloupe' }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: SITE_CONFIG.url },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
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
      <body className="bg-noir text-blanc-casse font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}