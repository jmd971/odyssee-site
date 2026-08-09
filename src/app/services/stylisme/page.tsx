import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { breadcrumbSchema, faqSchema, serviceSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/services/stylisme'
const TITLE = 'Conseil en stylisme personnalisé – Guadeloupe | Odyssée'
const DESC =
  'Séance de conseil en stylisme à Jarry, Baie-Mahault. Composez des tenues qui vous ressemblent, avec l’avis d’une styliste et l’essayage sur place en Guadeloupe.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle différence entre stylisme et relooking ?',
    answer:
      'Le conseil en stylisme répond à une question précise : quelle tenue pour tel événement, comment porter une pièce que vous n’osez pas sortir. Le relooking vestimentaire va plus loin et reprend l’ensemble de votre garde-robe et de vos repères.',
  },
  {
    question: 'Combien de temps dure une séance de stylisme ?',
    answer:
      'Comptez environ une heure. C’est suffisant pour cadrer un besoin, essayer plusieurs options et repartir avec une tenue arrêtée.',
  },
  {
    question: 'Peut-on venir avec ses propres vêtements ?',
    answer:
      'Oui, et c’est souvent la meilleure idée. Apporter deux ou trois pièces que vous aimez sans savoir quoi en faire donne un point de départ concret.',
  },
  {
    question: 'Y a-t-il une styliste en Guadeloupe pour un événement ponctuel ?',
    answer:
      'Oui. Beaucoup de demandes concernent un événement unique : une remise de diplôme, un mariage où l’on est invitée, une prise de poste, un anniversaire marquant. La séance est faite pour ça.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Services', path: '/services' },
    { name: 'Conseil en stylisme', path: PATH },
  ]

  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqItems),
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Conseil en stylisme personnalisé',
            description: DESC,
            path: PATH,
            serviceType: 'Conseil en stylisme',
          }),
        ]}
      />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Service · Jarry, Baie-Mahault"
        title={<>Conseil en stylisme<br /><span className="italic text-or">personnalisé</span></>}
        intro="Une heure pour arrêter une tenue, comprendre pourquoi elle fonctionne, et ne plus hésiter le jour venu."
        ctaLabel="Réserver une séance"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Le <strong>conseil en stylisme</strong> chez Odyssée, à <strong>Jarry</strong>, s’adresse
            à celles qui savent à peu près ce qu’elles veulent, mais qui butent sur la dernière
            marche : la bonne longueur, la bonne couleur, l’accessoire qui manque.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            C’est un format court et concret. On ne refait pas votre style de fond en comble — pour
            ça, il y a le{' '}
            <Link href="/services/relooking" className="text-or hover:underline">
              relooking vestimentaire
            </Link>. On règle une question, bien.
          </p>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Ce qu’on fait pendant l’heure</h2>
          <div className="space-y-8">
            {[
              {
                titre: 'On cadre l’occasion',
                texte: 'Lieu, horaire, code vestimentaire implicite, qui sera là. En Guadeloupe, un mariage à 10h en extérieur et une soirée en salle climatisée n’appellent pas la même matière.',
              },
              {
                titre: 'On essaie plusieurs directions',
                texte: 'Rarement une seule tenue. On compare, on élimine, et surtout on regarde comment vous bougez dedans — c’est ce qui fait la différence sur une longue journée.',
              },
              {
                titre: 'On finit la silhouette',
                texte: 'Bijoux, sac, chaussures. Une tenue juste peut être gâchée par un accessoire mal choisi, et sauvée par le bon.',
              },
            ].map((item) => (
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
          <h2 className="section-title mb-6">Tarifs</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            Le tarif de la séance dépend de sa durée et de ce que vous souhaitez y inclure. Il vous
            est annoncé avant la réservation. Un message sur WhatsApp au{' '}
            <a href={SITE_CONFIG.whatsapp} className="text-or hover:underline">{SITE_CONFIG.whatsappDisplay}</a>{' '}
            suffit pour l’obtenir.
          </p>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Relooking vestimentaire',
            href: '/services/relooking',
            desc: 'Le format long, quand c’est toute la garde-robe qui coince.',
          },
          {
            label: 'Robes de cérémonie',
            href: '/boutique/robes-ceremonie-invitee-mariage',
            desc: 'Si votre question porte sur un mariage où vous êtes invitée.',
          },
          {
            label: 'Shooting photo mode',
            href: '/services/shooting-photo',
            desc: 'Garder une trace de la tenue une fois qu’elle est trouvée.',
          },
        ]}
      />

      <CtaFinal
        titre="Une occasion en vue ?"
        texte="Réservez une heure. Vous repartirez avec une tenue arrêtée, pas avec des doutes."
      />
    </>
  )
}
