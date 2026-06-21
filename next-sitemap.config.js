/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://odysseebybea.fr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}