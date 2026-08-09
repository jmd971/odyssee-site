import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'
import { breadcrumbSchema, faqSchema, serviceSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/services/shopping-anniversaire'
const TITLE = 'Shopping anniversaire entre amies – Guadeloupe | Odyssée'
const DESC =
  'Fêtez votre anniversaire à la boutique Odyssée, à Jarry. Un après-midi shopping entre amies avec conseil personnalisé, en Guadeloupe.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Comment organiser un anniversaire à la boutique ?',
    answer:
      'Vous nous dites la date souhaitée, le nombre de personnes et l’ambiance voulue. Nous bloquons le créneau et préparons la boutique pour votre groupe. Un message WhatsApp au ' + SITE_CONFIG.whatsappDisplay + ' suffit pour lancer l’organisation.',
  },
  {
    question: 'Combien de personnes peut-on inviter ?',
    answer:
      'Le format fonctionne bien de trois à une dizaine de personnes. Au-delà, l’essayage devient moins confortable et l’intérêt du conseil personnalisé se perd.',
  },
  {
    question: 'Y a-t-il un minimum d’achat ?',
    answer:
      'Non. Certaines viennent pour essayer et passer un bon moment, d’autres repartent avec plusieurs pièces. Les deux nous vont.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Services', path: '/services' },
    { name: 'Shopping anniversaire', path: PATH },
  ]

  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqItems),
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Shopping anniversaire entre amies',
            description: DESC,
            path: PATH,
            serviceType: 'Événement privé en boutique',
          }),
        ]}
      />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Service · Jarry, Baie-Mahault"
        title={<>Shopping anniversaire<br /><span className="italic text-or">entre amies</span></>}
        intro="La boutique pour vous et votre groupe, le temps d’un après-midi — essayages, conseils et fous rires compris."
        ctaLabel="Organiser mon anniversaire"
      />

      <section className="py-16">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
              Un anniversaire au restaurant, tout le monde en a déjà fait. Un après-midi où vos amies
              vous voient essayer, où l’on vous dit franchement ce qui vous va, où chacune ressort
              avec une idée d’elle-même un peu différente — ça, c’est plus rare.
            </p>
            <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
              Le principe est simple : on bloque un créneau à la boutique de <strong>Jarry</strong>,
              on prépare une sélection selon les styles annoncés, et Béatrice s’occupe du reste.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={IMAGES.vesteImprimee.src}
              alt={IMAGES.vesteImprimee.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Comment ça se passe</h2>
          <div className="space-y-8">
            {[
              { titre: 'On cale la date', texte: 'De préférence en dehors des heures de forte affluence, pour que le groupe ait la boutique pour lui.' },
              { titre: 'On prépare la sélection', texte: 'Vous nous donnez quelques indications sur les styles et les tailles, on sort les pièces en amont.' },
              { titre: 'On profite', texte: 'Essayages, avis croisés, photos. Sans obligation d’achat, et sans pression de temps.' },
            ].map((item) => (
              <div key={item.titre} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.titre}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Shooting photo mode',
            href: '/services/shooting-photo',
            desc: 'Prolonger l’après-midi par une séance photo de groupe.',
          },
          {
            label: 'Carte cadeau',
            href: '/carte-cadeau',
            desc: 'Pour celles qui veulent offrir plutôt qu’organiser.',
          },
          {
            label: 'Vêtements femme',
            href: '/boutique/vetements-femme',
            desc: 'Ce que vos invitées trouveront en boutique ce jour-là.',
          },
        ]}
      />

      <CtaFinal
        titre="Une date en tête ?"
        texte="Dites-nous quand et combien vous serez, on s’occupe de préparer la boutique."
      />
    </>
  )
}
