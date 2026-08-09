import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { GALERIE_SOIREE, IMAGES } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, Galerie, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/boutique/robes-soiree-cocktail'
const TITLE = 'Robe de soirée & cocktail femme – Guadeloupe | Odyssée'
const DESC =
  'Robes de soirée et de cocktail pour femme en Guadeloupe. Sélection en petites séries à Jarry, Baie-Mahault, avec essayage et conseil personnalisé par Béatrice.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Où acheter une robe de soirée en Guadeloupe ?',
    answer:
      'Odyssée Showroom Privé, à Jarry (Baie-Mahault), propose une sélection de robes de soirée et de cocktail en petites séries. Entrée libre du mardi au samedi de 10h à 19h, avec essayage et conseil sur place.',
  },
  {
    question: 'Faut-il prendre rendez-vous pour essayer une robe ?',
    answer:
      'Non, vous pouvez venir pendant les heures d’ouverture. Le rendez-vous est utile si vous voulez un moment dédié, par exemple pour préparer une soirée importante ou essayer plusieurs pièces sans être pressée.',
  },
  {
    question: 'Quels types de robes trouve-t-on chez Odyssée ?',
    answer:
      'Des robes de soirée longues, des robes de cocktail courtes et mi-longues, des ensembles et des combinaisons habillées. La sélection tourne régulièrement et beaucoup de pièces arrivent en quelques exemplaires seulement.',
  },
  {
    question: 'Proposez-vous des robes pour un gala ou une remise de prix ?',
    answer:
      'Oui. Gala, soirée d’entreprise, remise de diplôme, anniversaire marquant : ce sont des demandes fréquentes. Dites-nous le contexte, on sort les pièces adaptées avant votre arrivée si vous prévenez.',
  },
  {
    question: 'Quelle est la gamme de prix ?',
    answer:
      'La sélection couvre plusieurs budgets, avec des pièces à partir d’environ 80 €. Le plus simple est d’annoncer votre budget en arrivant : on vous montre ce qui correspond, sans vous faire perdre de temps.',
  },
  {
    question: 'Avez-vous des robes en wax ?',
    answer:
      'Quelques pièces en wax moderne passent en boutique, mais ce n’est pas le cœur de la sélection. Demandez-nous ce qui est disponible au moment de votre visite.',
  },
]

const occasions = [
  {
    occasion: 'Soirée & cocktail',
    texte:
      'La robe de cocktail est la plus polyvalente : longueur genou à mi-mollet, elle passe d’une soirée d’entreprise à un anniversaire. Une coupe ajustée ou patineuse selon la silhouette, et la tenue est réglée.',
  },
  {
    occasion: 'Gala & soirée de prestige',
    texte:
      'Une robe longue dans une matière qui a de la tenue — satin, mousseline, dentelle doublée. Un dos travaillé ou une encolure marquée suffit à faire l’effet, sans surcharger.',
  },
  {
    occasion: 'Soirée blanche',
    texte:
      'Le code couleur est imposé, donc tout se joue sur la matière. On évite les tissus fins qui deviennent transparents sous les flashs, au profit de la broderie anglaise, du crêpe ou du lin.',
  },
  {
    occasion: 'Anniversaire & sortie',
    texte:
      'Plus de liberté, et l’occasion d’oser une couleur franche ou un imprimé large. C’est aussi là que les pièces uniques prennent tout leur sens.',
  },
]

