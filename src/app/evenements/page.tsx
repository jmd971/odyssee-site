import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES, type Visuel } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, JsonLd, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'
import { VideoYouTube } from '@/components/ui/VideoYouTube'

/** Short YouTube du défilé en boutique, déjà en ligne sur la chaîne Odyssée. */
const VIDEO_DEFILE = 'TGvInnqqODY'

const PATH = '/evenements'
const TITLE = 'Défilés de mode & événements en Guadeloupe | Odyssée'
const DESC =
  'Défilés de mode, ventes privées et soirées à la boutique Odyssée, à Jarry, Baie-Mahault. Retour sur nos éditions et informations pour être prévenue des prochaines.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

type Edition = {
  titre: string
  date: string
  lieu: string
  visuel: Visuel
  recit: string
  details?: string[]
}

/** Éditions passées — présentées comme telles, jamais comme des dates à venir. */
const EDITIONS: Edition[] = [
  {
    titre: 'Défilé de mode au Casino du Gosier',
    date: 'Mercredi 11 décembre 2024',
    lieu: 'Casino du Gosier, en partenariat avec le groupe Cogit et Big Fish',
    visuel: IMAGES.defile,
    recit:
      'Notre plus grosse production à ce jour, et la première hors les murs. Les collections ont défilé devant une salle complète, portées par des mannequins et par des femmes de Guadeloupe qui n’avaient jamais défilé — c’est ce mélange qui fait l’ambiance de nos soirées.',
    details: [
      'Artiste invitée : Alyssa Cité',
      'Ouverture des portes à 19h, entrée à 10 €',
      'Billetterie en ligne via allmol.com',
      'Lynnsha est passée en invitée surprise',
    ],
  },
  {
    titre: 'Défilé à la boutique de Jarry',
    date: 'Dimanche 10 novembre 2024',
    lieu: 'Boutique Odyssée, immeuble Les Lilas, Jarry',
    visuel: IMAGES.robeRougeSequins,
    recit:
      'Un défilé monté dans la boutique elle-même, entre les portants — et une centaine de personnes venues y assister. Défiler dans son propre magasin change la soirée : les pièces qui viennent de passer sont à portée de main, et l’essayage suit immédiatement.',
    details: [
      'Une centaine de personnes réunies dans la boutique',
      'Les pièces présentées disponibles à l’essayage dans la foulée',
    ],
  },
  {
    titre: 'Soirée dégustation à la boutique',
    date: 'Jeudi 16 janvier 2025, de 18h30 à 20h30',
    lieu: 'Boutique Odyssée, Jarry',
    visuel: IMAGES.degustation,
    recit:
      'Une soirée sans défilé : on ouvre la boutique en fin de journée, on fait déguster, et on essaie tranquillement. La formule est revenue plusieurs fois depuis, sur réservation, parce que le nombre de places est forcément limité.',
  },
]

const FORMATS = [
  {
    titre: 'Les défilés',
    texte:
      'Une à deux fois par an, en boutique ou dans un lieu partenaire. Les mannequins sont un mélange de professionnelles et de clientes, et les pièces présentées sont celles réellement disponibles — pas une collection de podium qu’on ne reverra jamais.',
  },
  {
    titre: 'Les ventes privées',
    texte:
      'Réservées aux clientes prévenues à l’avance, souvent en fin de saison. C’est le moment où les pièces uniques restantes partent, et où l’on prend le temps parce qu’il y a moins de monde.',
  },
  {
    titre: 'Les soirées à la boutique',
    texte:
      'Dégustation, présentation d’une marque qui arrive, rencontre avec un créateur. Format court, en fin de journée, sur réservation.',
  },
  {
    titre: 'Les privatisations',
    texte:
      'La boutique pour vous et votre groupe, sur un créneau dédié. C’est la formule anniversaire, mais elle marche aussi pour un enterrement de vie de jeune fille ou une sortie entre collègues.',
  },
]

const faqItems: FaqItem[] = [
  {
    question: 'Quand aura lieu le prochain défilé Odyssée ?',
    answer:
      'Aucune date n’est arrêtée à ce jour. Les défilés sont annoncés d’abord sur Instagram et par message aux clientes de la boutique, généralement trois à quatre semaines avant. Le plus sûr est de nous laisser votre numéro en boutique ou par WhatsApp au ' + SITE_CONFIG.whatsappDisplay + '.',
  },
  {
    question: 'Les événements sont-ils payants ?',
    answer:
      'Cela dépend du format. Les soirées à la boutique sont gratuites mais sur réservation, faute de place. Les défilés organisés dans un lieu extérieur ont une billetterie — celui du Casino du Gosier était à 10 €.',
  },
  {
    question: 'Peut-on défiler sans être mannequin ?',
    answer:
      'Oui, et c’est même ce qui fait la particularité de nos défilés. Une partie des passages est assurée par des clientes et des amies de la boutique. Si l’idée vous tente, dites-le-nous : nous constituons le casting quelques semaines avant.',
  },
  {
    question: 'Peut-on privatiser la boutique pour un événement ?',
    answer:
      'Oui, pour un anniversaire ou une sortie entre amies. Le détail est sur la page shopping anniversaire, et l’organisation se cale par WhatsApp.',
  },
]

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Défilé de mode Odyssée Showroom Privé à Jarry',
  description:
    'Grand défilé de mode organisé par Odyssée Showroom Privé dans sa boutique de Jarry, Baie-Mahault, en Guadeloupe.',
  thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_DEFILE}/maxresdefault.jpg`,
  uploadDate: '2024-11-28',
  duration: 'PT30S',
  embedUrl: `https://www.youtube.com/embed/${VIDEO_DEFILE}`,
  contentUrl: `https://www.youtube.com/shorts/${VIDEO_DEFILE}`,
  publisher: { '@id': `${SITE_CONFIG.url}/#boutique` },
}

