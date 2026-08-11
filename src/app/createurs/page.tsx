import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, whatsappAvec } from '@/lib/site-config'
import { IMAGES, type Visuel } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import { Breadcrumb, CtaFinal, FaqSection, JsonLd, PageHero } from '@/components/ui/blocks'

const PATH = '/createurs'
const TITLE = 'Nos créateurs partenaires en Guadeloupe | Odyssée'
const DESC =
  'Les créateurs et marques dont Odyssée vend les pièces à Jarry, Baie-Mahault : wax et batik, maroquinerie, bijoux artisanaux. Des séries courtes, souvent uniques.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

type Createur = {
  nom: string
  instagram: string
  specialite: string
  texte: string
  visuel?: Visuel
  partenaire?: boolean
}

const CREATEURS: Createur[] = [
  {
    nom: 'SAND’O',
    instagram: 'sando.bijou',
    specialite: 'Maison d’art, cuir et bijoux',
    partenaire: true,
    texte:
      'Le partenariat le plus établi. SAND’O travaille le cuir et la pièce d’art portable, et Odyssée est boutique partenaire de la maison à Jarry. C’est le genre d’accessoire qui tient une tenue entière sans rien lui ajouter d’autre.',
  },
  {
    nom: 'Glam Ethnik',
    instagram: 'glamethnik',
    specialite: 'Wax, batik et adiré contemporains',
    visuel: IMAGES.combinaisonBatik,
    texte:
      'La signature wax de la boutique. Pas le wax de cérémonie traditionnel, mais des coupes actuelles : combinaisons en adiré, ensembles batik, robes qui se portent aussi bien à un vin d’honneur qu’à un dîner.',
  },
  {
    nom: 'Vaalayam',
    instagram: 'vaalayam_officiel',
    specialite: 'Prêt-à-porter',
    visuel: IMAGES.lookVaalayam,
    texte:
      'Des pièces estivales pensées pour le climat d’ici, photographiées en Guadeloupe. Elles passent en boutique par séries courtes.',
  },
  {
    nom: 'Wm',
    instagram: '',
    specialite: 'Prêt-à-porter',
    visuel: IMAGES.marqueWm,
    texte:
      'Arrivée plus récente au rayon. Une marque que les clientes demandaient et qu’Odyssée a fini par référencer.',
  },
  {
    nom: 'Christiane Ducteil Couture',
    instagram: 'christianeducteilcouture',
    specialite: 'Couture',
    texte:
      'Vue sur les shootings de la boutique. La couture, par définition, ne se décline pas en série : ce sont des pièces uniques ou quasi.',
  },
  {
    nom: 'Makeda by Katy',
    instagram: 'makeda_by_katysrm',
    specialite: 'Créations femme',
    texte:
      'Autre signature croisée lors des séances photo et des défilés Odyssée.',
  },
]

const faqItems: FaqItem[] = [
  {
    question: 'Toutes ces marques sont-elles disponibles en permanence ?',
    answer:
      'Non, et c’est assumé. Odyssée travaille en séries courtes : une marque peut être très présente une saison et absente la suivante. Écrivez-nous sur WhatsApp au ' + SITE_CONFIG.whatsappDisplay + ' pour savoir ce qui est au rayon en ce moment.',
  },
  {
    question: 'Peut-on commander une pièce qui n’est plus en boutique ?',
    answer:
      'Parfois. Selon la marque et la saison, une commande spéciale reste possible. Dites-nous ce que vous cherchez, nous vous dirons franchement si c’est faisable et dans quel délai.',
  },
  {
    question: 'Pourquoi si peu d’exemplaires de chaque pièce ?',
    answer:
      'Parce que c’est le principe de la boutique. Travailler en petites quantités permet de sélectionner pièce par pièce, et vous évite de croiser votre tenue à la même soirée. La contrepartie est qu’il ne faut pas trop attendre quand un modèle vous plaît.',
  },
  {
    question: 'Comment devenir créateur partenaire ?',
    answer:
      'Béatrice regarde les propositions, en priorité celles ancrées en Guadeloupe et aux Antilles. Le plus simple est de la contacter directement par WhatsApp ou de passer à la boutique de Jarry.',
  },
]

