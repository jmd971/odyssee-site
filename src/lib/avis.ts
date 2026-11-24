/**
 * Vrais avis Google, recopies mot pour mot depuis la fiche le 24/11/2026.
 * Tous notes 5/5. Prenom et initiale du nom seulement. Pour en ajouter :
 * copier le texte sans le modifier, garder le mois de visite affiche par
 * Google. Un seul emoji final a ete retire dans l'avis de Camille.
 */
export type AvisClient = { texte: string; auteur: string; visite: string }

export const AVIS = {
  camille: {
    texte: 'Accueil des plus chaleureux et conseils très avisés. Ma maman et moi avons passé un moment super agréable. Mille mercis',
    auteur: 'Camille',
    visite: 'juillet 2025',
  },
  kelley: {
    texte: 'Un accueil très chaleureux, avec des articles de qualité. Béatrice est une personne très agréable, à l’écoute et de très bon conseil. On se sent vraiment bien accueilli et accompagné. Je recommande chaudement.',
    auteur: 'Kelley K.',
    visite: 'septembre 2026',
  },
  celineChoix: {
    texte: 'Cette boutique offre un large choix d’articles des plus simples aux plus originaux, de la simple robe fluide à la robe de créateur Grecque !',
    auteur: 'Céline R.',
    visite: 'mai 2026',
  },
} satisfies Record<string, AvisClient>
