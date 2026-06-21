import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: 'Article | Odyssée Showroom Privé',
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="container-luxury py-24 text-center">
      <h1 className="section-title">Article de blog</h1>
      <p className="font-sans text-sm text-charcoal/60 mt-4">Page en cours de construction</p>
    </main>
  )
}