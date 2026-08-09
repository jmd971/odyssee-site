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
  '/boutique': 0.7,
  '/services': 0.7,
  '/carte-cadeau': 0.7,
  '/contact': 0.7,
}

module.exports = {
  siteUrl: 'https://odysseebybea.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq: path.startsWith('/blog') ? 'monthly' : 'weekly',
    priority: PRIORITES[path] ?? 0.6,
    lastmod: new Date().toISOString(),
  }),
}
