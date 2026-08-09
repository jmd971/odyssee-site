import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Clock, Phone, Instagram, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { InstagramLooks } from '@/components/ui/InstagramLooks'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
  description: 'Boutique de mode femme à Jarry, Guadeloupe. Robes de soirée, prêt-à-porter chic et accessoires. Conseil personnalisé par Béatrice.',
  alternates: { canonical: 'https://odysseebybea.fr' },
}

const categories = [
  {
    title: 'Robes de soirée',
    sub: '& cocktail',
    href: '/boutique/robes-soiree-cocktail',
    desc: 'Pour une soirée, un gala ou une sortie habillée',
    img: '/images/vetements.webp',
    alt: 'Robe imprimée bleue et blanche à volants portée en extérieur en Guadeloupe',
  },
  {
    title: 'Cérémonie',
    sub: '& invitée de mariage',
    href: '/boutique/robes-ceremonie-invitee-mariage',
    desc: 'Invitée, témoin ou mère des mariés : la tenue qui tient la journée',
    img: '/images/total-look-blanc.webp',
    alt: 'Total look blanc en broderie anglaise porté sur un ponton en Guadeloupe',
  },
  {
    title: 'Vêtements',
    sub: 'femme',
    href: '/boutique/vetements-femme',
    desc: 'Prêt-à-porter du quotidien, en petites séries',
    img: '/images/ensemble-imprime-tropical.webp',
    alt: 'Ensemble long imprimé bleu et ocre avec pantalon large, porté en Guadeloupe',
  },
  {
    title: 'Accessoires',
    sub: '& bijoux',
    href: '/boutique/accessoires-bijoux',
    desc: 'Boucles d’oreilles artisanales, sacs et pièces uniques',
    img: '/images/bijoux.webp',
    alt: 'Boucles d’oreilles artisanales à pompons de raphia turquoise et perles bleues',
  },
]

const services = [
  { title: 'Stylisme', href: '/services/stylisme', img: '/images/stylisme.webp', alt: 'Stylisme personnalisé Odyssée' },
  { title: 'Relooking', href: '/services/relooking', img: '/images/relooking.webp', alt: 'Relooking sur mesure Odyssée' },
  { title: 'Shooting photo', href: '/services/shooting-photo', img: '/images/shooting.webp', alt: 'Shooting photo mode Odyssée' },
  { title: 'Shopping anniversaire', href: '/services/shopping-anniversaire', img: '/images/anniversaire.webp', alt: 'Shopping anniversaire Odyssée' },
]

