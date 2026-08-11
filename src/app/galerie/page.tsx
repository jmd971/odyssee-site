import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, whatsappAvec } from '@/lib/site-config'
import { IMAGES, type Visuel } from '@/lib/images'
import { breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb, CtaFinal, JsonLd, PageHero } from '@/components/ui/blocks'

const PATH = '/galerie'
const TITLE = 'Galerie – tous nos looks en Guadeloupe | Odyssée'
const DESC =
  'Toutes les tenues Odyssée en un seul endroit : robes de soirée, cérémonie, prêt-à-porter, wax et batik, accessoires. Boutique à Jarry, Baie-Mahault.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

type Section = { titre: string; intro: string; lien?: { href: string; label: string }; visuels: Visuel[] }

const SECTIONS: Section[] = [
  {
    titre: 'Soirée & cocktail',
    intro: 'Les pièces les plus habillées : robes longues, sequins, coupes qui tiennent une soirée entière.',
    lien: { href: '/boutique/robes-soiree-cocktail', label: 'Voir la page soirée & cocktail' },
    visuels: [
      IMAGES.robeRougeSequins, IMAGES.robePeplum, IMAGES.robeSequinsArgent,
      IMAGES.hautStrass, IMAGES.robeDenim, IMAGES.robeCrochet,
    ],
  },
  {
    titre: 'Cérémonie & invitée de mariage',
    intro: 'Ce qu’on porte quand la journée dure de l’église au vin d’honneur : matières qui respirent, coupes qui ne se réajustent pas.',
    lien: { href: '/boutique/robes-ceremonie-invitee-mariage', label: 'Voir la page cérémonie' },
    visuels: [
      IMAGES.egerie, IMAGES.combinaisonBatik, IMAGES.totalLookBlanc,
      IMAGES.robeBatik, IMAGES.ensembleImprime, IMAGES.robeImprimee,
    ],
  },
  {
    titre: 'Prêt-à-porter',
    intro: 'Le quotidien : ensembles coordonnés, chemises imprimées, robes fluides. Souvent en petites séries, parfois en exemplaire unique.',
    lien: { href: '/boutique/vetements-femme', label: 'Voir la page vêtements femme' },
    visuels: [
      IMAGES.chemisesImprimees, IMAGES.robeLongueEte, IMAGES.vesteBlanchePatchwork,
      IMAGES.lookCouleur, IMAGES.lookVaalayam, IMAGES.marqueWm, IMAGES.vesteImprimee,
    ],
  },
  {
    titre: 'Wax, batik & adiré',
    intro: 'Le wax contemporain, pas celui de cérémonie : un empiècement, une jupe boule avec un short en jean, une combinaison qui passe partout.',
    lien: { href: '/boutique/vetements-femme', label: 'Voir les pièces en boutique' },
    visuels: [IMAGES.duoWaxJean, IMAGES.vesteKimonoWax, IMAGES.lookWax],
  },
  {
    titre: 'Accessoires & bijoux',
    intro: 'Boucles d’oreilles en raphia, pièces artisanales, sacs. C’est souvent l’accessoire qui fait basculer une tenue.',
    lien: { href: '/boutique/accessoires-bijoux', label: 'Voir la page accessoires' },
    visuels: [IMAGES.bijoux, IMAGES.accessoires, IMAGES.lookJeanBoutique, IMAGES.tenueCrochetBeige],
  },
  {
    titre: 'La boutique & les coulisses',
    intro: 'Jarry, immeuble Les Lilas. Le mur à chevrons, les portants, le présentoir à bijoux — pour savoir à quoi ressemble l’endroit avant d’y entrer. Le mot « privé » ne veut pas dire fermé : on entre librement du mardi au samedi.',
    lien: { href: '/contact', label: 'Venir nous voir' },
    visuels: [
      IMAGES.lookJeanBoutique, IMAGES.chemisesImprimees, IMAGES.vesteBlanchePatchwork,
      IMAGES.robeSequinsArgent, IMAGES.robeLongueEte, IMAGES.nouvellesPieces,
      IMAGES.miseEnBeaute, IMAGES.carteCadeau,
    ],
  },
  {
    titre: 'Nos événements',
    intro: 'Défilés et soirées organisés par Odyssée en Guadeloupe.',
    lien: { href: '/evenements', label: 'Voir les événements' },
    visuels: [IMAGES.defile, IMAGES.degustation],
  },
]

const TOTAL = SECTIONS.reduce((n, s) => n + s.visuels.length, 0)

export default function GaleriePage() {
  const trail = [{ name: 'Galerie', path: PATH }]

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Galerie · Jarry, Guadeloupe"
        title={<>Tous nos looks<br /><span className="italic text-or">en un seul endroit</span></>}
        intro={`${TOTAL} tenues et pièces vues à la boutique. Le stock tourne : la meilleure façon de savoir ce qui est disponible reste de nous écrire.`}
        ctaLabel="Réserver un essayage"
      />

      {/* Sommaire — évite de faire défiler à l'aveugle sur mobile */}
      <nav aria-label="Sections de la galerie" className="py-8 border-b border-blanc-casse/10">
        <div className="container-luxury flex flex-wrap gap-x-6 gap-y-3">
          {SECTIONS.map((s) => (
            <a
              key={s.titre}
              href={`#${slug(s.titre)}`}
              className="font-sans text-xs tracking-wide uppercase text-blanc-casse/50 hover:text-or transition-colors"
            >
              {s.titre}
            </a>
          ))}
        </div>
      </nav>

      {SECTIONS.map((section, i) => (
        <section
          key={section.titre}
          id={slug(section.titre)}
          className={`py-16 scroll-mt-24 ${i % 2 === 1 ? 'bg-noir-alt' : ''}`}
        >
          <div className="container-luxury">
            <h2 className="section-title mb-4">{section.titre}</h2>
            <p className="font-sans text-blanc-casse/60 leading-relaxed max-w-2xl mb-10">
              {section.intro}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {section.visuels.map((v) => (
                <figure key={v.src} className="relative aspect-[3/4] overflow-hidden group m-0">
                  <Image
                    src={v.src}
                    alt={v.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {v.credit && (
                    <figcaption className="absolute top-0 left-0 bg-noir/70 px-2.5 py-1 font-sans text-[10px] tracking-wide text-or">
                      {v.credit}
                    </figcaption>
                  )}
                  <div className="absolute inset-0 bg-noir/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <a
                      href={whatsappAvec(
                        `Bonjour Béatrice, j’ai vu cette pièce sur le site (${v.alt}). Est-elle encore disponible ?`,
                      )}
                      className="w-full text-center btn-primary text-[11px] py-2"
                    >
                      Est-elle disponible ?
                    </a>
                  </div>
                </figure>
              ))}
            </div>

            {section.lien && (
              <p className="mt-6">
                <Link href={section.lien.href} className="font-sans text-sm text-or hover:underline">
                  {section.lien.label} →
                </Link>
              </p>
            )}
          </div>
        </section>
      ))}

      <CtaFinal
        titre="Une pièce vous plaît ?"
        texte="Le stock change chaque semaine. Envoyez-nous un message : on vous dit tout de suite si elle est encore en boutique."
      />
    </>
  )
}

function slug(titre: string) {
  return titre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
