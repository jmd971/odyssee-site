import { SITE_CONFIG } from './site-config'

export function clothingStoreSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressRegion: SITE_CONFIG.address.region,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: SITE_CONFIG.hoursSchema.map((_h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '10:00',
      closes: '19:00',
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.rating.value,
      reviewCount: SITE_CONFIG.rating.count,
    },
    sameAs: Object.values(SITE_CONFIG.social),
  }
}