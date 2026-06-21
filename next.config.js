/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: '/accueil', destination: '/', permanent: true },
  ],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.leadconnectorhq.com' },
      { protocol: 'https', hostname: 'assets.cdn.filesafe.space' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}
module.exports = nextConfig
