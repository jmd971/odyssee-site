import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'
import { breadcrumbSchema, faqSchema, serviceSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/services/relooking'
const TITLE = 'Relooking vestimentaire femme à Jarry – Guadeloupe | Odyssée'
const DESC =
  'Relooking vestimentaire et conseil en image pour femme en Guadeloupe. Bilan de style, morphologie et couleurs, à Jarry, Baie-Mahault. Avec la boutique sur place.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Combien coûte un relooking vestimentaire ?',
    answer:
      'Le prix dépend de la formule : une séance de conseil ciblée n’a rien à voir avec un accompagnement complet incluant le tri de garde-robe et l’achat des pièces. En Guadeloupe, les tarifs pratiqués vont d’environ 80 € pour une séance courte à plusieurs centaines d’euros pour une journée complète. Chez Odyssée, le tarif vous est annoncé avant la séance, sans surprise : demandez-le par WhatsApp au ' + SITE_CONFIG.whatsappDisplay + '.',
  },
  {
    question: 'Comment se passe un relooking complet ?',
    answer:
      'En trois temps : un échange sur votre vie quotidienne et vos objectifs, un diagnostic de morphologie et de colorimétrie, puis la mise en pratique avec des essayages réels. Comptez deux à trois heures pour une formule complète.',
  },
  {
    question: 'Où faire un relooking en Guadeloupe ?',
    answer:
      'Odyssée reçoit à Jarry, Baie-Mahault, du mardi au samedi. La particularité : le conseil et la boutique sont au même endroit, donc vous repartez avec les pièces au lieu d’une liste de courses à faire ailleurs.',
  },
  {
    question: 'Faut-il acheter des vêtements après la séance ?',
    answer:
      'Non, aucune obligation. Beaucoup de clientes commencent par faire le tri dans ce qu’elles ont déjà — c’est souvent là que se trouvent les meilleures surprises.',
  },
  {
    question: 'Le relooking est-il réservé aux grandes occasions ?',
    answer:
      'Pas du tout. Les demandes les plus fréquentes concernent le quotidien : reprendre confiance après une période difficile, adapter sa garde-robe à un nouveau poste, ou simplement arrêter d’acheter des pièces qu’on ne porte jamais.',
  },
]