export default function CreateursPage() {
  const trail = [{ name: 'Nos créateurs', path: PATH }]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(faqItems)]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Créateurs · Guadeloupe"
        title={<>Les créateurs<br /><span className="italic text-or">que nous portons</span></>}
        intro="Une partie des pièces d’Odyssée vient de créateurs et de marques indépendantes, souvent antillaises. C’est ce qui explique les séries courtes, et les modèles qu’on ne revoit pas ailleurs."
        ctaLabel="Voir les pièces en boutique"
        ctaHref={SITE_CONFIG.maps}
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Béatrice ne commande pas sur catalogue. Elle choisit pièce par pièce, chez des
            créateurs qu’elle rencontre, et souvent en quelques exemplaires seulement. C’est
            plus lent, plus exigeant, et c’est la raison pour laquelle une tenue trouvée chez
            Odyssée a peu de chances d’être portée par quelqu’un d’autre le même soir.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            Quand une pièce vient d’un créateur, nous le disons. Sur les photos du site, le nom
            de la marque apparaît en surimpression.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxury">
          <div className="space-y-4">
            {CREATEURS.map((c) => (
              <article
                key={c.nom}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 border border-blanc-casse/10 p-6 hover:border-or/30 transition-colors"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-noir-alt">
                  {c.visuel ? (
                    <Image
                      src={c.visuel.src}
                      alt={c.visuel.alt}
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-serif text-3xl text-or/30">
                      {c.nom.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h2 className="font-serif text-2xl text-blanc-casse">{c.nom}</h2>
                    {c.partenaire && (
                      <span className="font-sans text-[10px] tracking-wide uppercase text-or border border-or/40 px-2 py-1">
                        Boutique partenaire
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs tracking-wide uppercase text-or/80 mb-3">
                    {c.specialite}
                  </p>
                  <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{c.texte}</p>
                  {c.instagram && (
                    <a
                      href={`https://www.instagram.com/${c.instagram}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-sans text-xs text-or hover:underline mt-4"
                    >
                      @{c.instagram}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="font-sans text-xs text-blanc-casse/40 mt-6">
            La disponibilité varie selon les arrivages. Pour savoir ce qui est au rayon
            aujourd’hui, le plus fiable reste de nous écrire.
          </p>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Vous cherchez une pièce précise ?</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed mb-8">
            Dites-nous la marque ou décrivez le modèle. Si la pièce est encore en boutique, nous
            vous le confirmons tout de suite. Sinon, nous vous dirons ce qui s’en rapproche parmi
            les arrivages du moment.
          </p>
          <a
            href={whatsappAvec(
              'Bonjour Béatrice, je cherche une pièce d’un créateur vu sur le site. Est-elle encore disponible ?',
            )}
            className="btn-primary"
          >
            Demander sur WhatsApp
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-6">Où voir ces pièces</h2>
          <p className="font-sans text-blanc-casse/70 leading-relaxed">
            Les créations wax et batik sont présentées sur la page{' '}
            <Link href="/boutique/vetements-femme" className="text-or hover:underline">
              vêtements femme
            </Link>
            , les tenues habillées sur la page{' '}
            <Link href="/boutique/robes-ceremonie-invitee-mariage" className="text-or hover:underline">
              cérémonie et invitée de mariage
            </Link>
            , et l’ensemble des visuels dans la{' '}
            <Link href="/galerie" className="text-or hover:underline">
              galerie
            </Link>.
          </p>
        </div>
      </section>

      <FaqSection items={faqItems} />

      <CtaFinal
        titre="Venez les voir en vrai"
        texte="Les pièces de créateurs se jugent en main. Entrée libre à Jarry, du mardi au samedi."
      />
    </>
  )
}
