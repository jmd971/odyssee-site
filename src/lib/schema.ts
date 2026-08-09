import { SITE_CONFIG } from './site-config'

const OPEN_DAYS = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function clothingStoreSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': `${SITE_CONFIG.url}/#boutique`,
    name: SITE_CONFIG.name,
    alternateName: 'Odyssée by Béa',
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    image: `${SITE_CONFIG.url}/images/logo-odyssee.webp`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    areaServed: [
      { '@type': 'City', name: 'Baie-Mahault' },
      { '@type': 'City', name: 'Pointe-à-Pitre' },
      { '@type': 'City', name: 'Les Abymes' },
      { '@type': 'AdministrativeArea', name: 'Guadeloupe' },
    ],
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPEN_DAYS,
        opens: '10:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE_CONFIG.rating.value,
      reviewCount: SITE_CONFIG.rating.count,
    },
    sameAs: Object.values(SITE_CONFIG.social),
  }
}

export type FaqItem = { question: string; answer: string }

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** `trail` : du plus général au plus précis, sans l'accueil (ajouté ici). */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: 'Accueil', path: '' }, ...trail]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  }
}

export function itemListSchema(name: string, entries: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: entries.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      url: `${SITE_CONFIG.url}${entry.path}`,
    })),
  }
}

export function serviceSchema(params: {
  name: string
  description: string
  path: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: `${SITE_CONFIG.url}${params.path}`,
    provider: { '@id': `${SITE_CONFIG.url}/#boutique` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Guadeloupe' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE_CONFIG.booking,
      servicePhone: SITE_CONFIG.phone,
    },
  }
}

export function articleSchema(params: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: `${SITE_CONFIG.url}${params.image ?? '/images/logo-odyssee.webp'}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.url}${params.path}` },
    author: { '@type': 'Person', name: 'Béatrice Populo' },
    publisher: { '@id': `${SITE_CONFIG.url}/#boutique` },
  }
}
