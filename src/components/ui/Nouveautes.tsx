import Image from 'next/image'
import { whatsappAvec } from '@/lib/site-config'
import type { Piece } from '@/lib/nouveautes'

/**
 * Pièces affichées avec leur prix.
 * Le bouton mène à WhatsApp : le site ne vend pas en ligne, on réserve la
 * pièce et on passe l'essayer.
 */
export function Nouveautes({ pieces }: { pieces: Piece[] }) {
  if (pieces.length === 0) return null

  return (
    <section className="py-16 bg-noir-alt" aria-labelledby="nouveautes-titre">
      <div className="container-luxury max-w-5xl">
        <p className="section-subtitle">Arrivées en boutique</p>
        <h2 id="nouveautes-titre" className="section-title mb-4">Les nouveautés</h2>
        <p className="font-sans text-blanc-casse/60 mb-10 max-w-2xl leading-relaxed">
          Les prix sont ceux de la boutique, à Jarry. Pas de vente en ligne : écrivez-nous sur
          WhatsApp pour réserver une pièce, puis passez l’essayer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pieces.map((piece) => (
            <article key={piece.id} id={piece.id} className="scroll-mt-24">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={piece.visuel.src}
                  alt={piece.visuel.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                {piece.visuel.credit && (
                  <p className="absolute top-0 left-0 bg-noir/70 px-2.5 py-1 font-sans text-[10px] tracking-wide text-or">
                    {piece.visuel.credit}
                  </p>
                )}
              </div>

              <div className="flex items-baseline justify-between gap-4 mt-5">
                <h3 className="font-serif text-2xl text-blanc-casse">{piece.nom}</h3>
                <p className="font-serif text-2xl text-or whitespace-nowrap">{piece.prix} €</p>
              </div>
              <p className="font-sans text-xs uppercase tracking-widest text-blanc-casse/50 mt-1">
                {piece.tailles}
              </p>
              <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed mt-4">
                {piece.description}
              </p>

              {piece.accessoires && (
                <div className="mt-5 border-t border-blanc-casse/10 pt-4">
                  <p className="font-sans text-xs text-blanc-casse/50 mb-2">
                    Portés sur la photo, vendus séparément
                  </p>
                  <ul className="space-y-1.5">
                    {piece.accessoires.map((acc) => (
                      <li key={acc.nom} className="flex items-baseline justify-between gap-4 font-sans text-sm">
                        <a
                          href={whatsappAvec(
                            `Bonjour Béatrice, j’ai vu le ${acc.nom.toLowerCase()} à ${acc.prix} € sur le site, porté avec la ${piece.nom.toLowerCase()}. Est-il encore disponible ?`,
                          )}
                          className="text-blanc-casse/80 underline underline-offset-4 decoration-blanc-casse/30 hover:text-or hover:decoration-or transition-colors"
                        >
                          {acc.nom}
                        </a>
                        <span className="text-or whitespace-nowrap">{acc.prix} €</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={whatsappAvec(
                  `Bonjour Béatrice, j’ai vu la ${piece.nom.toLowerCase()} à ${piece.prix} € sur le site. Est-elle encore disponible ?`,
                )}
                className="btn-primary inline-block mt-6"
              >
                Réserver sur WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
