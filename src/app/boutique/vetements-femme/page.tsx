import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { GALERIE_PAP, GALERIE_WAX } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, Galerie, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/boutique/vetements-femme'
const TITLE = 'Magasin de vêtements femme à Jarry – Guadeloupe | Odyssée'
const DESC =
  'Magasin de vêtements femme à Jarry, Baie-Mahault. Prêt-à-porter chic, ensembles imprimés et pièces uniques. Conseil personnalisé par Béatrice, du mardi au samedi.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Où trouver un magasin de vêtements femme à Jarry ?',
    answer:
      'Odyssée Showroom Privé se trouve à l’immeuble Les Lilas, impasse Guy Cornély, dans la zone de Jarry à Baie-Mahault. Parking gratuit devant. Ouvert du mardi au samedi de 10h à 19h.',
  },
  {
    question: 'Faut-il un rendez-vous pour venir en boutique ?',
    answer:
      'Non. L’entrée est libre pendant les heures d’ouverture. Le rendez-vous sert uniquement si vous voulez un créneau dédié, par exemple pour préparer une cérémonie ou une garde-robe complète.',
  },
  {
    question: 'Quelles tailles proposez-vous ?',
    answer:
      'Cela dépend des pièces : nous travaillons avec de petites séries, donc les tailles disponibles varient d’un modèle à l’autre. Le plus simple est de nous écrire sur WhatsApp au ' + SITE_CONFIG.whatsappDisplay + ' pour savoir ce qui est en boutique dans votre taille avant de vous déplacer.',
  },
  {
    question: 'Vendez-vous en ligne ?',
    answer:
      'Pas de vente en ligne pour le moment. Les pièces tournent vite et beaucoup sont en exemplaire unique. En revanche, vous pouvez nous demander des photos sur WhatsApp et réserver une pièce avant de passer.',
  },
  {
    question: 'Proposez-vous des vêtements en wax ?',
    answer:
      'Oui, quelques pièces en wax moderne passent régulièrement en boutique, mais ce n’est pas le cœur de la sélection. Demandez-nous ce qui est disponible au moment de votre visite.',
  },
]

const rayons = [
  {
    titre: 'Ensembles et pièces coordonnées',
    texte:
      'Ensembles pantalon large, longues vestes ouvertes, imprimés graphiques. Ce sont les pièces qui partent le plus vite parce qu’elles règlent une tenue entière d’un coup.',
  },
  {
    titre: 'Robes du quotidien',
    texte:
      'Coupes fluides, matières légères, longueurs qui passent au bureau comme au restaurant le soir. Adaptées à la chaleur, pas à un catalogue métropolitain.',
  },
  {
    titre: 'Wax moderne',
    texte:
      'Quelques pièces contemporaines, loin du wax de cérémonie traditionnel : détails de finition, associations avec de la résille ou du uni. Disponibilité variable.',
  },
  {
    titre: 'Pièces uniques',
    texte:
      'Beaucoup d’articles arrivent en petite quantité, parfois en un seul exemplaire. C’est voulu : vous avez peu de risque de croiser votre tenue à la même soirée.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Boutique', path: '/boutique' },
    { name: 'Vêtements femme', path: PATH },
  ]

  return (
    <>
      <JsonLd data={[faqSchema(faqItems), breadcrumbSchema(trail)]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Boutique · Jarry, Baie-Mahault"
        title={<>Magasin de vêtements femme<br /><span className="italic text-or">à Jarry, en Guadeloupe</span></>}
        intro="Du prêt-à-porter choisi pièce par pièce, pour s’habiller ici — avec le climat, les occasions et les silhouettes d’ici."
        ctaLabel="Venir en boutique"
        ctaHref={SITE_CONFIG.maps}
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Odyssée est un <strong>magasin de vêtements femme à Jarry</strong>, dans la zone de
            Baie-Mahault. On y trouve du <strong>prêt-à-porter femme</strong> sélectionné en petites
            quantités : ensembles imprimés, robes fluides, pièces à porter au quotidien comme en
            sortie.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            La différence avec une grande enseigne tient en une phrase : ici, quelqu’un vous dit
            honnêtement si la pièce vous va. Béatrice tient la boutique, connaît son stock, et
            préfère vous voir revenir que vous voir repartir avec une erreur.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-10">Ce que vous trouvez en boutique</h2>
          <Galerie
            visuels={GALERIE_PAP}
            cols="md:grid-cols-4"
            legende="Aperçu des collections passées en boutique — le stock évolue chaque mois"
          />
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Les rayons</h2>
          <div className="space-y-8">
            {rayons.map((item) => (
              <div key={item.titre} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.titre}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-8">
            Vous cherchez une tenue pour une occasion précise ? Voyez plutôt les{' '}
            <Link href="/boutique/robes-ceremonie-invitee-mariage" className="text-or hover:underline">
              robes de cérémonie et d’invitée de mariage
            </Link>{' '}
            ou les{' '}
            <Link href="/boutique/robes-soiree-cocktail" className="text-or hover:underline">
              robes de soirée et de cocktail
            </Link>.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <h2 className="section-title mb-4">Wax, batik et adiré</h2>
          <p className="font-sans text-blanc-casse/60 mb-10 max-w-2xl leading-relaxed">
            Pas le wax de cérémonie traditionnel, mais des pièces contemporaines : un empiècement
            sur une veste unie, une jupe boule portée avec un short en jean, une combinaison en
            batik qui se porte aussi bien à un vin d’honneur qu’à un dîner. Certaines viennent de
            créateurs partenaires, et nous le disons.
          </p>
          <Galerie
            visuels={GALERIE_WAX}
            cols="md:grid-cols-5"
            legende="Disponibilité variable — le wax n’est pas le cœur de la sélection, mais il passe régulièrement"
          />
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Venir depuis toute la Guadeloupe</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            Jarry est le point le plus accessible de l’île. Depuis Pointe-à-Pitre ou les Abymes,
            comptez une quinzaine de minutes hors heures de pointe. Depuis Le Gosier, Petit-Bourg ou
            Sainte-Rose, la boutique reste simple d’accès par la N1, avec du stationnement gratuit
            devant l’immeuble Les Lilas.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-4">
            Si vous venez de loin, écrivez-nous avant sur WhatsApp au{' '}
            <a href={SITE_CONFIG.whatsapp} className="text-or hover:underline">{SITE_CONFIG.whatsappDisplay}</a>{' '}
            : on vous dit ce qui est disponible dans votre taille, ça évite le déplacement pour rien.
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
            desc: 'Boucles d’oreilles artisanales, sacs et pièces qui terminent une tenue.',
          },
          {
            label: 'Relooking vestimentaire',
            href: '/services/relooking',
            desc: 'Reprendre votre garde-robe en entier, avec un regard extérieur et un plan clair.',
          },
          {
            label: 'Carte cadeau',
            href: '/carte-cadeau',
            desc: 'Offrir le choix plutôt qu’une pièce dont vous n’êtes pas sûre.',
          },
        ]}
      />

      <CtaFinal
        titre="Passez quand vous voulez"
        texte="Du mardi au samedi, 10h–19h, à Jarry. Entrée libre, et un avis franc si vous le demandez."
      />
    </>
  )
}
