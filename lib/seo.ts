import { site } from '@/content/site';
import { faqItems } from '@/content/faq';
import { galleryImages } from '@/content/gallery';

/**
 * Strukturierte Daten (Schema.org / JSON-LD)
 * ==========================================
 * Saubere, verknüpfte @graph-Struktur für maximale Maschinenlesbarkeit
 * (Google-Verständnis, Knowledge Panel, Voice Search, KI-Suche).
 *
 * Bausteine:
 * - Organization (Betreiber Ferienwohnungen Bruno)
 * - WebSite
 * - LodgingBusiness/VacationRental (das Ferienhaus mit allen Eigenschaften)
 * - Accommodation (buchbare Einheit, in containsPlace)
 * - FAQPage (Startseite)
 * - BreadcrumbList (Unterseiten)
 *
 * Hinweis: AggregateRating/Review werden bewusst NICHT erzeugt, solange keine
 * echten Bewertungen vorliegen (Google-Richtlinie; erfundene Bewertungen führen
 * zu manuellen Abstrafungen). Sobald Google-/Gäste-Bewertungen vorliegen, kann
 * der Block ergänzt werden.
 */

const ORIGIN = site.domain; // https://www.norderhuus.de
const ID = {
  org: `${ORIGIN}/#organization`,
  website: `${ORIGIN}/#website`,
  lodging: `${ORIGIN}/#lodging`,
  accommodation: `${ORIGIN}/#accommodation`,
};

/** Absolute Bild-URL erzeugen */
function img(path: string) {
  return path.startsWith('http') ? path : `${ORIGIN}${path}`;
}

/**
 * Ausstattungsmerkmale als LocationFeatureSpecification.
 * value:true = vorhanden, value:false = explizit nicht vorhanden (z. B. Haustiere).
 * So versteht Google sowohl positive Merkmale als auch klare Ausschlüsse.
 */
function amenities() {
  const features: { name: string; value: boolean }[] = [
    { name: 'WLAN (kostenlos)', value: true },
    { name: 'Voll ausgestattete Küche', value: true },
    { name: 'Geschirrspüler', value: true },
    { name: 'Kühl-/Gefrierkombination', value: true },
    { name: 'Kaffeemaschine', value: true },
    { name: 'Waschmaschine', value: true },
    { name: 'Wäschetrockner', value: true },
    { name: 'Smart-TV', value: true },
    { name: 'Garten', value: true },
    { name: 'Terrasse', value: true },
    { name: 'Gartenmöbel', value: true },
    { name: 'Carport / Parkplatz am Haus', value: true },
    { name: 'Eingezäunter Garten', value: true },
    { name: 'Spielplatz in unmittelbarer Nähe', value: true },
    { name: 'Nichtraucherunterkunft', value: true },
    { name: 'Haustiere erlaubt', value: false },
  ];
  return features.map((f) => ({
    '@type': 'LocationFeatureSpecification',
    name: f.name,
    value: f.value,
  }));
}

/** Die wichtigsten Bilder (Schlaf-, Bad-, Gemeinschaftsräume, Außen) für das Listing */
function listingImages() {
  // Reihenfolge: Außen/Hero zuerst, dann je Kategorie mind. ein Bild – Google
  // empfiehlt mind. 8 Bilder inkl. Schlaf-, Bad- und Gemeinschaftsräumen.
  const pick = [
    'hero.jpg',
    'wohnen-essen.jpg',
    'kueche-2.jpg',
    'schlafzimmer-1.jpg',
    'schlafzimmer-4.jpg',
    'bad-1.jpg',
    'bad-2.jpg',
    'garten-1.jpg',
  ];
  const urls = pick
    .map((name) => galleryImages.find((g) => g.src.includes(name)))
    .filter(Boolean)
    .map((g) => img((g as { src: string }).src));
  // Fallback: falls eine Datei fehlt, mindestens Hero
  return urls.length ? urls : [img(site.hero.image)];
}

/** Postanschrift des Ferienhauses */
function propertyAddress() {
  const [zip, ...cityParts] = site.property.zipCity.split(' ');
  return {
    '@type': 'PostalAddress',
    streetAddress: site.property.street,
    addressLocality: cityParts.join(' ') || 'Norden',
    postalCode: zip,
    addressRegion: 'Niedersachsen',
    addressCountry: 'DE',
  };
}

/** Betreiber-Organisation */
function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ID.org,
    name: site.contact.company, // Ferienwohnungen Bruno
    url: ORIGIN,
    image: img(site.hero.image),
    logo: img(site.hero.image),
    ...(site.contact.email ? { email: site.contact.email } : {}),
    telephone: site.contact.phone || site.contact.mobile,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.street,
      postalCode: site.contact.zipCity.split(' ')[0],
      addressLocality: site.contact.zipCity.split(' ').slice(1).join(' '),
      addressCountry: 'DE',
    },
    ...(site.contact.instagram ? { sameAs: [site.contact.instagram] } : {}),
  };
}

