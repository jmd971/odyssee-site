import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { ARTICLES } from '@/lib/blog'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'
import { Breadcrumb, CtaFinal, JsonLd } from '@/components/ui/blocks'

const PATH = '/blog'
const TITLE = 'Blog mode & conseils style en Guadeloupe | Odyssée'
const DESC =
  'Conseils mode, guides d’achat et astuces style en Guadeloupe par Odyssée Showroom Privé : quelle robe pour un mariage, tenue de soirée blanche, relooking.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

export default function BlogPage() {
  const trail = [{ name: 'Blog', path: PATH }]
  const [une, ...suite] = ARTICLES

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          itemListSchema(
            'Articles Odyssée',
            ARTICLES.map((a) => ({ name: a.titre, path: `/blog/${a.slug}` })),
          ),
        ]}
      />
      <Breadcrumb trail={trail} />

      <section className="py-16 border-b border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle">Conseils &amp; guides</span>
          <h1 className="section-title text-blanc-casse">
            Blog mode<br />
            <span className="italic text-gradient">by Béatrice</span>
          </h1>
          <p className="font-sans text-blanc-casse/60 mt-6 max-w-2xl leading-relaxed">
            Des réponses concrètes aux questions qu’on nous pose en boutique : quoi porter à un
            mariage, comment réussir une tenue blanche, ce que coûte vraiment un relooking.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <Link href={`/blog/${une.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={une.visuel.src}
                alt={une.visuel.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <p className="font-sans text-[11px] tracking-wide uppercase text-or mb-3">{une.categorie}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse group-hover:text-or transition-colors leading-tight">
                {une.titre}
              </h2>
              <p className="font-sans text-blanc-casse/60 leading-relaxed mt-4">{une.resume}</p>
              <p className="font-sans text-xs text-blanc-casse/35 mt-6">
                <time dateTime={une.dateISO}>{une.date}</time>
              </p>
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suite.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block border border-blanc-casse/10 hover:border-or transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.visuel.src}
                    alt={article.visuel.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-sans text-[11px] tracking-wide uppercase text-or mb-2">{article.categorie}</p>
                  <h2 className="font-serif text-xl text-blanc-casse group-hover:text-or transition-colors leading-snug">
                    {article.titre}
                  </h2>
                  <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-3">{article.resume}</p>
                  <p className="font-sans text-xs text-blanc-casse/35 mt-4">
                    <time dateTime={article.dateISO}>{article.date}</time>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        titre="Besoin d’un avis sur votre tenue ?"
        texte="Les conseils du blog valent mieux essayés. Passez à Jarry du mardi au samedi."
      />
    </>
  )
}