const testimonials = [
  {
    text: 'Béatrice a un œil extraordinaire pour la mode. Elle m\'a trouvé la robe parfaite pour mon mariage. Service impeccable et vraiment personnel.',
    author: 'Marie-Christine L.',
  },
  {
    text: 'Des pièces qu\'on ne trouve nulle part ailleurs en Guadeloupe, et un conseil vraiment personnalisé. Je recommande à 100%.',
    author: 'Sandrine M.',
  },
  {
    text: 'J\'ai découvert Odyssée pour un événement et je ne peux plus m\'en passer. L\'ambiance est incomparable.',
    author: 'Nathalie P.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] bg-noir flex items-center overflow-hidden">
        {/* Halo dégradé décoratif */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #E8572A 0%, #C4359A 60%, transparent 80%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} />

        <div className="container-luxury relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Tag localisation */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="gradient-line w-8" />
              <span className="font-sans text-[11px] tracking-luxury uppercase text-blanc-casse/50">
                Jarry · Baie-Mahault · Guadeloupe
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-blanc-casse leading-[1.05] mb-8">
              La mode<br />
              <span className="text-gradient">caribéenne</span><br />
              <span className="italic text-blanc-casse/80 text-4xl md:text-5xl">à Jarry</span>
            </h1>

            <p className="font-sans text-blanc-casse/50 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Vivez une expérience shopping unique en Guadeloupe : vêtements, accessoires et relooking dans notre showroom à Jarry
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver un essayage
              </a>
              <Link href="/boutique" className="btn-outline-white">
                Découvrir la boutique
              </Link>
            </div>

            <p className="font-sans text-sm text-blanc-casse/45 mt-6 max-w-lg leading-relaxed">
              Pas besoin de rendez-vous pour venir : la boutique est ouverte à toutes,
              du mardi au samedi. Béatrice vous conseille et vous accompagne dans vos choix.
              La réservation ne sert qu’à bloquer un créneau rien que pour vous.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-blanc-casse/5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-or text-or" />
                ))}
              </div>
              <span className="font-sans text-sm text-blanc-casse/60">
                <strong className="text-or text-base">{SITE_CONFIG.rating.value}</strong>/5 · {SITE_CONFIG.rating.count} avis Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANDEAU DÉFILANT ─── */}
      <div className="relative py-3 overflow-hidden border-y border-blanc-casse/5">
        <div className="gradient-line absolute top-0 left-0 right-0" />
        <div className="flex animate-marquee whitespace-nowrap">
          {['Robes de Soirée', 'Prêt-à-Porter', 'Accessoires', 'Bijoux Artisanaux', 'Relooking', 'Stylisme', 'Guadeloupe', 'Antilles', 'Jarry', 'Conseil Personnalisé', 'by Béatrice'].map((item, i) => (
            <span key={i} className="font-sans text-[11px] tracking-luxury uppercase text-blanc-casse/30 mx-6">
              {item} <span className="text-or mx-4">✦</span>
            </span>
          ))}
          {['Robes de Soirée', 'Prêt-à-Porter', 'Accessoires', 'Bijoux Artisanaux', 'Relooking', 'Stylisme', 'Guadeloupe', 'Antilles', 'Jarry', 'Conseil Personnalisé', 'by Béatrice'].map((item, i) => (
            <span key={`b${i}`} className="font-sans text-[11px] tracking-luxury uppercase text-blanc-casse/30 mx-6">
              {item} <span className="text-or mx-4">✦</span>
            </span>
          ))}
        </div>
        <div className="gradient-line absolute bottom-0 left-0 right-0" />
      </div>

      {/* ─── INTRO BÉATRICE ─── */}
      <section className="py-24 md:py-32">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-subtitle">Notre histoire</span>
            <h2 className="section-title text-blanc-casse mb-6">
              Un showroom unique,<br />
              <span className="italic text-gradient">une femme de caractère</span>
            </h2>
            <p className="font-sans text-blanc-casse/50 leading-relaxed text-base md:text-lg">
              Odyssée, c&apos;est l&apos;univers mode de Béatrice — une Guadeloupéenne passionnée
              qui sélectionne chaque pièce avec une exigence rare. Robes de soirée,
              vêtements tendance et accessoires choisis pour la femme antillaise moderne :
              élégante, assumée, singulière.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-12" style={{ background: 'var(--gradient-odyssee-h)' }} />
              <span className="font-serif italic text-or text-2xl">by Béa</span>
              <div className="h-px w-12" style={{ background: 'var(--gradient-odyssee-h)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATÉGORIES ─── */}
      <section className="pb-24">
        <div className="container-luxury">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="section-subtitle">Notre sélection</span>
              <h2 className="section-title text-blanc-casse">Explorez<br /><span className="italic">nos collections</span></h2>
            </div>
            <Link href="/boutique" className="hidden md:flex items-center gap-2 font-sans text-xs tracking-wide text-blanc-casse/40 hover:text-or transition-colors uppercase">
              Tout voir <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative border border-blanc-casse/5 hover:border-or/30 aspect-[3/4] flex flex-col justify-end overflow-hidden transition-all duration-300">
                <Image
                  src={cat.img}
                  alt={cat.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/30 to-transparent" />
                <div className="relative z-10 p-8">
                  <p className="font-sans text-[10px] tracking-luxury uppercase text-or/80 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Découvrir →</p>
                  <h3 className="font-serif text-3xl font-light text-blanc-casse leading-tight">{cat.title}<br /><span className="italic">{cat.sub}</span></h3>
                  <p className="font-sans text-xs text-blanc-casse/50 mt-2">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM / LOOKS ─── */}
      <section className="py-20 border-y border-blanc-casse/5">
        <div className="container-luxury">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="section-subtitle">Nos derniers looks</span>
              <h2 className="section-title text-blanc-casse">Sur Instagram</h2>
            </div>
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-blanc-casse/40 hover:text-or transition-colors">
              <Instagram size={14} />
              @odyssee.boutique
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { img: '/images/look-jean-boutique.jpg', alt: 'Bustier en jean et boucles d’oreilles en denim, dans la boutique de Jarry' },
              { img: '/images/robe-longue-imprimee-ete.jpg', alt: 'Robe longue bleue à imprimé cabines de plage, essayée en boutique' },
              { img: '/images/chemises-imprimees-jean.jpg', alt: 'Chemises imprimées à motif perroquet portées avec des jeans' },
              { img: '/images/veste-blanche-patchwork.jpg', alt: 'Veste blanche à empiècements patchwork portée avec un jean' },
              { img: '/images/robe-sequins-argent.jpg', alt: 'Robe courte à sequins argentés portée dans la boutique' },
              { img: '/images/duo-wax-jean.jpg', alt: 'Jupe boule en wax jaune et veste grise à empiècements wax' },
              { img: '/images/nouvelles-pieces-boutique.jpg', alt: 'Nouvelles pièces arrivées à la boutique Odyssée à Jarry' },
              { img: '/images/accessoires.webp', alt: 'Bijoux et sandales ornées présentés en boutique à Jarry' },
            ].map((item, i) => (
              <a key={i} href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group">
                <Image src={item.img} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-noir/40 group-hover:bg-noir/10 transition-all duration-300 flex items-center justify-center">
                  <Instagram size={22} className="text-blanc-casse/0 group-hover:text-blanc-casse transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2">
              <Instagram size={14} />
              Voir tous nos looks
            </a>
          </div>
        </div>
      </section>

      <InstagramLooks />

      {/* ─── SERVICES + CARTE CADEAU ─── */}
      <section className="py-24">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-subtitle">Nos expertises</span>
              <h2 className="section-title text-blanc-casse mb-6">
                Un accompagnement<br />
                <span className="italic">sur mesure</span>
              </h2>
              <p className="font-sans text-blanc-casse/50 leading-relaxed mb-10">
                Au-delà de la boutique, Béatrice vous propose un accompagnement complet
                pour révéler votre style — conseil personnalisé, relooking, shooting photo
                et bien plus encore.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="group relative aspect-square overflow-hidden border border-blanc-casse/10 hover:border-or/30 transition-all duration-300">
                    <Image src={s.img} alt={s.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
                    <div className="absolute inset-0 bg-noir/60 group-hover:bg-noir/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <span className="text-or text-sm mb-1">✦</span>
                      <span className="font-sans text-xs tracking-wide uppercase text-blanc-casse group-hover:text-or transition-colors">{s.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/services" className="btn-outline mt-8 inline-flex">Tous nos services</Link>
            </div>

            {/* Carte cadeau */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative overflow-hidden bg-noir-alt border border-or/25">
              <div className="relative aspect-square overflow-hidden hidden lg:block">
                <Image src="/images/carte-cadeau.webp" alt="Carte cadeau Odyssée Showroom Privé" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 right-4 w-32 h-32 border border-blanc-casse/30 rounded-full" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border border-blanc-casse/30 rounded-full" />
              </div>
              <div className="relative p-10 md:p-12">
                <span className="font-sans text-[10px] tracking-luxury uppercase text-blanc-casse/70 mb-4 block">Idée cadeau</span>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-4">
                  La carte cadeau<br />
                  <span className="italic">Odyssée</span>
                </h3>
                <p className="font-sans text-blanc-casse/70 text-sm leading-relaxed mb-8">
                  Offrez le choix — vêtements, accessoires, relooking ou shooting photo.
                  Disponible de 50 à 200€.
                </p>
                <div className="flex gap-3 mb-8 flex-wrap">
                  {[50, 100, 150, 200].map((amount) => (
                    <span key={amount} className="font-sans text-xs border border-blanc-casse/40 text-blanc-casse/80 px-3 py-1.5">
                      {amount}€
                    </span>
                  ))}
                </div>
                <Link href="/carte-cadeau" className="inline-flex items-center justify-center px-8 py-3 bg-noir text-blanc-casse font-sans text-sm tracking-luxury uppercase hover:bg-blanc-casse hover:text-noir transition-all duration-300">
                  Commander
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AVIS ─── */}
      <section className="py-20 bg-noir-alt border-y border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle text-center block">Avis clientes</span>
          <h2 className="section-title text-blanc-casse text-center mb-14">
            Elles nous font<br /><span className="italic text-gradient">confiance</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-blanc-casse/5 p-8 relative">
                <div className="gradient-line absolute top-0 left-0 right-0" />
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-or text-or" />
                  ))}
                </div>
                <p className="font-serif italic text-blanc-casse/70 text-lg leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-sans text-[10px] tracking-luxury uppercase text-blanc-casse/30">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 border border-blanc-casse/10 px-6 py-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-or text-or" />
                ))}
              </div>
              <span className="font-sans text-sm text-or font-medium">{SITE_CONFIG.rating.value}/5</span>
              <span className="font-sans text-xs text-blanc-casse/30">· {SITE_CONFIG.rating.count} avis Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="py-24">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-subtitle">Nous rendre visite</span>
              <h2 className="section-title text-blanc-casse mb-10">
                Venez nous<br />
                <span className="italic">découvrir à Jarry</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={16} className="text-or mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-medium text-blanc-casse mb-1 tracking-wide uppercase">Adresse</p>
                    <address className="font-sans text-sm text-blanc-casse/50 not-italic leading-relaxed">
                      {SITE_CONFIG.address.full}
                    </address>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={16} className="text-or mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-medium text-blanc-casse mb-1 tracking-wide uppercase">Horaires</p>
                    <p className="font-sans text-sm text-blanc-casse/50">{SITE_CONFIG.hours}</p>
                    <p className="font-sans text-xs text-blanc-casse/30 mt-1">Parking gratuit · Prise de RDV possible</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={16} className="text-or mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-medium text-blanc-casse mb-1 tracking-wide uppercase">Contact</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-sm text-blanc-casse/50 hover:text-or transition-colors block">{SITE_CONFIG.phoneDisplay}</a>
                    <a href={SITE_CONFIG.whatsapp} className="font-sans text-sm text-blanc-casse/50 hover:text-or transition-colors block">WhatsApp {SITE_CONFIG.whatsappDisplay}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking */}
            <div>
              <span className="section-subtitle">Réservation</span>
              <h3 className="font-serif text-2xl text-blanc-casse mb-3">
                Réserver un créneau<br /><span className="italic">rien que pour vous</span>
              </h3>
              <div className="border border-blanc-casse/10 overflow-hidden relative">
                <div className="gradient-line absolute top-0 left-0 right-0" />
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