/** WebSite-Knoten */
function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: ORIGIN,
    name: site.name,
    inLanguage: 'de-DE',
    publisher: { '@id': ID.org },
  };
}

/** Die buchbare Unterkunft (Accommodation) mit Detaildaten */
function accommodationNode() {
  return {
    '@type': ['Accommodation', 'House'],
    '@id': ID.accommodation,
    name: site.name,
    identifier: 'norderhuus-norden-do10b',
    additionalType: 'House',
    occupancy: {
      '@type': 'QuantitativeValue',
      value: site.facts.persons,
      maxValue: site.facts.persons,
      unitText: 'Personen',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: site.facts.sqm,
      unitCode: 'MTK', // Quadratmeter
    },
    numberOfBedrooms: site.facts.bedrooms,
    numberOfBathroomsTotal: site.facts.bathrooms,
    numberOfRooms: site.facts.bedrooms,
    ...(site.schemaExtras.numberOfBeds > 0
      ? {
          numberOfBeds: site.schemaExtras.numberOfBeds,
          bed: {
            '@type': 'BedDetails',
            numberOfBeds: site.schemaExtras.numberOfBeds,
            typeOfBed: 'Doppelbett',
          },
        }
      : {}),
    petsAllowed: false,
    smokingAllowed: false,
    amenityFeature: amenities(),
  };
}

/**
 * Hauptknoten: LodgingBusiness + VacationRental kombiniert.
 * LodgingBusiness erlaubt amenityFeature/Geschäftsdaten; VacationRental ist der
 * spezifische Typ für Ferienunterkünfte. Beide Typen zusammen = maximale Abdeckung.
 */
function lodgingNode() {
  return {
    '@type': ['LodgingBusiness', 'VacationRental'],
    '@id': ID.lodging,
    name: site.name,
    description: site.tagline,
    url: ORIGIN,
    identifier: 'norderhuus-norden-do10b',
    image: listingImages(),
    address: propertyAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.property.lat,
      longitude: site.property.lng,
    },
    telephone: site.contact.phone || site.contact.mobile,
    ...(site.contact.email ? { email: site.contact.email } : {}),
    checkinTime: '16:00',
    checkoutTime: '10:00',
    petsAllowed: false,
    smokingAllowed: false,
    numberOfRooms: site.facts.bedrooms,
    amenityFeature: amenities(),
    containsPlace: { '@id': ID.accommodation },
    isAccessibleForFree: false,
    currenciesAccepted: 'EUR',
    knowsLanguage: ['de'],
    provider: { '@id': ID.org },
    ...(site.schemaExtras.starRating > 0
      ? {
          starRating: {
            '@type': 'Rating',
            ratingValue: site.schemaExtras.starRating,
            bestRating: 5,
          },
        }
      : {}),
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Direkt buchen',
      target: `${ORIGIN}/preise-und-verfuegbarkeit`,
    },
    // Offer nur ausgeben, wenn ein echter "ab"-Preis hinterlegt ist – ein leeres
    // Offer ohne Preis erzeugt bei Google nur Warnungen. Preise laufen sonst
    // dynamisch über das vOffice-Buchungswidget.
    ...(site.schemaExtras.priceFrom > 0
      ? {
          makesOffer: {
            '@type': 'Offer',
            url: `${ORIGIN}/preise-und-verfuegbarkeit`,
            availability: 'https://schema.org/InStock',
            priceCurrency: 'EUR',
            businessFunction: 'https://schema.org/LeaseOut',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: site.schemaExtras.priceFrom,
              priceCurrency: 'EUR',
              description: 'Preis pro Nacht ab',
            },
          },
        }
      : {}),
  };
}

/**
 * Globaler @graph für das Layout. Verknüpft Organization, WebSite,
 * LodgingBusiness/VacationRental und Accommodation über @id-Referenzen.
 */
export function siteGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(),
      websiteNode(),
      lodgingNode(),
      accommodationNode(),
    ],
  };
}

/** Kompatibilität: alter Funktionsname zeigt auf den neuen Graph */
export function vacationRentalJsonLd() {
  return siteGraphJsonLd();
}

/** FAQPage – für Startseite */
export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${ORIGIN}/#faq`,
    inLanguage: 'de-DE',
    isPartOf: { '@id': ID.website },
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** BreadcrumbList – für Unterseiten */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: ORIGIN },
      ...items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: it.name,
        item: `${ORIGIN}${it.path}`,
      })),
    ],
  };
}

/** ImageObject-Liste der Galerie – optional auf der Galerieseite einbindbar */
export function galleryImagesJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${ORIGIN}/galerie#gallery`,
    name: `Bildergalerie ${site.name}`,
    isPartOf: { '@id': ID.website },
    image: galleryImages.map((g) => ({
      '@type': 'ImageObject',
      contentUrl: img(g.src),
      url: img(g.src),
      caption: g.alt,
      representativeOfPage: g.src.includes('hero.jpg'),
    })),
  };
}