const etapes = [
  {
    n: '01',
    titre: 'On parle de vous, pas de tendances',
    texte:
      'Votre métier, votre rythme, ce que vous n’osez plus porter et pourquoi. Sans cette étape, un relooking n’est qu’un avis esthétique de plus.',
  },
  {
    n: '02',
    titre: 'Morphologie et couleurs',
    texte:
      'Quelles coupes servent votre silhouette, quelles teintes éclairent votre carnation. Des repères concrets que vous gardez pour toujours, y compris quand vous achetez ailleurs.',
  },
  {
    n: '03',
    titre: 'On essaie pour de vrai',
    texte:
      'La théorie s’arrête à la cabine. On teste des pièces, on garde ce qui fonctionne, on écarte le reste sans complaisance.',
  },
  {
    n: '04',
    titre: 'Vous repartez avec un plan',
    texte:
      'Les associations qui marchent, les pièces qui manquent vraiment, et celles à ne plus racheter. Utilisable dès le lendemain matin.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Services', path: '/services' },
    { name: 'Relooking vestimentaire', path: PATH },
  ]

  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqItems),
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Relooking vestimentaire et conseil en image',
            description: DESC,
            path: PATH,
            serviceType: 'Relooking vestimentaire',
          }),
        ]}
      />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Service · Jarry, Baie-Mahault"
        title={<>Relooking vestimentaire<br /><span className="italic text-or">&amp; conseil en image</span></>}
        intro="Un regard extérieur, honnête et bienveillant sur votre style — et la boutique juste à côté pour passer de l’idée à la tenue."
        ctaLabel="Réserver ma séance"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Le <strong>relooking vestimentaire</strong> chez Odyssée, à <strong>Jarry, Baie-Mahault</strong>,
            n’est pas une transformation spectaculaire pour la photo. C’est un travail sur votre{' '}
            <strong>image</strong> au quotidien : comprendre ce qui vous va, pourquoi certaines pièces
            ne sortent jamais du placard, et comment vous habiller sans y penser trois quarts d’heure
            chaque matin.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            Béatrice accompagne des femmes de toute la Guadeloupe — Baie-Mahault, Pointe-à-Pitre, Les
            Abymes, Le Gosier — en <strong>conseil en image</strong> comme en séance de{' '}
            <strong>personal shopping</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={IMAGES.miseEnBeaute.src}
              alt={IMAGES.miseEnBeaute.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-subtitle text-or">Ce qui nous distingue</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-6">
              Le conseil et la boutique<br /><span className="italic text-or">au même endroit</span>
            </h2>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-4">
              La plupart des accompagnements en image se terminent par une liste de recommandations,
              et c’est à vous de trouver les pièces. Le problème est connu : la liste reste dans le
              téléphone et rien ne change.
            </p>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-8">
              Ici, la séance se déroule dans la boutique. Ce qu’on identifie ensemble, vous pouvez
              l’essayer dans la foulée — sans aucune obligation d’achat.
            </p>
            <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver ma séance
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-10">Comment se déroule une séance</h2>
          <div className="space-y-8">
            {etapes.map((etape) => (
              <div key={etape.n} className="flex gap-6">
                <span className="font-serif text-3xl text-or/40 leading-none shrink-0">{etape.n}</span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{etape.titre}</h3>
                  <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{etape.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Combien ça coûte, concrètement</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            C’est la première question, et il n’y a aucune raison de l’esquiver. Le prix d’un
            relooking vestimentaire dépend de trois choses : la durée, ce qui est inclus (bilan seul,
            tri de garde-robe, accompagnement achat), et le fait qu’il y ait ou non un déplacement.
          </p>
          <p className="font-sans text-blanc-casse/70 leading-relaxed mt-4">
            Une séance courte, centrée sur un besoin précis — une cérémonie à préparer, par exemple —
            n’a pas le même coût qu’un accompagnement complet sur une demi-journée. Le tarif exact
            vous est communiqué avant de réserver, jamais après.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={SITE_CONFIG.whatsapp} className="btn-primary">
              Demander les tarifs sur WhatsApp
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline">
              Appeler le {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">À qui ça s’adresse</h2>
          <ul className="space-y-4 font-sans text-sm text-blanc-casse/70">
            <li className="flex gap-3">
              <span className="text-or" aria-hidden="true">✦</span>
              Vous avez une garde-robe pleine et l’impression de n’avoir rien à vous mettre.
            </li>
            <li className="flex gap-3">
              <span className="text-or" aria-hidden="true">✦</span>
              Votre silhouette a changé et vos repères d’avant ne fonctionnent plus.
            </li>
            <li className="flex gap-3">
              <span className="text-or" aria-hidden="true">✦</span>
              Vous prenez un poste où l’image compte, et vous voulez être à l’aise avec ça.
            </li>
            <li className="flex gap-3">
              <span className="text-or" aria-hidden="true">✦</span>
              Vous avez une grande occasion à préparer et vous ne voulez pas vous tromper. Voyez
              aussi les{' '}
              <Link href="/boutique/robes-ceremonie-invitee-mariage" className="text-or hover:underline">
                tenues de cérémonie
              </Link>.
            </li>
          </ul>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Conseil en stylisme',
            href: '/services/stylisme',
            desc: 'Plus court et plus ciblé qu’un relooking complet : une tenue, une occasion.',
          },
          {
            label: 'Shooting photo mode',
            href: '/services/shooting-photo',
            desc: 'Prolonger le relooking par des images qui vous ressemblent.',
          },
          {
            label: 'Combien coûte un relooking',
            href: '/blog/combien-coute-relooking-guadeloupe',
            desc: 'Le détail des formules et de ce qui fait varier la facture en Guadeloupe.',
          },
        ]}
      />

      <CtaFinal
        titre="On en parle ?"
        texte="Un message WhatsApp suffit pour savoir quelle formule correspond à votre situation."
      />
    </>
  )
}
