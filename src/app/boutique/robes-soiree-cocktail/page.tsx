import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Robe de soirée & cocktail femme – Guadeloupe | Odyssée',
  description: 'Robes de soirée et de cocktail pour femme en Guadeloupe. Pièces élégantes à Jarry, Baie-Mahault. Conseil personnalisé par Béatrice.',
  alternates: { canonical: 'https://odysseebybea.fr/boutique/robes-soiree-cocktail' },
  openGraph: {
    title: 'Robe de soirée & cocktail femme – Guadeloupe | Odyssée',
    description: 'Robes de soirée et de cocktail pour femme en Guadeloupe.',
    url: 'https://odysseebybea.fr/boutique/robes-soiree-cocktail',
  },
}

const faqItems = [
  {
    question: 'Où acheter une robe de soirée en Guadeloupe ?',
    answer: 'Odyssée Showroom Privé, situé à Jarry (Baie-Mahault), propose une sélection exclusive de robes de soirée et de cocktail pour femme. Prenez rendez-vous pour un essayage personnalisé dans notre showroom.',
  },
  {
    question: 'Comment bénéficier d\'un conseil personnalisé chez Odyssée ?',
    answer: 'Prenez rendez-vous en ligne ou par WhatsApp au ' + SITE_CONFIG.whatsappDisplay + '. Béatrice vous reçoit à Jarry, Baie-Mahault pour un conseil personnalisé selon votre morphologie et votre occasion.',
  },
  {
    question: 'Quels types de robes trouvez-vous chez Odyssée ?',
    answer: 'Notre sélection comprend des robes de soirée longues, des robes de cocktail mi-longues, des robes de cérémonie et des robes de bal. Chaque pièce est choisie pour son élégance et son caractère.',
  },
  {
    question: 'Proposez-vous des robes pour des occasions spéciales ?',
    answer: 'Absolument : mariages (invitées ou témoins), galas, soirées de remise de prix, baptêmes, anniversaires... Béatrice vous conseille selon votre morphologie et l\'occasion.',
  },
  {
    question: 'Quelle est la gamme de prix ?',
    answer: 'Notre sélection couvre différents budgets, avec des pièces à partir de 80€. Contactez-nous pour plus d\'informations sur les collections disponibles.',
  },
]

