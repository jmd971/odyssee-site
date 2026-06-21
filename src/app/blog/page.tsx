import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Blog mode & conseils style en Guadeloupe | Odyssée',
  description: 'Conseils mode, tendances et astuces style en Guadeloupe par Odyssée Showroom Privé. Inspirations pour sublimer votre garde-robe.',
  alternates: { canonical: 'https://odysseebybea.fr/blog' },
}

const articles = [
  {
    slug: 'accessoiriser-tenue-chic-elegante',
    titre: 'Comment accessoiriser une tenue pour un look chic et élégant ?',
    date: '13 mars 2025',
    resume: 'Découvrez les astuces incontournables pour sublimer votre style avec des bijoux, sacs et accessoires tendance.',
    categorie: 'Conseils Mode',
    auteur: 'Béatrice',
  },
  {
    slug: 'tendances-mode-guadeloupe',
    titre: 'Les 5 Tendances Mode Incontournables en Guadeloupe',
    date: '13 mars 2025',
    resume: 'Couleurs vibrantes, imprimés tropicaux, matières légères... Découvrez les tendances mode adaptées au style antillais.',
    categorie: 'Conseils Mode',
    auteur: 'Béatrice',
  },
  {
    slug: 'trouver-tenue-ideale-boutique',
    titre: '5 Conseils pour trouver la tenue idéale en boutique',
    date: '27 janvier 2025',
    resume: 'Des astuces mode et morpho pour dénicher la tenue parfaite, tout en gagnant du temps et en bénéficiant de conseils personnalisés.',
    categorie: 'Conseils Mode',
    auteur: 'Béatrice',
  },
]

export default function BlogPage() {
  return (
    <>
      <nav className="container-luxury py-4 text-xs font-sans text-blanc-casse/30">
        <Link href="/" className="hover:text-or transition-colors">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-blanc-casse/60">Blog</span>
      </nav>

      <section className="py-16 border-b border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle">Conseils & inspirations</span>
          <h1 className="section-title text-blanc-casse">
            Blog mode<br />
            <span className="italic text-gradient">by Béatrice</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.slug} className="border border-blanc-casse/5 hover:border-or/20 transition-all duration-300 group">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-odyssee opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif italic text-4xl text-or/20">Odyssée</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-[10px] tracking-luxury uppercase text-or">{article.categorie}</span>
                    <span className="text-blanc-casse/20">·</span>
                    <span className="font-sans text-[10px] text-blanc-casse/30">{article.date}</span>
                  </div>
                  <h2 className="font-serif text-lg text-blanc-casse leading-snug mb-3 group-hover:text-or transition-colors">
                    {article.titre}
                  </h2>
                  <p className="font-sans text-xs text-blanc-casse/50 leading-relaxed mb-5">
                    {article.resume}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="font-sans text-xs tracking-wide uppercase text-or hover:text-or-clair transition-colors flex items-center gap-2"
                  >
                    Lire l&apos;article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
