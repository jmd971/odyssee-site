import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
  description: 'Boutique de prêt-à-porter et robes de soirée femme à Jarry, Guadeloupe. Showroom privé sur rendez-vous. Collections tendance et conseil personnalisé.',
  alternates: { canonical: SITE_CONFIG.url },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero placeholder */}
      <section className="relative h-[80vh] bg-sable flex items-center justify-center overflow-hidden">
        <div className="text-center z-10 px-4">
          <p className="section-subtitle">Jarry · Baie-Mahault · Guadeloupe</p>
          <h1 className="section-title text-4xl md:text-6xl lg:text-7xl mb-6">
            L&apos;élégance caribéenne,<br />
            <span className="italic">sur rendez-vous</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/70 max-w-md mx-auto mb-8">
            Robes de soirée, prêt-à-porter chic et accessoires. 
            Conseil personnalisé dans notre showroom privé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Prendre rendez-vous
            </a>
            <a href="/boutique" className="btn-outline">
              Découvrir la boutique
            </a>
          </div>
        </div>
      </section>

      {/* Section coming soon */}
      <section className="py-24 container-luxury text-center">
        <p className="section-subtitle">Bientôt disponible</p>
        <h2 className="section-title mb-4">Notre nouvelle collection arrive</h2>
        <p className="font-sans text-sm text-charcoal/60 max-w-lg mx-auto">
          Le site est en cours de refonte. En attendant, contactez-nous directement ou prenez rendez-vous.
        </p>
        <a href={SITE_CONFIG.whatsapp} className="btn-primary mt-8 inline-flex">
          WhatsApp {SITE_CONFIG.whatsappDisplay}
        </a>
      </section>
    </div>
  )
}