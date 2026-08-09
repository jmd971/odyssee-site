'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'

/**
 * Reels Instagram en intégration officielle, avec repli visible.
 *
 * Le script d'Instagram remplace chaque <blockquote> par une iframe. Mais un
 * bloqueur de pub ou une protection anti-pistage empêche souvent ce script de
 * se charger — et dans ce cas la section resterait vide.
 *
 * D'où le contenu de repli placé À L'INTÉRIEUR du blockquote : une vraie carte
 * cliquable avec une photo. Si Instagram se charge, la carte est remplacée par
 * la vidéo ; sinon, la visiteuse voit une carte propre qui mène au reel.
 * Dans les deux cas, il y a toujours quelque chose à l'écran.
 */
const REELS = [
  { code: 'DbOMCrmqVNj', titre: 'Look en boutique', visuel: IMAGES.lookJeanBoutique },
  { code: 'DbLMDqPKC_S', titre: 'Look en boutique', visuel: IMAGES.robeSequinsArgent },
  { code: 'DbGXePPxvXj', titre: 'Look en boutique', visuel: IMAGES.chemisesImprimees },
  { code: 'Da8MCKQIxVZ', titre: 'Look en boutique', visuel: IMAGES.vesteBlanchePatchwork },
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
              Les tenues montées en boutique, filmées à Jarry. Ce sont des pièces réellement
              passées en rayon : si l’une vous plaît, écrivez-nous, on vous dit si elle est encore là.
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {REELS.map((reel) => (
            <blockquote
              key={reel.code}
              className="instagram-media w-full"
              data-instgrm-permalink={`https://www.instagram.com/reel/${reel.code}/`}
              data-instgrm-version="14"
              style={{ background: '#1A1A1A', border: 0, margin: 0, padding: 0, width: '100%' }}
            >
              {/* Repli : visible tant qu'Instagram n'a pas pris la main, ou s'il est bloqué */}
              <a
                href={`https://www.instagram.com/reel/${reel.code}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-[9/16] overflow-hidden"
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blanc-casse/70 bg-noir/40">
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="currentColor" className="text-blanc-casse ml-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-3 font-sans text-[11px] tracking-wide uppercase text-blanc-casse/90">
                  {reel.titre}
                </span>
              </a>
            </blockquote>
          ))}
        </div>

        <p className="font-sans text-xs text-blanc-casse/35 mt-6 text-center">
          Les vidéos sont hébergées sur Instagram. Si votre navigateur bloque les contenus
          externes, les vignettes ci-dessus ouvrent directement le compte.
        </p>
      </div>
    </section>
  )
}
