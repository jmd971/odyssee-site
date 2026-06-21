/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: '/accueil', destination: '/', permanent: true },
  ],
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com'],
  },
}
module.exports = nextConfig