/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: '/accueil', destination: '/', permanent: true },
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
