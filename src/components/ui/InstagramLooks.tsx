'use client'

import { useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/site-config'

/**
 * Reels Instagram intégrés officiellement.
 *
 * On passe par le script d'embed d'Instagram plutôt que par un téléchargement :
 * les vidéos restent chez Meta (aucun poids pour Vercel), l'attribution est
 * native, et une nouvelle vidéo n'oblige pas à redéployer — il suffit d'ajouter
 * un code dans REELS ci-dessous.
 *
 * Pour récupérer le code d'un reel : ouvrir la vidéo sur Instagram, l'URL est de
 * la forme instagram.com/reel/CODE/ — c'est CODE qu'on colle ici.
 */
const REELS: { code: string; titre: string }[] = [
  { code: 'DbOMCrmqVNj', titre: 'Look en boutique' },
  { code: 'DbLMDqPKC_S', titre: 'Look en boutique' },
  { code: 'DbGXePPxvXj', titre: 'Look en boutique' },
  { code: 'Da8MCKQIxVZ', titre: 'Look en boutique' },
]

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export function InstagramLooks() {
  useEffect(() => {
    const ID = 'instagram-embed-script'
    if (document.getElementById(ID)) {
      window.instgrm?.Embeds.process()
      return
    }
    const script = document.createElement('script')
    script.id = ID
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => window.instgrm?.Embeds.process()
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-16 bg-noir-alt">
      <div className="container-luxury">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-subtitle">En vidéo</p>
            <h2 className="section-title">Les derniers looks</h2>
            <p className="font-sans text-sm text-blanc-casse/60 mt-4 max-w-xl leading-relaxed">
              Les tenues montées en boutique, filmées à Jarry. Ce sont les pièces réellement
              disponibles — si l’une vous plaît, écrivez-nous, on vous dit si elle est encore là.
            </p>
          </div>
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-2.5 px-5"
          >
            Voir sur Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REELS.map((reel) => (
            <blockquote
              key={reel.code}
              className="instagram-media w-full"
              data-instgrm-permalink={`https://www.instagram.com/reel/${reel.code}/`}
              data-instgrm-version="14"
              style={{ background: '#1A1A1A', border: 0, margin: 0, padding: 0, width: '100%' }}
            >
              <a href={`https://www.instagram.com/reel/${reel.code}/`} target="_blank" rel="noopener noreferrer">
                {reel.titre} — voir la vidéo sur Instagram
              </a>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
