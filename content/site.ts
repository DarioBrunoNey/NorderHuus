/**
 * ZENTRALE INHALTSVERWALTUNG
 * ==========================
 * Alle Texte, Kontaktdaten und Einstellungen der Website werden hier gepflegt.
 * Bilder liegen in /public/images/ – siehe /public/images/README.txt.
 *
 * Mit "TODO" markierte Felder bitte vor dem Livegang ausfüllen.
 */

export const site = {
  name: 'NorderHuus',
  domain: 'https://www.norderhuus.de',
  tagline:
    'Großzügiges modernes Ferienhaus für bis zu 6 Personen mit Garten in ruhiger Lage in Norden.',

  hero: {
    headline: 'NorderHuus – modernes Ferienhaus für bis zu 6 Personen an der Nordsee',
    subheadline: '125 m² Wohnfläche, 3 Schlafzimmer, 2 Bäder, Garten und Terrasse.',
    image: '/images/hero.jpg',
    imageAlt: 'Ferienhaus NorderHuus in Norden – Außenansicht mit Carport, gepflastertem Weg und Spielplatz nebenan',
  },

  // Eckdaten des Hauses
  facts: {
    persons: 6,
    sqm: 125,
    bedrooms: 3,
    bathrooms: 2,
  },

  // Für strukturierte Daten (Schema.org). Ausfüllen, sobald bekannt – dann
  // werden sie automatisch ins JSON-LD übernommen. 0/leer = wird weggelassen.
  schemaExtras: {
    numberOfBeds: 3, // 3 Doppelbetten (180x200)
    starRating: 0, // offizielle DTV-/Sterne-Klassifizierung, z. B. 4 – TODO (sonst 0)
    priceFrom: 90, // "ab"-Preis pro Nacht in EUR
  },

  // Kontakt
  contact: {
    company: 'Ferienwohnungen Bruno',
    owner: 'Dario Bruno',
    street: 'Tollestraße 6',
    zipCity: '26548 Norderney',
    phone: '04932 8402223',
    mobile: '0151 50506170',
    email: 'info@norderhuus.de',
    whatsapp: '4915150506170', // aktiviert den WhatsApp-Button
    instagram: 'https://www.instagram.com/ferienwohnungenbruno',
  },

  // Adresse des Ferienhauses in Norden
  property: {
    street: 'Dortmunder Straße 10b',
    zipCity: '26506 Norden',
    region: 'Ostfriesland, Niedersachsen',
    // Exakte Koordinaten des Hauses Dortmunder Straße 10b (6 Dezimalstellen)
    lat: 53.594583,
    lng: 7.185507,
  },

  // Highlights mit Icon-Schlüssel (Icons: components/Icons.tsx)
  highlights: [
    { icon: 'persons', label: 'bis zu 6 Personen' },
    { icon: 'sqm', label: '125 m² Wohnfläche' },
    { icon: 'bed', label: '3 Schlafzimmer' },
    { icon: 'bath', label: '2 Badezimmer' },
    { icon: 'garden', label: 'Garten' },
    { icon: 'terrace', label: 'Terrasse' },
    { icon: 'wifi', label: 'WLAN' },
    { icon: 'washer', label: 'Waschmaschine' },
    { icon: 'dryer', label: 'Trockner' },
    { icon: 'tv', label: 'Smart-TV' },
    { icon: 'carport', label: 'Carport' },
    { icon: 'nosmoking', label: 'Nichtraucherhaus' },
    { icon: 'nopets', label: 'Keine Haustiere' },
  ] as const,

  // "Warum NorderHuus?" – Argumente auf der Startseite
  whyUs: [
    { title: '125 m² Wohnfläche', text: 'Viel Platz zum Ankommen, Ausbreiten und Wohlfühlen – auch bei Schietwetter.' },
    { title: '3 Schlafzimmer', text: 'Genug Rückzugsorte für Familien und Mehrgenerationenurlaub mit bis zu 6 Personen.' },
    { title: '2 Bäder', text: 'Kein Anstehen am Morgen – zwei moderne Badezimmer für alle Gäste.' },
    { title: 'Garten mit Terrasse', text: 'Frühstück draußen, Kinder im Garten, abends grillen – Ihr privates Stück Ostfriesland.' },
    { title: 'Familienfreundlich', text: 'Ruhige Lage, Spielplatz direkt nebenan und kurze Wege zu Strand und Stadt.' },
    { title: 'Nähe Norddeich', text: 'In wenigen Minuten am Strand, am Deich und an den Fähranlegern.' },
    { title: 'Fähre nach Norderney & Juist', text: 'Ideale Basis für Tagesausflüge auf die ostfriesischen Inseln.' },
    { title: 'Moderne Ausstattung', text: 'Voll ausgestattete Küche, WLAN, Smart-TV, Waschmaschine und Trockner.' },
  ],

  // Kurzbeschreibung Startseite
  shortDescription: [
    'Das NorderHuus ist ein modernes Ferienhaus in ruhiger Lage in Norden, Ostfriesland – nur wenige Minuten von Norddeich, dem Deich und den Fähranlegern nach Norderney und Juist entfernt.',
    'Auf 125 m² Wohnfläche bietet das Haus Platz für bis zu 6 Personen: drei Schlafzimmer, zwei moderne Bäder, eine voll ausgestattete Küche und ein heller Wohnbereich mit Zugang zu Terrasse und Garten. Carport, WLAN, Smart-TV, Waschmaschine und Trockner sind selbstverständlich.',
    'Ob Familienurlaub am Meer, Auszeit zu zweit oder Mehrgenerationenurlaub: Im NorderHuus kommen Sie an – und die Nordsee liegt direkt vor der Tür.',
  ],

  // Ausführliche Beschreibung für die Seite /ferienhaus
  fullDescription: {
    intro:
      'Das NorderHuus ist ein modernes Ferienhaus für bis zu 6 Personen in Norden (Ostfriesland) – mit 125 m² Wohnfläche, Garten, Terrasse und Carport in ruhiger Wohnlage.',
    rooms: [
      {
        name: 'Wohnen & Essen',
        text: 'Der offene Wohn- und Essbereich ist das Herz des Hauses: viel Tageslicht, gemütliche Sitzlandschaft, Smart-TV und ein großer Esstisch für gemeinsame Mahlzeiten. Direkter Zugang zur Terrasse.',
      },
      {
        name: 'Küche',
        text: 'Die moderne Einbauküche ist voll ausgestattet – Backofen, Geschirrspüler, Kühl-/Gefrierkombination, Kaffeemaschine und alles, was Sie für den Urlaub mit Selbstverpflegung brauchen.',
      },
      {
        name: 'Schlafzimmer',
        text: 'Drei Schlafzimmer bieten Platz für bis zu 6 Personen – ideal für Familien mit Kindern oder zwei Paare. Bequeme Betten und ausreichend Stauraum inklusive.',
      },
      {
        name: 'Badezimmer',
        text: 'Zwei moderne Badezimmer mit Dusche sorgen dafür, dass es morgens keinen Stau gibt.',
      },
      {
        name: 'Garten & Terrasse',
        text: 'Der eingezäunte Garten mit Terrasse und Gartenmöbeln ist perfekt für Frühstück im Freien, spielende Kinder und laue Sommerabende. Ein Spielplatz liegt direkt nebenan.',
      },
      {
        name: 'Praktisches',
        text: 'Carport am Haus, WLAN, Waschmaschine und Trockner. Das NorderHuus ist ein Nichtraucherhaus; Haustiere sind nicht gestattet.',
      },
    ],
  },

  // Grundriss (optional) – PDF in /public/downloads/ ablegen und Pfad eintragen
  floorplan: {
    enabled: false, // auf true setzen, sobald PDF vorhanden
    pdf: '/downloads/norderhuus-grundriss.pdf',
    image: '/images/grundriss.jpg', // optionales Vorschaubild
  },

  // Lage: Entfernungen (grobe Richtwerte ab Dortmunder Straße – gern weiter präzisieren)
  distances: [
    { place: 'Norddeich (Strand & Deich)', value: 'ca. 5 Auto-Minuten' },
    { place: 'Fähre nach Norderney', value: 'Norddeich Mole, ca. 10 Auto-Minuten' },
    { place: 'Fähre nach Juist', value: 'Norddeich Mole, ca. 10 Auto-Minuten' },
    { place: 'Stadtzentrum Norden', value: 'ca. 1,5 km – gut mit dem Rad' },
    { place: 'Supermarkt', value: 'in der Nähe' },
    { place: 'Restaurants & Cafés', value: 'in Norden und Norddeich' },
    { place: 'Spielplatz', value: 'direkt nebenan' },
  ],

  // Check-in / Check-out – TODO: Zeiten prüfen
  checkin: 'ab 16:00 Uhr',
  checkout: 'bis 10:00 Uhr',

  // Newsletter (optional). enabled=true + formAction eintragen (z. B. von Brevo/Mailchimp/CleverReach)
  newsletter: {
    enabled: false,
    formAction: '', // TODO: Formular-Action-URL des Newsletter-Anbieters
  },

  // Google Reviews – Vorbereitung. Place-ID eintragen, sobald Google-Unternehmensprofil existiert.
  googleReviews: {
    enabled: false,
    placeId: '', // TODO
  },
} as const;

export type Site = typeof site;
