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
 * La vidéo est hébergée sur le site, pas intégrée depuis Instagram : l'embed
 * imposait une carte blanche, les mentions J'aime, un bouton pointant vers un
 * autre compte, et il exportait la visiteuse au lieu de lire sur place.
 *
 * Le fichier est la visite de la boutique fournie par la cliente — une minute
 * qui parcourt les portants et la nouvelle sélection. preload="none" : les
 * 7,8 Mo ne se téléchargent qu'au clic, la page reste légère.
 */
const INTERIEUR = [IMAGES.lookJeanBoutique, IMAGES.vesteBlanchePatchwork, IMAGES.robeLongueEte]

export function LaBoutique() {
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
              <a
                href={SITE_CONFIG.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Itinéraire
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            {/* Video hebergee : preload="none" + poster, donc aucun octet tant
                qu'on ne clique pas, et surtout la lecture se fait ICI. */}
            <video
              controls
              playsInline
              preload="none"
              poster={IMAGES.lookJeanBoutique.src}
              className="w-full aspect-[9/16] object-cover bg-noir"
            >
              <source src="/videos/boutique-jarry.mp4" type="video/mp4" />
              Votre navigateur ne peut pas lire cette vidéo.
            </video>
            <p className="font-sans text-xs text-blanc-casse/40 mt-3 text-center">
Une minute dans la boutique — immeuble Les Lilas, Jarry.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