export default function EvenementsPage() {
  const trail = [{ name: 'Événements', path: PATH }]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(faqItems), videoSchema]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Événements · Guadeloupe"
        title={<>Défilés de mode<br /><span className="italic text-or">&amp; soirées Odyssée</span></>}
        intro="Des défilés où les mannequins sont aussi des clientes, et des soirées où l’on essaie sans se presser. Voici ce qu’on organise, et comment être prévenue de la prochaine."
        ctaLabel="Être prévenue"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Odyssée organise des <strong>défilés de mode en Guadeloupe</strong>, des ventes privées
            et des soirées à la boutique de <strong>Jarry, Baie-Mahault</strong>. Ce ne sont pas des
            opérations de communication : les pièces qui passent sont celles du rayon, et une partie
            des mannequins sont des clientes.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-4">Le défilé en vidéo</h2>
          <p className="font-sans text-blanc-casse/60 mb-10 max-w-2xl leading-relaxed">
            L’annonce, puis la soirée elle-même. Deux façons de voir à quoi ressemble un défilé
            Odyssée avant de venir à la prochaine édition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <figure className="m-0">
              {/* Teaser heberge sur le site : 22 Mo, donc preload="none" est
                  indispensable — rien ne part avant que la visiteuse ne clique. */}
              <video
                controls
                playsInline
                preload="none"
                poster={IMAGES.miseEnBeaute.src}
                className="w-full aspect-[9/16] object-cover bg-noir"
              >
                <source src="/videos/teaser-defile-10-novembre-2024.mp4" type="video/mp4" />
                Votre navigateur ne peut pas lire cette vidéo.
              </video>
              <figcaption className="font-sans text-xs text-blanc-casse/40 mt-3">
                Le teaser qui annonçait le show mode du 10 novembre 2024 — réalisation @gotm97
              </figcaption>
            </figure>

            <div>
              <VideoYouTube
                id={VIDEO_DEFILE}
                titre="Défilé Odyssée Showroom Privé à Jarry"
                legende="Le défilé lui-même, à la boutique de Jarry, Baie-Mahault"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prochaine date — honnête plutôt que vide */}
      <section className="py-12 bg-noir-alt">
        <div className="container-luxury max-w-3xl text-center">
          <p className="section-subtitle text-or">Prochaine date</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-blanc-casse mb-4">
            Aucune date annoncée pour le moment
          </h2>
          <p className="font-sans text-sm text-blanc-casse/65 leading-relaxed max-w-xl mx-auto mb-8">
            Nos événements se décident quelques semaines à l’avance et les places partent vite.
            Laissez-nous un message : vous serez prévenue avant l’annonce publique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SITE_CONFIG.whatsapp} className="btn-primary">
              Me prévenir par WhatsApp
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Suivre sur Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-10">Ce que nous organisons</h2>
          <div className="space-y-8">
            {FORMATS.map((f) => (
              <div key={f.titre} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{f.titre}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{f.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury">
          <h2 className="section-title mb-4">Nos éditions passées</h2>
          <p className="font-sans text-blanc-casse/60 mb-12 max-w-2xl leading-relaxed">
            Pour vous donner une idée de l’ambiance avant de venir à la prochaine.
          </p>

          <div className="space-y-12">
            {EDITIONS.map((e, i) => (
              <article
                key={e.titre}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''}`}
              >
                <figure className="relative aspect-[4/5] overflow-hidden m-0">
                  <Image
                    src={e.visuel.src}
                    alt={e.visuel.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </figure>
                <div>
                  <p className="font-sans text-[11px] tracking-luxury uppercase text-or mb-3">
                    Édition passée
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-blanc-casse leading-tight mb-3">
                    {e.titre}
                  </h3>
                  <p className="font-sans text-sm text-blanc-casse/50 mb-1">{e.date}</p>
                  <p className="font-sans text-sm text-blanc-casse/50 mb-5">{e.lieu}</p>
                  <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{e.recit}</p>
                  {e.details && (
                    <ul className="mt-5 space-y-2">
                      {e.details.map((d) => (
                        <li key={d} className="flex gap-3 font-sans text-sm text-blanc-casse/60">
                          <span className="text-or shrink-0" aria-hidden="true">✦</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Défiler avec nous</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            À chaque défilé, une partie des passages est assurée par des clientes de la boutique.
            Aucune expérience n’est demandée : Béatrice choisit les tenues, cale les passages, et il
            y a toujours une répétition avant. Plusieurs femmes qui juraient ne jamais pouvoir le
            faire sont revenues à l’édition suivante.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-4">
            Si vous voulez en être, écrivez-nous sur{' '}
            <a href={SITE_CONFIG.whatsapp} className="text-or hover:underline">
              WhatsApp au {SITE_CONFIG.whatsappDisplay}
            </a>{' '}
            — le casting se constitue quelques semaines avant.
          </p>
        </div>
      </section>

      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'La galerie',
            href: '/galerie',
            desc: 'Les tenues vues en défilé et en boutique, réunies au même endroit.',
          },
          {
            label: 'Shopping anniversaire',
            href: '/services/shopping-anniversaire',
            desc: 'Privatiser la boutique pour votre groupe, sans attendre un événement.',
          },
          {
            label: 'Robes de soirée & cocktail',
            href: '/boutique/robes-soiree-cocktail',
            desc: 'Ce qu’il faut porter pour venir à la prochaine soirée.',
          },
        ]}
      />

      <CtaFinal
        titre="Ne manquez pas la prochaine"
        texte="Un message WhatsApp suffit pour être sur la liste des invitées prévenues en avance."
      />
    </>
  )
}
