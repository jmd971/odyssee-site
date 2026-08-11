import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Clock, Phone, Instagram, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'
import { InstagramLooks } from '@/components/ui/InstagramLooks'
import { LaBoutique } from '@/components/ui/LaBoutique'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Odyssée Showroom Privé – Boutique vêtements femme à Jarry',
  description: 'Boutique de mode femme à Jarry, Guadeloupe. Robes de soirée, prêt-à-porter chic et accessoires. Conseil personnalisé par Béatrice.',
  alternates: { canonical: 'https://www.odysseebybea.fr' },
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
        {/* Un site de mode doit montrer un vetement des le premier ecran. */}
        <Image
          src={IMAGES.egerie.src}
          alt={IMAGES.egerie.alt}
          fill
          priority
          className="object-cover object-[62%_18%] opacity-45 lg:opacity-70"
          sizes="100vw"
        />
        {/* La photo est claire — robe et murs blancs — donc l'assombrissement
            doit etre plus franc que sur un visuel sombre pour garder le texte lisible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/92 to-noir/45" />
        <div className="absolute inset-0 bg-noir/25" />
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
              Boutique de mode<br />
              <span className="text-or">femme</span><br />
              <span className="italic text-blanc-casse/80 text-4xl md:text-5xl">à Jarry, Guadeloupe</span>
            </h1>

            <p className="font-sans text-blanc-casse/50 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Prêt-à-porter, tenues de cérémonie, accessoires et bijoux. Des pièces choisies
              à l’unité, souvent en un seul exemplaire. Béatrice vous dit franchement ce qui
              vous va, et la boutique est ouverte à toutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/boutique" className="btn-primary">
                Découvrir la boutique
              </Link>
              <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                Réserver un essayage
              </a>
            </div>

            <p className="font-sans text-sm text-blanc-casse/75 mt-6 max-w-lg leading-relaxed">
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
      <div
        className="marquee-zone relative py-3 overflow-hidden border-y border-blanc-casse/5"
        aria-hidden="true"
      >
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
      <section className="py-24 md:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] gap-12 lg:gap-16 items-center max-w-4xl mx-auto">

            {/* preload metadata : le fichier ne pese que 1,5 Mo, on peut donc
                afficher la premiere image sans attendre un clic. */}
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-[9/16] object-cover bg-noir"
            >
              <source src="/videos/beatrice-odyssee.mp4" type="video/mp4" />
              Votre navigateur ne peut pas lire cette vidéo.
            </video>

            <div>
              <span className="section-subtitle">Notre histoire</span>
              <h2 className="section-title text-blanc-casse mb-6">
                Béatrice,<br />
                <span className="italic text-or">l’œil d’Odyssée</span>
              </h2>
              <p className="font-sans text-blanc-casse/65 leading-relaxed text-base md:text-lg mb-4">
                Odyssée, c’est son univers. Béatrice choisit chaque pièce elle-même, en
                petites quantités. Et quand une robe ne vous va pas, elle vous le dit plutôt
                que de vous la vendre.
              </p>
              <p className="font-sans text-blanc-casse/55 leading-relaxed">
                C’est elle que vous trouverez en boutique, à Jarry, du mardi au samedi.
                Elle vous conseille, elle prend le temps qu’il faut. Le « privé » du
                showroom, c’est ça.
              </p>
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

      <LaBoutique />

      <InstagramLooks />

      {/* ─── SERVICES ─── */}
      <section className="py-24">
        <div className="container-luxury">
          <div className="max-w-2xl mb-12">
            <span className="section-subtitle">Nos expertises</span>
            <h2 className="section-title text-blanc-casse mb-6">
              Un accompagnement<br />
              <span className="italic">sur mesure</span>
            </h2>
            <p className="font-sans text-blanc-casse/55 leading-relaxed">
              Au-delà de la boutique, Béatrice vous accompagne pour révéler votre style :
              conseil en stylisme, relooking vestimentaire, shooting photo, ou un après-midi
              entre copines pour un anniversaire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative aspect-[3/4] overflow-hidden border border-blanc-casse/10 hover:border-or/40 transition-colors duration-300"
              >
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-noir/55 group-hover:bg-noir/35 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-or text-sm mb-1" aria-hidden="true">✦</span>
                  <span className="font-sans text-xs tracking-wide uppercase text-blanc-casse group-hover:text-or transition-colors">
                    {s.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/services" className="btn-outline mt-10 inline-flex">Tous nos services</Link>
        </div>
      </section>

      {/* ─── CARTE CADEAU ─── */}
      <section className="pb-24">
        <div className="container-luxury">
          {/* Deux colonnes de meme hauteur : l'image remplit sa moitie au lieu
              de laisser un vide sous un carre trop petit. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-or/25 overflow-hidden">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={IMAGES.accessoires.src}
                alt={IMAGES.accessoires.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-noir-alt p-10 md:p-14 flex flex-col justify-center">
              <span className="section-subtitle">Idée cadeau</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-4">
                La carte cadeau<br /><span className="italic text-or">Odyssée</span>
              </h2>
              <p className="font-sans text-blanc-casse/65 text-sm leading-relaxed mb-8">
                Offrez le choix plutôt qu’une pièce dont vous n’êtes pas sûre. Elle s’utilise
                sur les vêtements, les accessoires, un relooking ou un shooting photo, à la
                boutique de Jarry.
              </p>
              <div className="flex gap-3 mb-8 flex-wrap">
                {[50, 100, 150, 200].map((montant) => (
                  <span
                    key={montant}
                    className="font-sans text-xs border border-or/40 text-or px-3 py-1.5"
                  >
                    {montant} €
                  </span>
                ))}
              </div>
              <Link href="/carte-cadeau" className="btn-primary self-start">
                Commander une carte
              </Link>
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
