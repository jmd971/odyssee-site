import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, MessageCircle } from 'lucide-react'

/* Page d'atterrissage du QR code affiche en boutique.
   Elle remplace le parcours GoHighLevel disparu lors de la refonte :
   entre aout et septembre 2026, le QR renvoyait une erreur.

   Volontairement hors index : c'est un parcours prive entre la boutique
   et sa cliente, il n'a rien a faire dans les resultats de recherche. */
export const metadata: Metadata = {
  title: 'Votre visite chez Odyssée',
  description: 'Dites-nous comment s’est passée votre visite à la boutique.',
  robots: { index: false, follow: false },
}

const LIEN_AVIS_GOOGLE = 'https://g.page/r/CbBfVyCsFPbfEBM/review'

export default function DemandeAvisPage() {
  return (
    <>
      <section className="py-16 border-b border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle">Votre visite</span>
          <h1 className="section-title text-blanc-casse">
            Comment ça<br />
            <span className="italic text-gradient">s’est passé ?</span>
          </h1>
          <p className="font-sans text-sm text-blanc-casse/50 leading-relaxed max-w-xl mt-6">
            Votre retour compte pour deux raisons. Il aide la boutique à s’améliorer,
            et il aide la prochaine cliente à savoir ce qui l’attend avant de pousser la porte.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-blanc-casse/10 p-8 flex flex-col">
              <Star size={20} className="text-or mb-6" />
              <h2 className="font-serif text-2xl text-blanc-casse mb-3">
                Tout s’est bien passé
              </h2>
              <p className="font-sans text-sm text-blanc-casse/50 leading-relaxed mb-8 grow">
                Quelques lignes suffisent. Dites ce que vous cherchiez et ce que vous
                êtes repartie avec, c’est ce qui parle le plus aux autres clientes.
              </p>
              <a
                href={LIEN_AVIS_GOOGLE}
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                Laisser un avis Google
              </a>
            </div>

            <div className="border border-blanc-casse/10 p-8 flex flex-col">
              <MessageCircle size={20} className="text-or mb-6" />
              <h2 className="font-serif text-2xl text-blanc-casse mb-3">
                Quelque chose n’a pas été
              </h2>
              <p className="font-sans text-sm text-blanc-casse/50 leading-relaxed mb-8 grow">
                Dites-le nous directement. Béatrice lit les messages elle-même et
                vous répond. Une pièce qui ne va pas, un accueil raté, une retouche
                en retard : on préfère le savoir.
              </p>
              <Link href="/demande-avis/nous-le-dire" className="btn-outline self-start">
                Nous le dire
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
