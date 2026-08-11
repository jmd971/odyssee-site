export const SITE_CONFIG = {
  name: 'Odyssée Showroom Privé',
  nameFull: 'Odyssée Showroom Privé – by Béa',
  url: 'https://www.odysseebybea.fr',
  description: 'Boutique de mode femme à Jarry, Guadeloupe. Robes de soirée, prêt-à-porter chic et accessoires. Conseil personnalisé par Béatrice.',
  address: {
    street: 'Immeuble Les Lilas, Impasse Guy Cornély',
    city: 'Baie-Mahault',
    postalCode: '97122',
    region: 'Guadeloupe',
    country: 'FR',
    full: 'Immeuble Les Lilas, Impasse Guy Cornély, 97122 Baie-Mahault, Guadeloupe',
  },
  phone: '+590590981881',
  phoneDisplay: '0590 98 18 81',
  whatsapp: 'https://wa.me/590690087377',
  whatsappDisplay: '0690 087 377',
  hours: 'Mardi–Samedi : 10h–19h',
  hoursSchema: ['Tu-Sa 10:00-19:00'],
  booking: 'https://link.siboard-consulting.fr/widget/booking/9GoysJn1UJxEaNb5qN2y',
  /* Fiche Google par son identifiant : ouvre l'app Maps et lance l'itineraire
     sur mobile, affiche la fiche complete (horaires, photos, avis) ailleurs. */
  maps: 'https://maps.google.com/?cid=16138109044238278576',
  social: {
    instagram: 'https://instagram.com/odyssee.boutique',
    facebook: 'https://facebook.com/odysseebybea',
    youtube: 'https://youtube.com/@odysseebybea',
  },
  geo: { latitude: 16.2650, longitude: -61.5770 },
  rating: { value: 4.9, count: 30 },
}

/**
 * Lien WhatsApp avec message pre-rempli.
 * Une cliente qui doit rediger son message depuis zero renonce souvent ;
 * la phrase amorcee suffit a declencher l'envoi.
 */
export function whatsappAvec(message: string) {
  return `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`
}
