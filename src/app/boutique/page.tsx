import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Boutique – Robes & vêtements femme en Guadeloupe | Odyssée',
  description: 'Boutique de mode femme à Jarry, Guadeloupe : robes de soirée, prêt-à-porter et accessoires. Showroom privé Odyssée sur rendez-vous à Baie-Mahault.',
  alternates: { canonical: 'https://odysseebybea.fr/boutique' },
}

const categories = [
  {
    title: 'Robes de soirée & cocktail',
    href: '/boutique/robes-soiree-cocktail',
    label: 'Page money n°1',
    description: 'Robes de soirée, de cocktail et de cérémonie pour toutes vos occasions en Guadeloupe.',
    tag: '⭐ Incontournable',
    bg: 'bg-charcoal',
    textColor: 'text-warm-white',
  },
  {
    title: 'Vêtements femme',
    href: '/boutique/vetements-femme',
    description: 'Prêt-à-porter chic et moderne : tops, pantalons, jupes et tenues du quotidien.',
    tag: 'Prêt-à-porter',
    bg: 'bg-sable',
    textColor: 'text-charcoal',
  },
  {
    title: 'Accessoires & bijoux',
    href: '/boutique/accessoires-bijoux',
    description: 'Sacs, ceintures et bijoux artisanaux pour sublimer chaque tenue.',
    tag: 'Accessoires',
    bg: 'bg-tropical',
    textColor: 'text-warm-white',
  },
]

export default function BoutiquePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://odysseebybea.fr' },
      { '@type': 'ListItem', position: 2, name: 'Boutique', item: 'https://odysseebybea.fr/boutique' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="container-luxury py-4 text-xs font-sans text-charcoal/50">
        <Link href="/" className="hover:text-dore transition-colors">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">Boutique</span>
      </nav>

      <section className="py-16 md:py-20 bg-sable/20">
        <div className="container-luxury text-center">
          <p className="section-subtitle">Notre sélection</p>
          <h1 className="section-title mb-4">La boutique Odyssée</h1>
          <p className="font-sans text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Pièces sélectionnées avec soin pour la femme guadeloupéenne moderne. 
            Mode, élégance et authenticité caribéenne, sur rendez-vous à Jarry.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group ${cat.bg} p-10 flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:-translate-y-1`}
              >
                <div>
                  <span className="font-sans text-xs tracking-luxury uppercase text-dore">{cat.tag}</span>
                </div>
                <div>
                  <h2 className={`font-serif text-2xl md:text-3xl font-light ${cat.textColor} mb-3 leading-tight`}>
                    {cat.title}
                  </h2>
                  <p className={`font-sans text-sm leading-relaxed ${cat.textColor === 'text-warm-white' ? 'text-warm-white/60' : 'text-charcoal/60'} mb-6`}>
                    {cat.description}
                  </p>
                  <span className={`font-sans text-xs tracking-wide uppercase ${cat.textColor} group-hover:text-dore transition-colors`}>
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-sable">
        <div className="container-luxury text-center">
          <p className="font-sans text-sm text-charcoal/60 mb-6">
            Showroom privé · Jarry, Baie-Mahault · Mardi–Samedi 10h–19h
          </p>
          <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </>
  )
}