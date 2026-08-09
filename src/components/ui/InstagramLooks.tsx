import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/site-config'
import { IMAGES } from '@/lib/images'

/**
 * Cartes vers les reels, sans le script d'intégration Instagram.
 *
 * L'embed officiel imposait quatre cartes blanches sur fond noir, chacune avec
 * son bandeau de profil, ses mentions J'aime et son champ commentaire — et il
 * ne lisait rien sur place. Ces cartes-ci respectent la charte et annoncent
 * clairement qu'elles ouvrent Instagram.
 *
 * Elles seront remplacées par des vidéos hébergées quand les fichiers seront
 * disponibles, comme cela a été fait pour la section boutique.
 */
const REELS = [
  { code: 'DbOMCrmqVNj', titre: 'Look en boutique', visuel: IMAGES.lookJeanBoutique },
  { code: 'DbLMDqPKC_S', titre: 'Look en boutique', visuel: IMAGES.robeSequinsArgent },
  { code: 'Da8MCKQIxVZ', titre: 'Look en boutique', visuel: IMAGES.vesteBlanchePatchwork },
  { code: 'DbLHcurKCoB', titre: 'Look en boutique', visuel: IMAGES.robeLongueEte },
]

export function InstagramLooks() {
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
            <a
              key={reel.code}
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
          ))}
        </div>

        <p className="font-sans text-xs text-blanc-casse/35 mt-6 text-center">
          Ces vignettes ouvrent Instagram dans un nouvel onglet.
        </p>
      </div>
    </section>
  )
}
