'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES, type Visuel } from '@/lib/images'

/**
 * Reels lus dans une fenêtre modale, sur le site.
 *
 * Deux essais précédents ne convenaient pas : l'intégration Instagram posée
 * directement dans la page imposait quatre cartes blanches avec bandeaux de
 * profil et mentions J'aime ; les cartes simples, elles, faisaient quitter
 * le site.
 *
 * Ici, la grille reste aux couleurs du site, et l'iframe d'Instagram n'est
 * chargée qu'à l'ouverture de la fenêtre — donc aucun poids ni requête tierce
 * tant qu'on ne clique pas, et la visiteuse ne quitte jamais odysseebybea.fr.
 */
type Reel = { code: string; titre: string; visuel: Visuel }

const REELS: Reel[] = [
  { code: 'DbOMCrmqVNj', titre: 'Look en boutique', visuel: IMAGES.lookJeanBoutique },
  { code: 'DbLMDqPKC_S', titre: 'Look en boutique', visuel: IMAGES.robeSequinsArgent },
  { code: 'Da8MCKQIxVZ', titre: 'Look en boutique', visuel: IMAGES.vesteBlanchePatchwork },
  { code: 'DbLHcurKCoB', titre: 'Look en boutique', visuel: IMAGES.robeLongueEte },
]

export function InstagramLooks() {
  const [actif, setActif] = useState<Reel | null>(null)
  const fermer = useCallback(() => setActif(null), [])

  useEffect(() => {
    if (!actif) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') fermer() }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [actif, fermer])

  return (
    <section className="py-16 bg-noir-alt">
      <div className="container-luxury">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-subtitle">En vidéo</p>
            <h2 className="section-title">Les derniers looks</h2>
            <p className="font-sans text-sm text-blanc-casse/60 mt-4 max-w-xl leading-relaxed">
              Les tenues montées en boutique, filmées à Jarry. Ce sont des pièces réellement
              passées en rayon : si l’une vous plaît, écrivez-nous, on vous dit si elle est encore là.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {REELS.map((reel) => (
            <button
              key={reel.code}
              type="button"
              onClick={() => setActif(reel)}
              aria-label={`Lire la vidéo : ${reel.titre}`}
              className="group block relative aspect-[9/16] overflow-hidden w-full text-left"
            >
              <Image
                src={reel.visuel.src}
                alt={reel.visuel.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <span className="absolute inset-0 bg-noir/35 group-hover:bg-noir/15 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blanc-casse/70 bg-noir/40 transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor" className="text-blanc-casse ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="absolute bottom-0 left-0 right-0 p-3 font-sans text-[11px] tracking-wide uppercase text-blanc-casse/90">
                {reel.titre}
              </span>
            </button>
          ))}
        </div>
      </div>

      {actif && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actif.titre}
          onClick={fermer}
          className="fixed inset-0 z-[100] bg-noir/90 flex items-center justify-center p-4"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[400px]">
            <button
              type="button"
              onClick={fermer}
              aria-label="Fermer la vidéo"
              className="absolute -top-11 right-0 text-blanc-casse/70 hover:text-or transition-colors font-sans text-sm tracking-wide uppercase"
            >
              Fermer ✕
            </button>
            <iframe
              src={`https://www.instagram.com/reel/${actif.code}/embed/`}
              title={actif.titre}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              scrolling="no"
              className="w-full h-[80vh] max-h-[720px] bg-noir border-0"
            />
            <p className="font-sans text-xs text-blanc-casse/40 mt-3 text-center">
              Vidéo hébergée sur Instagram. Si elle ne s’affiche pas, votre navigateur bloque les
              contenus externes —{' '}
              <a
                href={`https://www.instagram.com/reel/${actif.code}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-or hover:underline"
              >
                l’ouvrir sur Instagram
              </a>.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
