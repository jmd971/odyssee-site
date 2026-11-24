import { IMAGES, type Visuel } from './images'

/**
 * Pièces mises en avant avec leur prix sur /boutique.
 *
 * Le reste du site montre des galeries sans prix parce que le stock tourne.
 * Ici, c'est l'inverse : prix et tailles sont donnés par Béatrice, pièce par
 * pièce. Quand une pièce est vendue, on la retire de cette liste, on ne la
 * laisse pas affichée « au cas où ».
 */
export type Piece = {
  /** Sert d'ancre dans la page : /boutique#robe-vichy-bleue */
  id: string
  nom: string
  visuel: Visuel
  /** En euros, TTC. */
  prix: number
  tailles: string
  createur?: string
  description: string
  /** Accessoires portés sur la photo et vendus séparément. */
  accessoires?: { nom: string; prix: number }[]
}

export const NOUVEAUTES: Piece[] = [
  {
    id: 'robe-vichy-bleue',
    nom: 'Robe vichy bleue',
    visuel: IMAGES.robeVichyBleue,
    prix: 110,
    tailles: 'Tailles S, M et L',
    description:
      'Robe ample en vichy bleu et blanc.',
    accessoires: [
      { nom: 'Collier pompon', prix: 42 },
      { nom: 'Sautoir', prix: 45 },
    ],
  },
  {
    id: 'robe-fuchsia-glam-ethnik',
    nom: 'Robe longue fuchsia',
    visuel: IMAGES.robeFuchsiaGlamEthnik,
    prix: 140,
    tailles: 'Taille unique',
    createur: 'GlamEthnik',
    description:
      'Robe longue rose fuchsia, sans manches, de la marque GlamEthnik.',
  },
]
