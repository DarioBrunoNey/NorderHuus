import { site } from '@/content/site';
import { faqItems } from '@/content/faq';

/**
 * Strukturierte Daten (Schema.org / JSON-LD)
 * ==========================================
 * - VacationRental: Beschreibung des Ferienhauses für Google
 * - FAQPage: FAQ-Rich-Results
 * - BreadcrumbList: Brotkrumen für Unterseiten
 */

export function vacationRentalJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: site.name,
    description: site.tagline,
    url: site.domain,
    image: `${site.domain}${site.hero.image}`,
    address: {
      '@type': 'PostalAddress',
      ...(site.property.street ? { streetAddress: site.property.street } : {}),
      addressLocality: 'Norden',
      postalCode: site.property.zipCity.split(' ')[0],
      addressRegion: 'Niedersachsen',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.property.lat,
      longitude: site.property.lng,
    },
    containsPlace: {
      '@type': 'Accommodation',
      occupancy: { '@type': 'QuantitativeValue', maxValue: site.facts.persons, unitCode: 'C62' },
      floorSize: { '@type': 'QuantitativeValue', value: site.facts.sqm, unitCode: 'MTK' },
      numberOfBedrooms: site.facts.bedrooms,
      numberOfBathroomsTotal: site.facts.bathrooms,
      amenityFeature: site.highlights.map((h) => ({
        '@type': 'LocationFeatureSpecification',
        name: h.label,
        value: true,
      })),
    },
    petsAllowed: false,
    smokingAllowed: false,
    checkinTime: '16:00',
    checkoutTime: '10:00',
    ...(site.contact.phone || site.contact.mobile
      ? { telephone: site.contact.phone || site.contact.mobile }
      : {}),
  };
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: site.domain },
      ...items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: it.name,
        item: `${site.domain}${it.path}`,
      })),
    ],
  };
}
