import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, whatsappAvec } from '@/lib/site-config'
import type { FaqItem } from '@/lib/schema'
import type { Visuel } from '@/lib/images'
import { FaqAccordion } from './FaqAccordion'

export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data]
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}

export function Breadcrumb({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="container-luxury py-4 text-xs font-sans text-blanc-casse/50">
      <Link href="/" className="hover:text-or transition-colors">Accueil</Link>
      {trail.map((item, i) => (
        <span key={item.path}>
          <span className="mx-2" aria-hidden="true">/</span>
          {i === trail.length - 1 ? (
            <span className="text-blanc-casse">{item.name}</span>
          ) : (
            <Link href={item.path} className="hover:text-or transition-colors">{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel = 'Réserver un essayage',
  ctaHref = SITE_CONFIG.booking,
}: {
  eyebrow: string
  title: React.ReactNode
  intro: string
  ctaLabel?: string
  /* Un bouton qui dit « venir » doit mener a un itineraire, pas a un agenda. */
  ctaHref?: string
}) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-noir border-b border-blanc-casse/10">
      <div className="gradient-line absolute top-0 left-0 right-0" />
      <div className="relative container-luxury text-center">
        <p className="section-subtitle">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-blanc-casse leading-tight">
          {title}
        </h1>
        <p className="font-sans text-blanc-casse/60 mt-6 max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {ctaLabel}
          </a>
          <a href={SITE_CONFIG.whatsapp} className="btn-outline-white">
            WhatsApp {SITE_CONFIG.whatsappDisplay}
          </a>
        </div>
        <p className="font-sans text-xs text-blanc-casse/45 mt-6 max-w-xl mx-auto leading-relaxed">
          Entrée libre du mardi au samedi, de 10h à 19h. Béatrice vous conseille et vous accompagne sur place. La réservation ne sert que pour un essayage dédié ou une privatisation entre copines.
        </p>
      </div>
    </section>
  )
}

export function Galerie({
  visuels,
  cols = 'md:grid-cols-3',
  legende,
}: {
  visuels: Visuel[]
  cols?: string
  legende?: string
}) {
  return (
    <>
      <div className={`grid grid-cols-2 ${cols} gap-3`}>
        {visuels.map((v) => (
          <figure key={v.src} className="relative aspect-[3/4] overflow-hidden group m-0">
            <Image
              src={v.src}
              alt={v.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {v.credit && (
              <figcaption className="absolute top-0 left-0 bg-noir/70 px-2.5 py-1 font-sans text-[10px] tracking-wide text-or">
                {v.credit}
              </figcaption>
            )}
            <div className="absolute inset-0 bg-noir/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {/* Vers WhatsApp, pas vers la reservation : a cet instant la question
                  est « est-elle encore la, dans ma taille ? », pas « quel creneau ». */}
              <a
                href={whatsappAvec(
                  `Bonjour Béatrice, j’ai vu cette pièce sur le site (${v.alt}). Est-elle encore disponible ?`,
                )}
                className="w-full text-center btn-primary text-xs py-2"
              >
                Est-elle disponible ?
              </a>
            </div>
          </figure>
        ))}
      </div>
      {legende && (
        <p className="font-sans text-xs text-blanc-casse/40 mt-4 text-center">{legende}</p>
      )}
    </>
  )
}

export function FaqSection({ items, titre = 'Questions fréquentes' }: { items: FaqItem[]; titre?: string }) {
  return (
    <section className="py-16 bg-noir-alt">
      <div className="container-luxury max-w-2xl">
        <h2 className="section-title mb-10">{titre}</h2>
        <FaqAccordion items={items} />
      </div>
    </section>
  )
}

export function OuNousTrouver() {
  return (
    <section className="py-16">
      <div className="container-luxury">
        <h2 className="section-title mb-8">Où nous trouver</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 font-sans text-sm">
            <p className="font-medium">Odyssée Showroom Privé</p>
            <address className="not-italic text-blanc-casse/70 leading-relaxed">
              {SITE_CONFIG.address.full}
            </address>
            <p className="text-blanc-casse/70">{SITE_CONFIG.hours}</p>
            <p className="text-blanc-casse/50">Parking gratuit sur place, à Jarry.</p>
            <div className="flex gap-4 pt-2">
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-blanc-casse hover:text-or transition-colors">
                {SITE_CONFIG.phoneDisplay}
              </a>
              <span className="text-blanc-casse/30" aria-hidden="true">·</span>
              <a href={SITE_CONFIG.whatsapp} className="text-blanc-casse hover:text-or transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-noir-alt p-6 flex items-center justify-center">
            <a
              href={SITE_CONFIG.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaFinal({ titre, texte }: { titre: string; texte: string }) {
  return (
    <section className="py-20 bg-noir-alt relative">
      <div className="gradient-line absolute top-0 left-0 right-0" />
      <div className="container-luxury text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-4">{titre}</h2>
        <p className="font-sans text-blanc-casse/60 mb-8 max-w-lg mx-auto">{texte}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Réserver un essayage
          </a>
          <a href={SITE_CONFIG.whatsapp} className="btn-outline-white">
            WhatsApp {SITE_CONFIG.whatsappDisplay}
          </a>
        </div>
        <p className="font-sans text-xs text-blanc-casse/45 mt-6 max-w-xl mx-auto leading-relaxed">
          Entrée libre du mardi au samedi, de 10h à 19h. Béatrice vous conseille et vous accompagne sur place. La réservation ne sert que pour un essayage dédié ou une privatisation entre copines.
        </p>
      </div>
    </section>
  )
}

/** Liens internes contextuels — évite les pages orphelines. */
export function PourAllerPlusLoin({ liens }: { liens: { label: string; href: string; desc: string }[] }) {
  return (
    <section className="py-16">
      <div className="container-luxury">
        <h2 className="section-title mb-8">Pour aller plus loin</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liens.map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="block border border-blanc-casse/10 p-6 hover:border-or transition-colors group"
            >
              <h3 className="font-serif text-lg text-blanc-casse mb-2 group-hover:text-or transition-colors">
                {lien.label}
              </h3>
              <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed">{lien.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
