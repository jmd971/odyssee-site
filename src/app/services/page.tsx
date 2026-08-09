import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'
import { Breadcrumb, CtaFinal, JsonLd, PageHero } from '@/components/ui/blocks'

const PATH = '/services'
const TITLE = 'Conseil en image, relooking & stylisme – Guadeloupe | Odyssée'
const DESC =
  'Relooking vestimentaire, conseil en stylisme, shooting photo mode et shopping anniversaire à Jarry, Baie-Mahault. Accompagnement personnalisé en Guadeloupe.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const services = [
  {
    titre: 'Relooking vestimentaire',
    href: '/services/relooking',
    visuel: IMAGES.miseEnBeaute,
    accroche: 'Un bilan complet de votre style, avec la boutique sur place pour passer à la pratique.',
  },
  {
    titre: 'Conseil en stylisme',
    href: '/services/stylisme',
    visuel: IMAGES.robeCrochet,
    accroche: 'Une tenue, une occasion, une décision. Plus court et plus ciblé qu’un relooking.',
  },
  {
    titre: 'Shooting photo mode',
    href: '/services/shooting-photo',
    visuel: IMAGES.tenueCrochetBeige,
    accroche: 'Des images de vous, habillée par la boutique, dans les décors de la Guadeloupe.',
  },
  {
    titre: 'Shopping anniversaire',
    href: '/services/shopping-anniversaire',
    visuel: IMAGES.vesteImprimee,
    accroche: 'La boutique pour vous et vos amies, le temps d’un après-midi.',
  },
]

export default function Page() {
  const trail = [{ name: 'Services', path: PATH }]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          itemListSchema(
            'Services Odyssée Showroom Privé',
            services.map((s) => ({ name: s.titre, path: s.href })),
          ),
        ]}
      />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Services · Guadeloupe"
        title={<>Conseil en image<br /><span className="italic text-or">&amp; accompagnement</span></>}
        intro="Odyssée n’est pas qu’une boutique. C’est aussi quelqu’un qui prend le temps de regarder ce qui vous va, et de vous le dire franchement."
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Quatre façons de travailler ensemble, du conseil ponctuel à l’accompagnement complet.
            Toutes se déroulent à <strong>Jarry, Baie-Mahault</strong>, et toutes ont le même
            principe : on part de vous, pas d’une tendance vue ailleurs.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.visuel.src}
                  alt={service.visuel.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-noir/45 group-hover:bg-noir/25 transition-colors duration-300" />
              </div>
              <h2 className="font-serif text-2xl text-blanc-casse mt-4 group-hover:text-or transition-colors">
                {service.titre}
              </h2>
              <p className="font-sans text-sm text-blanc-casse/60 leading-relaxed mt-2">
                {service.accroche}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaFinal
        titre="Une question avant de réserver ?"
        texte="Écrivez-nous sur WhatsApp, on vous dit quelle formule correspond à votre besoin."
      />
    </>
  )
}
