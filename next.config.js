/** @type {import('next').NextConfig} */

/* Heritage GoHighLevel. L'ancien site a ete remplace en aout 2026 mais ses
   adresses vivent encore dans l'index de Google : au 10/09/2026, Search
   Console en connait dix-neuf, dont sept en erreur et douze explorees sans
   etre indexees.

   Deux principes pour cette table :
   - permanent, jamais temporaire. Seul le permanent transmet ce que la
     vieille adresse avait accumule.
   - chaque adresse va vers la page la plus proche par le sens, jamais tout
     vers l'accueil. Un groupage massif se lit comme une page vide.

   Les articles sont le cas qui compte le plus : le meme texte existait
   sous /post/... et vit maintenant sous /blog/..., a un slug pres. */
const ANCIENNES_URLS = [
  // Articles : meme contenu, nouvelle adresse
  ['/post/comment-accessoiriser-une-tenue-pour-un-look-chic-et-elegant', '/blog/accessoiriser-tenue-chic-elegante'],
  ['/post/les-5-tendances-mode-incontournables-en-guadeloupe', '/blog/tendances-mode-guadeloupe'],

  // Variantes d'accueil, faute de frappe comprise
  ['/accueil', '/'],
  ['/acceuil', '/'],
  ['/accueil-9271', '/'],
  ['/acceuil-sav', '/'],

  // Carte cadeau : l'ancienne adresse portait une coquille sur le nom
  ['/carte-cadeau-odissee-showroom-prive', '/carte-cadeau'],
  ['/paiement-cadeau', '/carte-cadeau'],

  // Evenement date de 2024 : la page evenements le remplace
  ['/defile-mode-10-novembre-2024', '/evenements'],
  ['/defile-gosier', '/evenements'],

  // Parcours d'achat GoHighLevel : le nouveau site ne vend pas en ligne,
  // la boutique est l'intention la plus proche
  ['/cart', '/boutique'],
  ['/caisse', '/boutique'],
  ['/checkout', '/boutique'],

  // Programme de fidelite : plus rien derriere
  ['/fidelite', '/contact'],

  // Parcours d'avis par QR code. Les deux pages d'arrivee de l'ancien
  // funnel retrouvent leur destination : la branche positive va au
  // formulaire d'avis Google, la branche negative a la page interne.
  ['/avis-positif-4509-6601', 'https://g.page/r/CbBfVyCsFPbfEBM/review'],
  ['/avis-negatif-4475-4248', '/demande-avis/nous-le-dire'],
  ['/avis', '/demande-avis'],
]

const nextConfig = {
  redirects: async () => [
    ...ANCIENNES_URLS.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    })),

    /* Filets pour les adresses de meme forme que Search Console n'a pas
       encore remontees. Places apres la table : Next applique la premiere
       regle qui correspond, les articles nommes ci-dessus gardent donc
       leur destination exacte. */
    { source: '/post/:slug*', destination: '/blog', permanent: true },
    { source: '/product-details/:path*', destination: '/boutique', permanent: true },
  ],
  images: {
    // Les photos de la boutique sont servies depuis /public/images.
    // Les domaines YouTube restent autorisés pour les vignettes vidéo à venir.
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}
module.exports = nextConfig
