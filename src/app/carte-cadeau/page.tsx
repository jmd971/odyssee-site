import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/carte-cadeau'
const TITLE = 'Carte cadeau mode & relooking – Guadeloupe | Odyssée'
const DESC =
  'Offrez une carte cadeau Odyssée : vêtements, accessoires, relooking ou séance photo à Jarry. De 50 à 200 €, valable en boutique en Guadeloupe.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const MONTANTS = [50, 100, 150, 200]

const faqItems: FaqItem[] = [
  {
    question: 'Comment commander une carte cadeau ?',
    answer:
      'Par WhatsApp au ' + SITE_CONFIG.whatsappDisplay + ', par téléphone au ' + SITE_CONFIG.phoneDisplay + ', ou directement à la boutique de Jarry du mardi au samedi. Nous préparons la carte au montant de votre choix.',
  },
  {
    question: 'Quels montants sont disponibles ?',
    answer:
      'Quatre montants : 50 €, 100 €, 150 € et 200 €. Si vous souhaitez un autre montant, dites-le-nous, c’est possible.',
  },
  {
    question: 'La carte est-elle valable sur les services ?',
    answer:
      'Oui. Elle s’utilise aussi bien sur les vêtements et les accessoires que sur une séance de relooking vestimentaire, de stylisme ou un shooting photo.',
  },
  {
    question: 'Où la carte cadeau est-elle utilisable ?',
    answer:
      'À la boutique Odyssée, immeuble Les Lilas, impasse Guy Cornély, à Jarry, Baie-Mahault. C’est une carte locale : elle fait vivre une boutique de Guadeloupe, pas une chaîne.',
  },
]

export default function Page() {
  const trail = [{ name: 'Carte cadeau', path: PATH }]

  return (
    <>
      <JsonLd data={[faqSchema(faqItems), breadcrumbSchema(trail)]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Cadeau · Guadeloupe"
        title={<>La carte cadeau<br /><span className="italic text-or">Odyssée</span></>}
        intro="Offrir une pièce, c’est risqué. Offrir le choix, avec quelqu’un pour accompagner, c’est autre chose."
        ctaLabel="Commander une carte"
      />

      <section className="py-16">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
              Une <strong>carte cadeau mode en Guadeloupe</strong> qui ne finit pas oubliée dans un
              tiroir : celle qui vous vaut un moment, pas seulement un article. La personne qui la
              reçoit vient à <strong>Jarry</strong>, est conseillée, essaie tranquillement, et repart
              avec quelque chose qu’elle a vraiment choisi.
            </p>
            <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
              Elle est valable sur tout : les vêtements, les bijoux, comme une séance de{' '}
              <Link href="/services/relooking" className="text-or hover:underline">
                relooking vestimentaire
              </Link>{' '}
              ou un{' '}
              <Link href="/services/shooting-photo" className="text-or hover:underline">
                shooting photo
              </Link>.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={IMAGES.carteCadeau.src}
              alt={IMAGES.carteCadeau.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury">
          <h2 className="section-title mb-4">Les montants</h2>
          <p className="font-sans text-blanc-casse/60 mb-10 max-w-xl">
            Quatre montants standards. Un autre montant est possible sur demande.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MONTANTS.map((montant) => (
              <div
                key={montant}
                className="border border-or/30 p-8 text-center hover:border-or transition-colors"
              >
                <p className="font-serif text-4xl text-or">{montant} €</p>
                <p className="font-sans text-xs tracking-wide uppercase text-blanc-casse/45 mt-3">
                  Carte cadeau
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={SITE_CONFIG.whatsapp} className="btn-primary">
              Commander sur WhatsApp
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-outline">
              Appeler le {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Pour quelles occasions</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            Anniversaire, fête des mères, départ à la retraite, remerciement, ou simplement un
            « tu le mérites » sans occasion particulière. C’est aussi le cadeau collectif idéal
            entre collègues : chacun participe, la personne choisit.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-4">
            Et pour un anniversaire à fêter à plusieurs, il existe aussi la formule{' '}
            <Link href="/services/shopping-anniversaire" className="text-or hover:underline">
              shopping anniversaire entre amies
            </Link>.
          </p>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Accessoires & bijoux',
            href: '/boutique/accessoires-bijoux',
            desc: 'Si vous préférez finalement offrir une pièce précise.',
          },
          {
            label: 'Relooking vestimentaire',
            href: '/services/relooking',
            desc: 'Le cadeau qui change durablement quelque chose.',
          },
          {
            label: 'Vêtements femme',
            href: '/boutique/vetements-femme',
            desc: 'Ce qui attend la personne qui recevra la carte.',
          },
        ]}
      />

      <CtaFinal
        titre="Une carte à préparer ?"
        texte="Un message suffit. Nous la préparons, vous passez la récupérer à Jarry."
      />
    </>
  )
}
