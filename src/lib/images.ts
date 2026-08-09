/**
 * Registre central des visuels.
 *
 * Toutes les photos sont hébergées dans /public/images. On n'appelle plus le CDN
 * GoHighLevel : ses URL imbriquées (une URL dans une URL) ne passaient pas
 * l'optimiseur next/image et les visuels ne s'affichaient pas en production.
 *
 * Les `alt` décrivent ce qu'on voit réellement sur la photo — pas ce que le nom
 * de fichier laisse croire. C'est ce que Google lit, et ce qu'entend une cliente
 * qui navigue au lecteur d'écran.
 */

export type Visuel = { src: string; alt: string }

export const IMAGES = {
  robeImprimee: {
    src: '/images/vetements.webp',
    alt: 'Robe imprimée bleue et blanche à volants asymétriques, portée en extérieur en Guadeloupe',
  },
  robeDenim: {
    src: '/images/conseils.webp',
    alt: 'Robe portefeuille en denim à volants avec ceinture nouée et escarpins dorés',
  },
  robeCrochet: {
    src: '/images/stylisme.webp',
    alt: 'Robe longue en crochet argenté portée au bord de l’eau en Guadeloupe',
  },
  vesteImprimee: {
    src: '/images/anniversaire.webp',
    alt: 'Longue veste imprimée turquoise et ocre portée dans la végétation tropicale',
  },
  tenueCrochetBeige: {
    src: '/images/shooting.webp',
    alt: 'Top en crochet beige à franges, boucles d’oreilles coquillage et sac en paille, en bord de mer',
  },
  miseEnBeaute: {
    src: '/images/relooking.webp',
    alt: 'Mise en beauté d’une mannequin en coulisses avant un défilé Odyssée',
  },
  accessoires: {
    src: '/images/accessoires.webp',
    alt: 'Boucles d’oreilles en raphia turquoise, bracelet de cheville et sandales ornées, présentés en boutique à Jarry',
  },
  bijoux: {
    src: '/images/bijoux.webp',
    alt: 'Boucles d’oreilles artisanales à pompons de raphia turquoise et perles bleues',
  },
  carteCadeau: {
    src: '/images/carte-cadeau.webp',
    alt: 'Visuel de la carte cadeau Odyssée, valable en boutique à Jarry, Baie-Mahault',
  },
  lookWax: {
    src: '/images/look-wax-moderne.webp',
    alt: 'Look wax moderne : haut en résille bordé de wax et jupe assortie, porté en Guadeloupe',
  },
  ensembleImprime: {
    src: '/images/ensemble-imprime-tropical.webp',
    alt: 'Ensemble long imprimé bleu et ocre avec pantalon large, porté en extérieur en Guadeloupe',
  },
  totalLookBlanc: {
    src: '/images/total-look-blanc.webp',
    alt: 'Total look blanc en broderie anglaise, épaules dénudées, porté sur un ponton en Guadeloupe',
  },
  defile: {
    src: '/images/defile-mode-2024.webp',
    alt: 'Affiche du défilé de mode Odyssée organisé au Casino du Gosier en décembre 2024',
  },
  degustation: {
    src: '/images/degustation-boutique.webp',
    alt: 'Affiche de la soirée dégustation organisée à la boutique Odyssée en janvier 2025',
  },
  logo: {
    src: '/images/logo-odyssee.webp',
    alt: 'Logo Odyssée Showroom Privé, lettrage doré sur fond noir',
  },
} as const satisfies Record<string, Visuel>

/** Soirée & cocktail — les looks les plus habillés. */
export const GALERIE_SOIREE: Visuel[] = [
  IMAGES.robeImprimee,
  IMAGES.totalLookBlanc,
  IMAGES.robeDenim,
  IMAGES.ensembleImprime,
  IMAGES.lookWax,
  IMAGES.robeCrochet,
]

/** Cérémonie & invitée de mariage. */
export const GALERIE_CEREMONIE: Visuel[] = [
  IMAGES.totalLookBlanc,
  IMAGES.robeDenim,
  IMAGES.ensembleImprime,
  IMAGES.robeImprimee,
]

/** Prêt-à-porter du quotidien. */
export const GALERIE_PAP: Visuel[] = [
  IMAGES.ensembleImprime,
  IMAGES.vesteImprimee,
  IMAGES.lookWax,
  IMAGES.robeImprimee,
]

/** Accessoires & bijoux. */
export const GALERIE_ACCESSOIRES: Visuel[] = [
  IMAGES.bijoux,
  IMAGES.accessoires,
  IMAGES.tenueCrochetBeige,
]

/** Shooting photo — mise en situation et coulisses. */
export const GALERIE_SHOOTING: Visuel[] = [
  IMAGES.robeCrochet,
  IMAGES.tenueCrochetBeige,
  IMAGES.totalLookBlanc,
  IMAGES.miseEnBeaute,
  IMAGES.vesteImprimee,
  IMAGES.lookWax,
]
