/** @type {import('next-sitemap').IConfig} */

// Les pages à forte intention commerciale passent devant dans le sitemap.
const PRIORITES = {
  '/': 1.0,
  '/boutique/robes-ceremonie-invitee-mariage': 0.9,
  '/boutique/robes-soiree-cocktail': 0.9,
  '/boutique/vetements-femme': 0.8,
  '/boutique/accessoires-bijoux': 0.8,
  '/services/relooking': 0.8,
  '/galerie': 0.8,
  '/createurs': 0.8,
  '/boutique': 0.7,
  '/services': 0.7,
  '/carte-cadeau': 0.7,
  '/contact': 0.7,
}

/* Date de modification : seulement quand on la connait vraiment.
   Les articles portent leur date dans src/lib/blog.ts, on la lit de la.
   Pour les autres pages on n'en donne pas : mettre la date du build partout
   disait a Google que tout changeait a chaque deploiement, et il finit par
   ignorer l'information. */
const fs = require('fs')
const path = require('path')
const blogSource = fs.readFileSync(path.join(__dirname, 'src/lib/blog.ts'), 'utf8')
const DATES_ARTICLES = {}
for (const m of blogSource.matchAll(/slug: '([^']+)'[\s\S]*?dateISO: '(\d{4}-\d{2}-\d{2})'/g)) {
  DATES_ARTICLES['/blog/' + m[1]] = m[2]
}
const DERNIER_ARTICLE = Object.values(DATES_ARTICLES).sort().pop()

module.exports = {
  siteUrl: 'https://www.odysseebybea.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  /* Pages en noindex : le parcours d'avis du QR code. Un sitemap ne doit
     lister que ce qu'on veut voir indexe. */
  exclude: ['/demande-avis', '/demande-avis/*'],
  transform: async (config, chemin) => {
    const lastmod = chemin === '/blog' ? DERNIER_ARTICLE : DATES_ARTICLES[chemin]
    return {
      loc: chemin,
      changefreq: chemin.startsWith('/blog') ? 'monthly' : 'weekly',
      priority: PRIORITES[chemin] ?? 0.6,
      ...(lastmod ? { lastmod } : {}),
    }
  },
}