export default function RobesSoireePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://odysseebybea.fr' },
      { '@type': 'ListItem', position: 2, name: 'Boutique', item: 'https://odysseebybea.fr/boutique' },
      { '@type': 'ListItem', position: 3, name: 'Robes de soirée & cocktail', item: 'https://odysseebybea.fr/boutique/robes-soiree-cocktail' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="container-luxury py-4 text-xs font-sans text-blanc-casse/50">
        <Link href="/" className="hover:text-or transition-colors">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/boutique" className="hover:text-or transition-colors">Boutique</Link>
        <span className="mx-2">/</span>
        <span className="text-blanc-casse">Robes de soirée & cocktail</span>
      </nav>

      {/* Hero page */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #E8572A, #D63578, #C4359A)' }}
      >
        <div className="relative container-luxury text-center">
          <p className="section-subtitle text-blanc-casse/80">Boutique Guadeloupe</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-blanc-casse leading-tight">
            Robes de soirée &amp;<br />
            <span className="italic text-or">de cocktail</span><br />
            pour femme en Guadeloupe
          </h1>
          <p className="font-sans text-blanc-casse/80 mt-6 max-w-xl mx-auto leading-relaxed">
            Pièces élégantes à Jarry, Baie-Mahault. Conseil personnalisé à Jarry, Baie-Mahault.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Essayer en showroom
            </a>
            <a href={SITE_CONFIG.whatsapp} className="btn-outline-white">
              WhatsApp {SITE_CONFIG.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Intro SEO */}
      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/70 leading-relaxed text-base md:text-lg">
            À la recherche d&apos;une <strong>robe de soirée femme en Guadeloupe</strong> ? 
            Odyssée Showroom Privé, à <strong>Jarry, Baie-Mahault</strong>, vous propose une sélection 
            exclusive de robes élégantes pour toutes vos occasions : mariages, galas, soirées, cérémonies. 
            Dans notre <strong>showroom privé</strong>, Béatrice vous accompagne personnellement pour 
            trouver la pièce qui vous ressemble.
          </p>
        </div>
      </section>

      {/* Grille robes de soirée */}
      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-10">Nos robes de soirée</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] relative overflow-hidden group cursor-pointer"
                style={{
                  backgroundColor: i % 4 === 0 ? '#C45B3A' : i % 4 === 1 ? '#2D6A4F' : i % 4 === 2 ? '#F5EDD6' : '#C9A84C',
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cline x1='0' y1='0' x2='40' y2='40' stroke='%23C45B3A' stroke-width='1' opacity='0.3'/%3E%3Cline x1='40' y1='0' x2='0' y2='40' stroke='%232D6A4F' stroke-width='1' opacity='0.3'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='%23C9A84C' stroke-width='0.5' opacity='0.2'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='%23C9A84C' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E\")"
                }}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer"
                    className="w-full btn-primary text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Essayer en showroom
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-blanc-casse/40 mt-4 text-center">
            Photos des collections disponibles en boutique — prenez RDV pour voir les pièces en vrai
          </p>
        </div>
      </section>

      {/* Grille robes cocktail */}
      <section className="py-16 bg-noir-alt">
        <div className="container-luxury">
          <h2 className="section-title mb-4">Nos robes de cocktail</h2>
          <p className="font-sans text-blanc-casse/60 mb-10 max-w-xl">
            Robe de cocktail pour un mariage en Guadeloupe, une soirée d&apos;entreprise ou un événement festif.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`aspect-[3/4] relative overflow-hidden group cursor-pointer ${
                i % 3 === 0 ? 'bg-noir' : i % 3 === 1 ? 'bg-noir-alt' : 'bg-or/20'
              }`}>
                <div className="absolute inset-0 flex items-end p-4">
                  <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer"
                    className="w-full btn-primary text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Voir en boutique
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide choix */}
      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Comment choisir sa robe selon l&apos;occasion</h2>
          <div className="space-y-8">
            {[
              { occasion: 'Mariage', desc: 'Pour une invitée ou une témoin, optez pour une robe de soirée longue ou mi-longue, dans des tons neutres ou pastel. Évitez le blanc. Notre conseil : une robe fourreau élégante ou une robe empire légèrement flottante conviennent parfaitement au climat caribéen.' },
              { occasion: 'Gala & soirée de prestige', desc: 'Une robe longue avec une matière noble (satin, mousseline, dentelle) s\'impose. Misez sur un dos nu ou une encolure travaillée pour un effet saisissant. Béatrice vous guidera vers les pièces qui mettront en valeur votre silhouette.' },
              { occasion: 'Soirée & cocktail', desc: 'La robe de cocktail est la solution la plus polyvalente. Longueur genou à mi-mollet, elle convient aux soirées d\'entreprise, anniversaires et événements festifs. Optez pour une coupe ajustée ou une robe patineuse selon votre silhouette.' },
            ].map((item) => (
              <div key={item.occasion} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.occasion}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil personnalisé */}
      <section className="py-16 bg-noir-alt">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle text-or">L&apos;expérience Odyssée</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-6">
                Le conseil personnalisé<br />
                <span className="italic text-or">chez Odyssée</span>
              </h2>
              <p className="font-sans text-blanc-casse/60 leading-relaxed mb-6">
                Béatrice vous reçoit pour un conseil personnalisé, sur place ou sur rendez-vous
                selon votre disponibilité. Elle écoute vos besoins, votre occasion, votre style —
                et sélectionne les pièces susceptibles de vous correspondre.
              </p>
              <p className="font-sans text-blanc-casse/60 leading-relaxed mb-8">
                Ce service personnalisé, ancré en Guadeloupe, fait toute la différence.
                Profitez d&apos;une attention 100% dédiée dans notre boutique de Jarry.
              </p>
              <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver ma séance
              </a>
            </div>
            <div className="bg-noir border border-blanc-casse/10 p-10">
              <h3 className="font-serif text-2xl text-blanc-casse mb-6">En pratique</h3>
              <ul className="space-y-4 font-sans text-sm text-blanc-casse/60">
                <li className="flex gap-3"><span className="text-or">✦</span> Prise de rendez-vous en ligne ou par WhatsApp</li>
                <li className="flex gap-3"><span className="text-or">✦</span> Temps dédié pour vous pendant 1h</li>
                <li className="flex gap-3"><span className="text-or">✦</span> Présélection de pièces selon votre occasion</li>
                <li className="flex gap-3"><span className="text-or">✦</span> Conseil morphologie et colorimétrie inclus</li>
                <li className="flex gap-3"><span className="text-or">✦</span> Parking gratuit à Jarry, Baie-Mahault</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Où nous trouver */}
      <section className="py-16">
        <div className="container-luxury">
          <h2 className="section-title mb-8">Où nous trouver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 font-sans text-sm">
              <p><strong className="font-medium">Odyssée Showroom Privé</strong></p>
              <address className="not-italic text-blanc-casse/70 leading-relaxed">
                {SITE_CONFIG.address.full}
              </address>
              <p className="text-blanc-casse/70">{SITE_CONFIG.hours}</p>
              <div className="flex gap-4 pt-2">
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-blanc-casse hover:text-or transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <span className="text-blanc-casse/30">·</span>
                <a href={SITE_CONFIG.whatsapp} className="text-blanc-casse hover:text-or transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-noir-alt p-6 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Immeuble+Les+Lilas+Impasse+Guy+Cornely+Baie-Mahault+Guadeloupe"
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

      {/* FAQ */}
      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-2xl">
          <h2 className="section-title mb-10">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-or/20 pb-6">
                <h3 className="font-sans text-sm font-medium text-blanc-casse mb-2">{item.question}</h3>
                <p className="font-sans text-sm text-blanc-casse/60 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #E8572A, #D63578, #C4359A)' }}>
        <div className="container-luxury text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-4">
            Prête à trouver votre robe ?
          </h2>
          <p className="font-sans text-blanc-casse/70 mb-8 max-w-md mx-auto">
            Prenez rendez-vous dès maintenant pour une séance personnalisée dans notre showroom de Jarry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver en ligne
            </a>
            <a href={SITE_CONFIG.whatsapp} className="btn-outline-white">
              WhatsApp {SITE_CONFIG.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
