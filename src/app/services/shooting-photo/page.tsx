import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { GALERIE_SHOOTING } from '@/lib/images'
import { breadcrumbSchema, faqSchema, serviceSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, Galerie, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/services/shooting-photo'
const TITLE = 'Shooting photo mode femme – Guadeloupe | Odyssée'
const DESC =
  'Shooting photo mode en Guadeloupe, tenues fournies par la boutique. Séance photo styling à Jarry et en extérieur. Organisé par Odyssée Showroom Privé.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quel est le prix d’un shooting photo en Guadeloupe ?',
    answer:
      'Le prix varie selon la durée, le nombre de tenues et le nombre de photos retouchées livrées. Chez Odyssée, la particularité est que les tenues sont fournies par la boutique, ce qui évite le budget vêtements qui s’ajoute souvent à la facture. Demandez le tarif détaillé sur WhatsApp au ' + SITE_CONFIG.whatsappDisplay + '.',
  },
  {
    question: 'Les vêtements sont-ils fournis ?',
    answer:
      'Oui. C’est tout l’intérêt de passer par une boutique plutôt que par un photographe seul : vous êtes habillée et conseillée avant la séance, avec les pièces disponibles en showroom.',
  },
  {
    question: 'Où se déroule la séance ?',
    answer:
      'En boutique à Jarry pour les prises en intérieur, et en extérieur selon le rendu souhaité — bord de mer, végétation, architecture. La Guadeloupe ne manque pas de décors.',
  },
  {
    question: 'Faut-il être à l’aise devant l’objectif ?',
    answer:
      'Non, et la plupart des clientes ne le sont pas au départ. On commence habillée et conseillée, ce qui règle déjà la moitié du problème : on est bien plus à l’aise quand on sait qu’on est bien mise.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Services', path: '/services' },
    { name: 'Shooting photo', path: PATH },
  ]

  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqItems),
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Shooting photo mode',
            description: DESC,
            path: PATH,
            serviceType: 'Shooting photo mode',
          }),
        ]}
      />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Service · Guadeloupe"
        title={<>Shooting photo mode<br /><span className="italic text-or">tenues comprises</span></>}
        intro="Une séance photo où vous êtes habillée, conseillée et mise en valeur — pas juste photographiée."
        ctaLabel="Organiser ma séance"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Un <strong>shooting photo</strong> réussi ne dépend pas que du photographe. Il dépend
            surtout de ce que vous portez et de la façon dont vous vous sentez dedans. C’est
            précisément ce qu’Odyssée apporte : le <strong>styling</strong> avant la prise de vue.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            La boutique fournit les tenues, Béatrice compose les silhouettes, et la séance se déroule
            à Jarry ou en extérieur en <strong>Guadeloupe</strong> selon le rendu recherché.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-10">Quelques images</h2>
          <Galerie
            visuels={GALERIE_SHOOTING}
            cols="md:grid-cols-3"
            legende="Séances et défilés organisés par Odyssée"
          />
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Pour quelles occasions</h2>
          <div className="space-y-8">
            {[
              {
                titre: 'Une image de soi qu’on assume',
                texte: <>Beaucoup de femmes n’ont aucune photo d’elles qui leur plaise. C’est la demande la plus fréquente, et la plus gratifiante.</>,
              },
              {
                titre: 'Un anniversaire marquant',
                texte: <>Trente, quarante, cinquante ans. La séance devient le cadeau, et les images restent bien après la fête.</>,
              },
              {
                titre: 'Une image professionnelle',
                texte: <>Photos de profil et de communication, quand la crédibilité passe aussi par la tenue.</>,
              },
              {
                titre: 'Entre amies',
                texte: (
                  <>
                    Une séance à plusieurs, souvent combinée avec un{' '}
                    <Link href="/services/shopping-anniversaire" className="text-or hover:underline">
                      après-midi shopping anniversaire
                    </Link>.
                  </>
                ),
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

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Relooking vestimentaire',
            href: '/services/relooking',
            desc: 'Travailler l’image de fond avant de la fixer en photo.',
          },
          {
            label: 'Shopping anniversaire',
            href: '/services/shopping-anniversaire',
            desc: 'La boutique privatisée pour vous et vos amies.',
          },
          {
            label: 'Robes de soirée & cocktail',
            href: '/boutique/robes-soiree-cocktail',
            desc: 'Les pièces qui rendent le mieux en photo.',
          },
        ]}
      />

      <CtaFinal
        titre="Envie d’images qui vous ressemblent ?"
        texte="Dites-nous ce que vous avez en tête, on cale la séance et les tenues."
      />
    </>
  )
}
