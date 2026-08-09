import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { GALERIE_ACCESSOIRES } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, Galerie, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/boutique/accessoires-bijoux'
const TITLE = 'Bijoux artisanaux & accessoires femme – Guadeloupe | Odyssée'
const DESC =
  'Bijoux artisanaux, boucles d’oreilles en raphia, sacs et accessoires femme en Guadeloupe. Pièces sélectionnées et souvent uniques, à Jarry, Baie-Mahault.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Où acheter des bijoux artisanaux en Guadeloupe ?',
    answer:
      'Odyssée sélectionne des bijoux faits main — boucles d’oreilles en raphia, perles, pièces à pompons — disponibles à la boutique de Jarry, Baie-Mahault, du mardi au samedi de 10h à 19h.',
  },
  {
    question: 'Vos bijoux sont-ils fabriqués localement ?',
    answer:
      'Une partie vient de créateurs et d’artisans, le reste est sélectionné pièce par pièce pour sa finition. Nous vous disons toujours l’origine d’une pièce quand vous la demandez — pas de flou là-dessus.',
  },
  {
    question: 'Peut-on assortir les accessoires à une tenue achetée en boutique ?',
    answer:
      'C’est même l’intérêt de venir sur place. Béatrice fait l’essayage complet : la robe, les boucles d’oreilles, le sac et les chaussures ensemble, sous la même lumière.',
  },
  {
    question: 'Proposez-vous des sacs à main ?',
    answer:
      'Oui, en petite sélection et en quantité limitée. Les modèles tournent, donc le plus fiable est de demander sur WhatsApp au ' + SITE_CONFIG.whatsappDisplay + ' ce qui est disponible en ce moment.',
  },
]

const familles = [
  {
    titre: 'Boucles d’oreilles',
    texte:
      'Raphia, perles, pompons, formes travaillées. C’est la pièce qui transforme une tenue simple en tenue habillée, et celle qui part le plus vite avant les cérémonies.',
  },
  {
    titre: 'Colliers et parures',
    texte:
      'Pièces à porter seules sur une encolure dégagée. On évite d’empiler : un bijou fort suffit quand la robe est déjà imprimée.',
  },
  {
    titre: 'Sacs et petite maroquinerie',
    texte:
      'Formats pochette et sacs de journée, en sélection limitée. Choisis pour tenir dans le climat d’ici, pas seulement pour la photo.',
  },
  {
    titre: 'Sandales et pièces ornées',
    texte:
      'Modèles ornés de pierres et de perles, à mi-chemin entre la sandale de plage et la sandale habillée — utile en Guadeloupe où les deux se croisent souvent.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Boutique', path: '/boutique' },
    { name: 'Accessoires & bijoux', path: PATH },
  ]

  return (
    <>
      <JsonLd data={[faqSchema(faqItems), breadcrumbSchema(trail)]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Boutique · Jarry, Guadeloupe"
        title={<>Bijoux artisanaux<br /><span className="italic text-or">&amp; accessoires femme</span></>}
        intro="Des pièces faites main et sélectionnées à l’unité, à voir et à essayer à Jarry, Baie-Mahault."
        ctaLabel="Venir voir les pièces"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Chez Odyssée, à <strong>Jarry</strong>, les <strong>bijoux artisanaux</strong> ne sont
            pas un rayon d’appoint. Boucles d’oreilles en raphia, perles colorées, pièces à pompons :
            ce sont souvent elles qui font basculer une tenue.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            La sélection est volontairement courte. Beaucoup de modèles arrivent en quelques
            exemplaires seulement, ce qui veut dire deux choses : vous avez peu de chances de croiser
            la même paire à la même soirée, et si une pièce vous plaît, il ne faut pas trop attendre.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-10">Les pièces en boutique</h2>
          <Galerie
            visuels={GALERIE_ACCESSOIRES}
            cols="md:grid-cols-3"
            legende="Sélection photographiée en boutique — la disponibilité change au fil des arrivages"
          />
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Ce que vous trouvez</h2>
          <div className="space-y-8">
            {familles.map((item) => (
              <div key={item.titre} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.titre}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Un bijou, ça se choisit avec la tenue</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            L’erreur la plus fréquente est d’acheter les accessoires séparément, des semaines après
            la robe. La couleur ne tombe pas juste, la longueur des boucles se bat avec l’encolure,
            et la pièce finit dans un tiroir.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-4">
            Si vous préparez une cérémonie, venez avec votre tenue ou choisissez-la ici : les{' '}
            <Link href="/boutique/robes-ceremonie-invitee-mariage" className="text-or hover:underline">
              robes de cérémonie
            </Link>{' '}
            et les accessoires sont dans la même pièce, sous la même lumière.
          </p>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Vêtements femme',
            href: '/boutique/vetements-femme',
            desc: 'Le prêt-à-porter de la boutique, à Jarry, Baie-Mahault.',
          },
          {
            label: 'Robes de soirée & cocktail',
            href: '/boutique/robes-soiree-cocktail',
            desc: 'Les tenues sur lesquelles ces bijoux prennent tout leur sens.',
          },
          {
            label: 'Carte cadeau',
            href: '/carte-cadeau',
            desc: 'Un bijou fait un beau cadeau, mais le choix en fait un meilleur.',
          },
        ]}
      />

      <CtaFinal
        titre="Envie de voir les pièces du moment ?"
        texte="Passez à Jarry du mardi au samedi, ou demandez-nous des photos sur WhatsApp."
      />
    </>
  )
}