export default function RobesSoireePage() {
  const trail = [
    { name: 'Boutique', path: '/boutique' },
    { name: 'Robes de soirée & cocktail', path: PATH },
  ]

  return (
    <>
      <JsonLd data={[faqSchema(faqItems), breadcrumbSchema(trail)]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Boutique · Jarry, Guadeloupe"
        title={<>Robes de soirée<br /><span className="italic text-or">&amp; de cocktail</span></>}
        intro="Une sélection courte, en petites séries, à essayer tranquillement à Jarry, Baie-Mahault — avec quelqu’un pour vous dire franchement ce qui vous va."
        ctaLabel="Essayer en boutique"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            À la recherche d’une <strong>robe de soirée en Guadeloupe</strong> ? Odyssée Showroom
            Privé, à <strong>Jarry, Baie-Mahault</strong>, réunit des{' '}
            <strong>robes de soirée</strong> et des <strong>robes de cocktail</strong> choisies pièce
            par pièce : longues ou courtes, unies ou imprimées, dans des matières qui tiennent sous
            notre climat.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            La sélection est volontairement limitée. C’est un parti pris : mieux vaut quinze pièces
            qui valent le coup qu’un rayon entier où l’on se perd. Beaucoup de modèles arrivent en
            quelques exemplaires, ce qui limite les chances de croiser votre robe à la même soirée.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-10">Nos robes de soirée et de cocktail</h2>
          <Galerie
            visuels={GALERIE_SOIREE}
            cols="md:grid-cols-3"
            legende="Pièces et looks vus en boutique — le stock tourne, écrivez-nous pour savoir ce qui est disponible"
          />
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Choisir selon l’occasion</h2>
          <div className="space-y-8">
            {occasions.map((item) => (
              <div key={item.occasion} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.occasion}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-8">
            Vous préparez une soirée blanche ? Notre guide{' '}
            <Link href="/blog/tenue-soiree-blanche-femme" className="text-or hover:underline">
              comment s’habiller pour une soirée blanche
            </Link>{' '}
            détaille les matières à privilégier et les pièges à éviter.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Longue ou courte ?</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            La <strong>robe de soirée longue</strong> impose davantage et convient aux événements où
            l’on reste plutôt debout, en réception. La <strong>robe de cocktail courte</strong> est
            plus facile à vivre : on danse, on s’assoit, on circule. Entre les deux, la mi-longue
            reste le compromis le plus sûr quand on ne connaît pas bien le niveau d’habillement
            attendu.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-4">
            Côté couleurs, le noir et le rouge restent les valeurs les plus demandées, mais les
            teintes profondes — bleu nuit, émeraude, prune — rendent souvent mieux sur les carnations
            d’ici et se remarquent moins d’une soirée à l’autre.
          </p>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle text-or">L’expérience Odyssée</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-6">
              Un essayage<br /><span className="italic text-or">sans pression</span>
            </h2>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-4">
              Béatrice vous reçoit, écoute l’occasion et votre budget, puis sélectionne les pièces
              qui ont une chance de fonctionner. Vous essayez, elle donne son avis — y compris quand
              cet avis est « celle-là, non ».
            </p>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-8">
              Le conseil en morphologie et en couleurs est compris. Pour aller plus loin, il existe
              un{' '}
              <Link href="/services/relooking" className="text-or hover:underline">
                accompagnement relooking vestimentaire
              </Link>.
            </p>
            <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver mon essayage
            </a>
          </div>
          <div className="bg-noir border border-blanc-casse/10 p-10">
            <h3 className="font-serif text-2xl text-blanc-casse mb-6">En pratique</h3>
            <ul className="space-y-4 font-sans text-sm text-blanc-casse/65">
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Ouvert du mardi au samedi, 10h–19h</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Entrée libre, rendez-vous possible</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Pièces à partir d’environ 80 €</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Bijoux et accessoires assortis sur place</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Parking gratuit à Jarry, Baie-Mahault</li>
            </ul>
          </div>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Robes de cérémonie & invitée de mariage',
            href: '/boutique/robes-ceremonie-invitee-mariage',
            desc: 'Si votre occasion est un mariage où vous êtes invitée, témoin ou mère des mariés.',
          },
          {
            label: 'Accessoires & bijoux',
            href: '/boutique/accessoires-bijoux',
            desc: 'Les pièces qui terminent une tenue de soirée, à choisir avec la robe.',
          },
          {
            label: 'Où acheter une robe de soirée',
            href: '/blog/ou-acheter-robe-de-soiree-guadeloupe',
            desc: 'Boutique, en ligne ou location : ce que chaque option coûte vraiment.',
          },
        ]}
      />

      <CtaFinal
        titre="Prête à trouver votre robe ?"
        texte="Passez à Jarry du mardi au samedi, ou réservez un créneau pour un essayage au calme."
      />
    </>
  )
}
