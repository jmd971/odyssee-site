import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/site-config'
import { ARTICLES, getArticle, type Bloc } from '@/lib/blog'
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { Breadcrumb, CtaFinal, FaqSection, JsonLd } from '@/components/ui/blocks'

export const revalidate = 600

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug)
  if (!article) return { title: 'Article introuvable' }

  const url = `${SITE_CONFIG.url}/blog/${article.slug}`
  return {
    title: `${article.titre} | Odyssée`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: article.titre,
      description: article.description,
      url,
      publishedTime: article.dateISO,
      images: [{ url: article.visuel.src, alt: article.visuel.alt }],
    },
  }
}

function RenduBloc({ bloc }: { bloc: Bloc }) {
  switch (bloc.type) {
    case 'h2':
      return <h2 className="font-serif text-2xl md:text-3xl font-light text-blanc-casse mt-12 mb-4">{bloc.texte}</h2>
    case 'h3':
      return <h3 className="font-serif text-xl font-medium text-or mt-8 mb-3">{bloc.texte}</h3>
    case 'ul':
      return (
        <ul className="space-y-3 my-6">
          {bloc.items.map((item) => (
            <li key={item} className="flex gap-3 font-sans text-blanc-casse/70 leading-relaxed">
              <span className="text-or shrink-0" aria-hidden="true">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'lien':
      return (
        <p className="font-sans text-blanc-casse/70 leading-relaxed mb-5">
          {bloc.avant}
          <Link href={bloc.href} className="text-or hover:underline">{bloc.ancre}</Link>
          {bloc.apres}
        </p>
      )
    default:
      return <p className="font-sans text-blanc-casse/70 leading-relaxed mb-5">{bloc.texte}</p>
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  const path = `/blog/${article.slug}`
  const trail = [
    { name: 'Blog', path: '/blog' },
    { name: article.titre, path },
  ]

  const autres = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: article.titre,
            description: article.description,
            path,
            datePublished: article.dateISO,
            image: article.visuel.src,
          }),
          breadcrumbSchema(trail),
          ...(article.faq ? [faqSchema(article.faq)] : []),
        ]}
      />
      <Breadcrumb trail={trail} />

      <article>
        <header className="py-12 border-b border-blanc-casse/5">
          <div className="container-luxury max-w-3xl">
            <p className="section-subtitle">{article.categorie}</p>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-blanc-casse leading-tight">
              {article.h1}
            </h1>
            <p className="font-sans text-sm text-blanc-casse/45 mt-6">
              Par Béatrice · <time dateTime={article.dateISO}>{article.date}</time>
            </p>
          </div>
        </header>

        <div className="container-luxury max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden my-10">
            <Image
              src={article.visuel.src}
              alt={article.visuel.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="pb-12">
            {article.contenu.map((bloc, i) => (
              <RenduBloc key={i} bloc={bloc} />
            ))}
          </div>
        </div>
      </article>

      {article.faq && <FaqSection items={article.faq} titre="Questions fréquentes" />}

      <section className="py-16">
        <div className="container-luxury">
          <h2 className="section-title mb-8">À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {autres.map((autre) => (
              <Link
                key={autre.slug}
                href={`/blog/${autre.slug}`}
                className="block border border-blanc-casse/10 p-6 hover:border-or transition-colors group"
              >
                <p className="font-sans text-[11px] tracking-wide uppercase text-or mb-2">{autre.categorie}</p>
                <h3 className="font-serif text-lg text-blanc-casse group-hover:text-or transition-colors leading-snug">
                  {autre.titre}
                </h3>
                <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-3">{autre.resume}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        titre="Une question sur votre tenue ?"
        texte="Passez à la boutique de Jarry ou écrivez-nous : le conseil ne coûte rien."
      />
    </>
  )
}
