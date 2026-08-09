/**
 * Registre central des visuels.
 *
 * Tout est hébergé dans /public/images — on n'appelle plus aucun CDN externe.
 * Les photos viennent de deux sources : les shootings de l'ancien site, et le
 * compte Instagram @odyssee.boutique.
 *
 * `alt` décrit ce qu'on voit réellement, pas ce que le nom de fichier suggère.
 * `credit` s'affiche sous la photo quand la pièce vient d'un créateur partenaire :
 * c'est une exigence de loyauté vis-à-vis d'eux, et ça crédibilise l'argument
 * « pièces de créateurs » auprès des clientes.
 */

export type Visuel = { src: string; alt: string; credit?: string }

export const IMAGES = {
  // ── Soirée, cocktail, cérémonie ────────────────────────────────────────────
  robeRougeSequins: {
    src: '/images/robe-soiree-rouge-sequins.jpg',
    alt: 'Robe de soirée longue rouge à sequins avec fente, portée lors d’une soirée en Guadeloupe',
  },
  robeSequinsArgent: {
    src: '/images/robe-sequins-argent.jpg',
    alt: 'Robe courte à sequins argentés portée avec des sandales à talons dans la boutique de Jarry',
  },
  combinaisonBatik: {
    src: '/images/combinaison-batik-cape.jpg',
    alt: 'Combinaison en batik ocre avec cape assortie orange, portée avec des sandales dorées',
    credit: 'Pièce Glam Ethnik',
  },
  robePeplum: {
    src: '/images/robe-bustier-peplum-plage.jpg',
    alt: 'Robe bustier péplum imprimée à motif papillon orange, portée en bord de mer en Guadeloupe',
  },
  robeBatik: {
    src: '/images/robe-batik.jpg',
    alt: 'Robe en batik portée en extérieur en Guadeloupe',
    credit: 'Pièce Glam Ethnik',
  },
  hautStrass: {
    src: '/images/haut-strass.jpg',
    alt: 'Haut parsemé de strass porté en soirée, sélection Odyssée Showroom Privé',
  },
  totalLookBlanc: {
    src: '/images/total-look-blanc.webp',
    alt: 'Total look blanc en broderie anglaise, épaules dénudées, porté sur un ponton en Guadeloupe',
  },
  robeDenim: {
    src: '/images/conseils.webp',
    alt: 'Robe portefeuille en denim à volants avec ceinture nouée et escarpins dorés',
  },
  robeImprimee: {
    src: '/images/vetements.webp',
    alt: 'Robe imprimée bleue et blanche à volants asymétriques, portée en extérieur en Guadeloupe',
  },
  robeCrochet: {
    src: '/images/stylisme.webp',
    alt: 'Robe longue en crochet argenté portée au bord de l’eau en Guadeloupe',
  },

  // ── Prêt-à-porter du quotidien ─────────────────────────────────────────────
  robeLongueEte: {
    src: '/images/robe-longue-imprimee-ete.jpg',
    alt: 'Robe longue bleue à imprimé cabines de plage, essayée dans la boutique de Jarry',
  },
  chemisesImprimees: {
    src: '/images/chemises-imprimees-jean.jpg',
    alt: 'Deux chemises imprimées à motif perroquet portées avec des jeans, dans la boutique Odyssée',
  },
  vesteBlanchePatchwork: {
    src: '/images/veste-blanche-patchwork.jpg',
    alt: 'Veste blanche à empiècements patchwork pop art portée avec un jean droit',
  },
  vesteKimonoWax: {
    src: '/images/veste-kimono-wax.jpg',
    alt: 'Veste kimono grise à empiècements wax portée avec un short en jean, en extérieur',
  },
  duoWaxJean: {
    src: '/images/duo-wax-jean.jpg',
    alt: 'Jupe boule en wax jaune et veste grise à empiècements wax, portées à deux en extérieur',
  },
  lookWax: {
    src: '/images/look-wax-moderne.webp',
    alt: 'Look wax moderne : haut en résille bordé de wax et jupe assortie, porté en Guadeloupe',
  },
  ensembleImprime: {
    src: '/images/ensemble-imprime-tropical.webp',
    alt: 'Ensemble long imprimé bleu et ocre avec pantalon large, porté en extérieur en Guadeloupe',
  },
  vesteImprimee: {
    src: '/images/anniversaire.webp',
    alt: 'Longue veste imprimée turquoise et ocre portée dans la végétation tropicale',
  },
  lookVaalayam: {
    src: '/images/look-vaalayam.jpg',
    alt: 'Tenue estivale portée en Guadeloupe, sélection disponible chez Odyssée',
    credit: 'Pièce Vaalayam',
  },
  marqueWm: {
    src: '/images/marque-wm.jpg',
    alt: 'Pièce de la marque Wm, désormais disponible à la boutique Odyssée de Jarry',
    credit: 'Marque Wm',
  },
  lookCouleur: {
    src: '/images/look-couleur.jpg',
    alt: 'Tenue colorée portée en Guadeloupe, alternative au total look noir',
  },

  // ── Boutique, coulisses, accessoires ───────────────────────────────────────
  lookJeanBoutique: {
    src: '/images/look-jean-boutique.jpg',
    alt: 'Bustier en jean et boucles d’oreilles en denim, présentés dans la boutique de Jarry',
  },
  nouvellesPieces: {
    src: '/images/nouvelles-pieces-boutique.jpg',
    alt: 'Nouvelles pièces arrivées à la boutique Odyssée à Jarry, Baie-Mahault',
  },
  accessoires: {
    src: '/images/accessoires.webp',
    alt: 'Boucles d’oreilles en raphia turquoise, bracelet de cheville et sandales ornées, présentés en boutique à Jarry',
  },
  bijoux: {
    src: '/images/bijoux.webp',
    alt: 'Boucles d’oreilles artisanales à pompons de raphia turquoise et perles bleues',
  },
  tenueCrochetBeige: {
    src: '/images/shooting.webp',
    alt: 'Top en crochet beige à franges, boucles d’oreilles coquillage et sac en paille, en bord de mer',
  },
  miseEnBeaute: {
    src: '/images/relooking.webp',
    alt: 'Mise en beauté d’une mannequin en coulisses avant un défilé Odyssée',
  },
  carteCadeau: {
    src: '/images/carte-cadeau.webp',
    alt: 'Visuel de la carte cadeau Odyssée, valable en boutique à Jarry, Baie-Mahault',
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

/** Soirée & cocktail — les pièces les plus habillées. */
export const GALERIE_SOIREE: Visuel[] = [
  IMAGES.robeRougeSequins,
  IMAGES.robePeplum,
  IMAGES.robeSequinsArgent,
  IMAGES.hautStrass,
  IMAGES.robeDenim,
  IMAGES.robeCrochet,
]

/** Cérémonie & invitée de mariage — tenue longue, matières qui tiennent la journée. */
export const GALERIE_CEREMONIE: Visuel[] = [
  IMAGES.combinaisonBatik,
  IMAGES.totalLookBlanc,
  IMAGES.robeBatik,
  IMAGES.ensembleImprime,
  IMAGES.robeImprimee,
  IMAGES.robeDenim,
]

/** Prêt-à-porter du quotidien. */
export const GALERIE_PAP: Visuel[] = [
  IMAGES.chemisesImprimees,
  IMAGES.robeLongueEte,
  IMAGES.vesteBlanchePatchwork,
  IMAGES.duoWaxJean,
  IMAGES.vesteKimonoWax,
  IMAGES.lookVaalayam,
  IMAGES.marqueWm,
  IMAGES.lookCouleur,
]

/** Wax, batik et adiré — l'ancrage antillais, en pièces portables. */
export const GALERIE_WAX: Visuel[] = [
  IMAGES.combinaisonBatik,
  IMAGES.robeBatik,
  IMAGES.duoWaxJean,
  IMAGES.vesteKimonoWax,
  IMAGES.lookWax,
]

/** Accessoires & bijoux. */
export const GALERIE_ACCESSOIRES: Visuel[] = [
  IMAGES.bijoux,
  IMAGES.accessoires,
  IMAGES.lookJeanBoutique,
  IMAGES.tenueCrochetBeige,
]

/** Shooting photo — mise en situation et coulisses. */
export const GALERIE_SHOOTING: Visuel[] = [
  IMAGES.robeCrochet,
  IMAGES.tenueCrochetBeige,
  IMAGES.robePeplum,
  IMAGES.miseEnBeaute,
  IMAGES.vesteImprimee,
  IMAGES.lookWax,
]

/** Vie de la boutique — sert la page d'accueil et les événements. */
export const GALERIE_BOUTIQUE: Visuel[] = [
  IMAGES.lookJeanBoutique,
  IMAGES.nouvellesPieces,
  IMAGES.robeSequinsArgent,
  IMAGES.chemisesImprimees,
  IMAGES.vesteBlanchePatchwork,
  IMAGES.robeLongueEte,
  IMAGES.miseEnBeaute,
  IMAGES.accessoires,
]
