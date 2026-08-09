'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'

/**
 * Section « à quoi ressemble la boutique ».
 *
 * Une cliente qui lit « showroom privé » suppose qu'il faut être invitée.
 * Aucune phrase ne lève ce frein aussi bien qu'une vidéo de l'intérieur.
 *
 * Le reel est intégré officiellement (les vidéos restent chez Meta), avec le
 * même repli que la section looks : si un bloqueur empêche le script, la carte
 * photo demeure et mène au reel. On ne se retrouve jamais avec un trou.
 */
const REEL_BOUTIQUE = 'DbGXePPxvXj'

const INTERIEUR = [IMAGES.lookJeanBoutique, IMAGES.vesteBlanchePatchwork, IMAGES.robeLongueEte]

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export function LaBoutique() {
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
    <section className="py-20 relative">
      <div className="gradient-line absolute top-0 left-0 right-0" />
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="section-subtitle">La boutique</p>
            <h2 className="section-title text-blanc-casse mb-6">
              Poussez la porte,<br />
              <span className="italic text-or">c’est ouvert à toutes</span>
            </h2>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-4">
              « Showroom privé » fait parfois croire qu’il faut être invitée. Ce n’est pas le cas :
              la boutique est ouverte à toutes, du mardi au samedi, et l’on peut simplement entrer
              regarder.
            </p>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-8">
              Ce qui est privé, c’est l’attention : Béatrice vous conseille, vous accompagne dans
              vos choix, et prend le temps qu’il faut. Voilà l’endroit, filmé tel quel.
            </p>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {INTERIEUR.map((v) => (
                <div key={v.src} className="relative aspect-square overflow-hidden">
                  <Image
                    src={v.src}
                    alt={v.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 160px"
                  />
                </div>
              ))}
            </div>

            <div className="border-t border-blanc-casse/10 pt-6 space-y-1">
              <address className="not-italic font-sans text-sm text-blanc-casse/70 leading-relaxed">
                {SITE_CONFIG.address.full}
              </address>
              <p className="font-sans text-sm text-blanc-casse/70">
                {SITE_CONFIG.hours} · Parking gratuit
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/galerie" className="btn-primary">
                Voir toutes les pièces
              </Link>
              <Link href="/contact" className="btn-outline">
                Comment venir
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={`https://www.instagram.com/reel/${REEL_BOUTIQUE}/`}
              data-instgrm-version="14"
              style={{ background: '#1A1A1A', border: 0, margin: 0, padding: 0, width: '100%' }}
            >
              <a
                href={`https://www.instagram.com/reel/${REEL_BOUTIQUE}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-[9/16] overflow-hidden"
              >
                <Image
                  src={IMAGES.lookJeanBoutique.src}
                  alt="Visite de la boutique Odyssée à Jarry, en vidéo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                <span className="absolute inset-0 bg-noir/35 group-hover:bg-noir/15 transition-colors" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-blanc-casse/70 bg-noir/50">
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor" className="ml-1 text-blanc-casse">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-4 font-sans text-xs tracking-wide uppercase text-blanc-casse/90">
                  La boutique en vidéo
                </span>
              </a>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}
