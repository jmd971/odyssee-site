'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * Lecteur YouTube en façade légère.
 *
 * On n'insère pas l'iframe au chargement : elle apporterait plusieurs centaines
 * de kilo-octets et une poignée de requêtes tierces sur une page que personne
 * n'ouvre forcément pour la vidéo. Tant qu'on ne clique pas, il n'y a qu'une
 * miniature. C'est ce que demandait le brief pour préserver le LCP.
 */
export function VideoYouTube({
  id,
  titre,
  legende,
  /* Les Shorts sont verticaux : les forcer en 16/9 ajoutait des bandes noires. */
  ratio = 'aspect-video',
}: {
  id: string
  titre: string
  legende?: string
  ratio?: string
}) {
  const [actif, setActif] = useState(false)

  return (
    <figure className="m-0">
      <div className={`relative ${ratio} overflow-hidden bg-noir`}>
        {actif ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActif(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Lire la vidéo : ${titre}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hq720.jpg`}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            <span className="absolute inset-0 bg-noir/35 group-hover:bg-noir/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-blanc-casse/70 bg-noir/50 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor" className="ml-1 text-blanc-casse">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      {legende && (
        <figcaption className="font-sans text-xs text-blanc-casse/40 mt-3">{legende}</figcaption>
      )}
    </figure>
  )
}
