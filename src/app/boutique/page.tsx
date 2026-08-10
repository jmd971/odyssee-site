import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'
import { Breadcrumb, CtaFinal, JsonLd, OuNousTrouver, PageHero } from '@/components/ui/blocks'

const PATH = '/boutique'
const TITLE = 'Boutique mode femme à Jarry – Guadeloupe | Odyssée'
const DESC =
  'Boutique de mode femme à Jarry, Baie-Mahault : robes de soirée, tenues de cérémonie, prêt-à-porter et bijoux artisanaux. Entrée libre du mardi au samedi.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const categories = [
  {
    titre: 'Robes de soirée & cocktail',
    href: '/boutique/robes-soiree-cocktail',
    description:
      'Robes longues, courtes et mi-longues pour une soirée, un gala ou une sortie habillée en Guadeloupe.',
    visuel: IMAGES.robeImprimee,
  },
  {
    titre: 'Robes de cérémonie & invitée de mariage',
    href: '/boutique/robes-ceremonie-invitee-mariage',
    description:
      'Vous êtes invitée, témoin ou mère des mariés : les tenues pensées pour tenir toute la journée.',
    visuel: IMAGES.totalLookBlanc,
  },
  {
    titre: 'Vêtements femme',
    href: '/boutique/vetements-femme',
    description:
      'Prêt-à-porter du quotidien : ensembles coordonnés, robes fluides et pièces souvent uniques.',
    visuel: IMAGES.ensembleImprime,
  },
  {
    titre: 'Accessoires & bijoux',
    href: '/boutique/accessoires-bijoux',
    description:
      'Boucles d’oreilles artisanales, colliers, sacs et sandales ornées, sélectionnés à l’unité.',
    visuel: IMAGES.bijoux,
  },
]

export default function BoutiquePage() {
  const trail = [{ name: 'Boutique', path: PATH }]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          itemListSchema(
            'Catégories de la boutique Odyssée',
            categories.map((c) => ({ name: c.titre, path: c.href })),
          ),
        ]}
      />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Boutique · Jarry, Baie-Mahault"
        title={<>La boutique<br /><span className="italic text-or">Odyssée</span></>}
        intro="Quatre univers, une même règle : des pièces choisies à l’unité, et quelqu’un pour vous dire honnêtement ce qui vous va."
        ctaLabel="Venir en boutique"
        ctaHref={SITE_CONFIG.maps}
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Odyssée Showroom Privé est une <strong>boutique de mode femme à Jarry</strong>, dans la
            zone de Baie-Mahault, en <strong>Guadeloupe</strong>. On y vient pour une occasion
            précise — un mariage, une soirée — ou simplement pour renouveler sa garde-robe avec des
            pièces qu’on ne croisera pas partout.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.visuel.src}
                  alt={cat.visuel.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-noir/40 group-hover:bg-noir/20 transition-colors duration-300" />
              </div>
              <h2 className="font-serif text-2xl text-blanc-casse mt-4 group-hover:text-or transition-colors">
                {cat.titre}
              </h2>
              <p className="font-sans text-sm text-blanc-casse/60 leading-relaxed mt-2">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <OuNousTrouver />

      <CtaFinal
        titre="Envie de voir les pièces du moment ?"
        texte="Entrée libre du mardi au samedi, 10h–19h. Ou écrivez-nous pour savoir ce qui est arrivé cette semaine."
      />
    </>
  )
}
