import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Clock, Phone, Instagram } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
  description: 'Boutique de mode femme à Jarry, Guadeloupe. Collections tendance, robes de soirée, conseil personnalisé par Béatrice.',
  alternates: { canonical: 'https://odysseebybea.fr' },
  openGraph: {
    title: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
    description: 'Boutique de mode femme à Jarry, Guadeloupe. Collections tendance, robes de soirée, conseil personnalisé par Béatrice.',
    url: 'https://odysseebybea.fr',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const categories = [
  {
    title: 'Robes de soirée',
    subtitle: '& cocktail',
    href: '/boutique/robes-soiree-cocktail',
    description: 'Pièces élégantes pour chaque occasion',
    bg: 'bg-terracotta',
    text: 'text-warm-white',
  },
  {
    title: 'Vêtements',
    subtitle: 'femme',
    href: '/boutique/vetements-femme',
    description: 'Prêt-à-porter chic et moderne',
    bg: 'bg-sable',
    text: 'text-charcoal',
  },
  {
    title: 'Accessoires',
    subtitle: '& bijoux',
    href: '/boutique/accessoires-bijoux',
    description: 'Pièces uniques et artisanales',
    bg: 'bg-tropical',
    text: 'text-warm-white',
  },
]

const services = [
  { title: 'Stylisme', href: '/services/stylisme', icon: '✦' },
  { title: 'Relooking', href: '/services/relooking', icon: '✦' },
  { title: 'Shooting photo', href: '/services/shooting-photo', icon: '✦' },
  { title: 'Shopping anniversaire', href: '/services/shopping-anniversaire', icon: '✦' },
]

const testimonials = [
  {
    text: 'Béatrice a un œil extraordinaire pour la mode. Elle m\'a trouvé la robe parfaite pour mon mariage en Guadeloupe. Service impeccable !',
    author: 'Marie-Christine L.',
    stars: 5,
  },
  {
    text: 'Showroom unique en Guadeloupe. Des pièces qu\'on ne trouve nulle part ailleurs, et un conseil vraiment personnalisé. Je recommande à 100%.',
    author: 'Sandrine M.',
    stars: 5,
  },
  {
    text: 'J\'ai découvert Odyssée pour un événement et je ne peux plus m\'en passer. L\'ambiance du showroom est incomparable.',
    author: 'Nathalie P.',
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-end"
        style={{ backgroundColor: '#F5EDD6', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23F5EDD6'/%3E%3Cline x1='0' y1='0' x2='40' y2='40' stroke='%23C45B3A' stroke-width='1' opacity='0.3'/%3E%3Cline x1='40' y1='0' x2='0' y2='40' stroke='%232D6A4F' stroke-width='1' opacity='0.3'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='%23C9A84C' stroke-width='0.5' opacity='0.2'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='%23C9A84C' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E\")" }}
      >
        <div className="relative z-10 container-luxury pb-16 md:pb-24 w-full">
          <div className="max-w-2xl">
            <p className="font-sans text-terracotta text-xs tracking-luxury uppercase mb-6">
              Jarry · Baie-Mahault · Guadeloupe
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-charcoal leading-none mb-6">
              L&apos;élégance<br />
              <span className="italic text-terracotta">caribéenne,</span><br />
              <span className="text-4xl md:text-5xl">à Jarry</span>
            </h1>
            <p className="font-sans text-charcoal/70 text-base md:text-lg max-w-md leading-relaxed mb-10">
              Boutique de mode femme à Jarry, Guadeloupe. Collections tendance, robes de soirée, conseil personnalisé par Béatrice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Prendre rendez-vous
              </a>
              <Link href="/boutique" className="btn-outline border-charcoal/40 text-charcoal hover:bg-charcoal hover:text-warm-white">
                Venez nous découvrir
              </Link>
            </div>
          </div>
        </div>

        {/* Rating flottant */}
        <div className="absolute top-8 right-8 bg-charcoal/10 backdrop-blur-sm border border-charcoal/20 rounded px-4 py-3 hidden md:block">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-dore text-dore" />
            ))}
          </div>
          <p className="font-sans text-charcoal text-sm font-medium">{SITE_CONFIG.rating.value}/5</p>
          <p className="font-sans text-charcoal/60 text-xs">{SITE_CONFIG.rating.count} avis Google</p>
        </div>
      </section>

      {/* ─── BANDEAU DÉFILANT ─── */}
      <div className="bg-dore py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {['Boutique de Mode', 'Robes de Soirée', 'Prêt-à-Porter', 'Accessoires', 'Bijoux Artisanaux', 'Relooking', 'Stylisme', 'Guadeloupe', 'Antilles', 'Jarry'].map((item, i) => (
            <span key={i} className="font-sans text-xs tracking-luxury uppercase text-charcoal mx-8">
              {item} <span className="mx-4">·</span>
            </span>
          ))}
          {['Boutique de Mode', 'Robes de Soirée', 'Prêt-à-Porter', 'Accessoires', 'Bijoux Artisanaux', 'Relooking', 'Stylisme', 'Guadeloupe', 'Antilles', 'Jarry'].map((item, i) => (
            <span key={`b-${i}`} className="font-sans text-xs tracking-luxury uppercase text-charcoal mx-8">
              {item} <span className="mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── INTRO MARQUE ─── */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">Notre histoire</p>
            <h2 className="section-title mb-6">
              Une boutique ancrée<br />
              <span className="italic">en Guadeloupe</span>
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed text-base md:text-lg">
              Odyssée, c&apos;est l&apos;univers mode de Béatrice — une femme guadeloupéenne passionnée de mode,
              installée à Jarry, Baie-Mahault. Sa sélection pointue de robes de soirée, vêtements et accessoires
              est pensée pour la femme des Antilles : élégante, authentique, moderne.
              Chaque pièce est choisie avec soin pour allier style caribéen et tendances contemporaines.
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px bg-dore w-16" />
              <span className="font-serif italic text-dore text-xl">by Béa</span>
              <div className="h-px bg-dore w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATÉGORIES ─── */}
      <section className="pb-20 md:pb-28">
        <div className="container-luxury">
          <p className="section-subtitle text-center">Notre boutique</p>
          <h2 className="section-title text-center mb-12">
            Explorez nos collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`group relative ${cat.bg} aspect-[3/4] flex flex-col justify-end p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cline x1='0' y1='0' x2='40' y2='40' stroke='%23C45B3A' stroke-width='1' opacity='0.2'/%3E%3Cline x1='40' y1='0' x2='0' y2='40' stroke='%232D6A4F' stroke-width='1' opacity='0.2'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='%23C9A84C' stroke-width='0.5' opacity='0.15'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='%23C9A84C' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E\")" }}
              >
                {/* Effet hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                <div className="relative z-10">
                  <p className={`font-sans text-xs tracking-luxury uppercase ${cat.text === 'text-warm-white' ? 'text-dore' : 'text-dore'} mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Découvrir →
                  </p>
                  <h3 className={`font-serif text-3xl md:text-4xl font-light ${cat.text} leading-tight`}>
                    {cat.title}<br />
                    <span className="italic">{cat.subtitle}</span>
                  </h3>
                  <p className={`font-sans text-sm mt-2 ${cat.text === 'text-warm-white' ? 'text-warm-white/60' : 'text-charcoal/60'}`}>
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/boutique" className="btn-outline">
              Voir toute la boutique
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEED INSTAGRAM ─── */}
      <section className="py-20 bg-sable/30">
        <div className="container-luxury">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="section-subtitle">Nos derniers looks</p>
              <h2 className="section-title">Suivez-nous<br /><span className="italic">sur Instagram</span></h2>
            </div>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-charcoal hover:text-dore transition-colors"
            >
              <Instagram size={16} />
              @odyssee.boutique
            </a>
          </div>
          
          {/* Widget Behold Instagram — à activer : créer un compte sur behold.so, connecter @odyssee.boutique, copier le widget ID */}
          <div
            id="behold-widget-instagram"
            className="grid grid-cols-2 md:grid-cols-4 gap-2"
          >
            {/* Placeholders visuels en attendant le widget */}
            {[...Array(8)].map((_, i) => (
              <a
                key={i}
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square bg-sable group overflow-hidden"
              >
                <div
                  className="absolute inset-0 flex items-end p-3"
                  style={{
                    backgroundColor: i % 4 === 0 ? '#C45B3A' : i % 4 === 1 ? '#2D6A4F' : i % 4 === 2 ? '#F5EDD6' : '#C9A84C',
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cline x1='0' y1='0' x2='40' y2='40' stroke='%23C45B3A' stroke-width='1' opacity='0.3'/%3E%3Cline x1='40' y1='0' x2='0' y2='40' stroke='%232D6A4F' stroke-width='1' opacity='0.3'/%3E%3Cline x1='20' y1='0' x2='20' y2='40' stroke='%23C9A84C' stroke-width='0.5' opacity='0.2'/%3E%3Cline x1='0' y1='20' x2='40' y2='20' stroke='%23C9A84C' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E\")"
                  }}
                >
                  <Instagram size={20} className="text-warm-white/60 group-hover:text-warm-white transition-colors" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Instagram size={14} />
              Voir tous nos looks
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Nos expertises</p>
              <h2 className="section-title mb-6">
                Un accompagnement<br />
                <span className="italic">sur mesure</span>
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
                Au-delà de la boutique, Odyssée vous propose un accompagnement complet : 
                conseil en stylisme, séance de relooking, shooting photo et bien plus encore.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group border border-sable p-5 hover:border-dore hover:bg-sable/30 transition-all duration-200"
                  >
                    <span className="text-dore text-lg block mb-2">{s.icon}</span>
                    <span className="font-sans text-xs tracking-wide uppercase text-charcoal group-hover:text-dore transition-colors">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>
              <Link href="/services" className="btn-primary mt-8 inline-flex">
                Tous nos services
              </Link>
            </div>

            {/* Carte cadeau */}
            <div className="bg-terracotta p-10 md:p-12">
              <p className="font-sans text-xs tracking-luxury uppercase text-dore mb-4">Idée cadeau</p>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-warm-white mb-4">
                La carte cadeau<br />
                <span className="italic">Odyssée</span>
              </h3>
              <p className="font-sans text-warm-white/60 text-sm leading-relaxed mb-8">
                Offrez le choix — vêtements, accessoires, relooking ou shooting photo. 
                Disponible de 50 à 200€, valable en boutique.
              </p>
              <div className="flex gap-4 mb-8">
                {[50, 100, 150, 200].map((amount) => (
                  <span key={amount} className="font-sans text-xs border border-warm-white/20 text-warm-white/60 px-3 py-1">
                    {amount}€
                  </span>
                ))}
              </div>
              <Link href="/carte-cadeau" className="btn-outline border-warm-white/30 text-warm-white hover:bg-dore hover:border-dore hover:text-charcoal">
                Commander une carte cadeau
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AVIS ─── */}
      <section className="py-20 bg-sable">
        <div className="container-luxury">
          <p className="section-subtitle text-center">Avis clientes</p>
          <h2 className="section-title text-center mb-12">
            Elles nous font confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-warm-white p-8 border border-sable">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="fill-dore text-dore" />
                  ))}
                </div>
                <p className="font-serif italic text-charcoal text-lg leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-sans text-xs tracking-wide uppercase text-charcoal/50">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 bg-warm-white border border-sable px-6 py-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-dore text-dore" />
                ))}
              </div>
              <span className="font-sans text-sm font-medium text-charcoal">{SITE_CONFIG.rating.value}/5</span>
              <span className="font-sans text-xs text-charcoal/50">· {SITE_CONFIG.rating.count} avis Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFO PRATIQUES + BOOKING ─── */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="section-subtitle">Nous rendre visite</p>
              <h2 className="section-title mb-8">
                Ouvert à Jarry,<br />
                <span className="italic">Baie-Mahault</span>
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-dore mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal mb-1">Adresse</p>
                    <address className="font-sans text-sm text-charcoal/70 not-italic leading-relaxed">
                      {SITE_CONFIG.address.full}
                    </address>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock size={18} className="text-dore mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal mb-1">Horaires</p>
                    <p className="font-sans text-sm text-charcoal/70">{SITE_CONFIG.hours}</p>
                    <p className="font-sans text-xs text-charcoal/50 mt-1">Parking gratuit</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone size={18} className="text-dore mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal mb-1">Contact</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-sm text-charcoal/70 hover:text-dore transition-colors block">
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                    <a href={SITE_CONFIG.whatsapp} className="font-sans text-sm text-charcoal/70 hover:text-dore transition-colors block">
                      WhatsApp {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Widget booking */}
            <div>
              <p className="section-subtitle">Réservation</p>
              <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-6">
                Prenez rendez-vous<br />
                <span className="italic">en ligne</span>
              </h3>
              <div className="border border-sable overflow-hidden" style={{ minHeight: '400px' }}>
                <iframe
                  src={SITE_CONFIG.booking}
                  width="100%"
                  height="450"
                  frameBorder="0"
                  title="Réservation Odyssée Showroom Privé"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}