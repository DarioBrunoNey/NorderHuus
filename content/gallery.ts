/**
 * BILDERGALERIE
 * =============
 * Bilder liegen in /public/images/. Zum Austauschen: neue Datei mit gleichem
 * Namen ablegen – fertig. Neue Bilder: Datei ablegen und hier eintragen.
 * Kategorien für den Filter: 'wohnbereich' | 'kueche' | 'schlafzimmer' | 'baeder' | 'garten'
 */

export type GalleryCategory = 'wohnbereich' | 'kueche' | 'schlafzimmer' | 'baeder' | 'garten';

export const categoryLabels: Record<GalleryCategory, string> = {
  wohnbereich: 'Wohnbereich',
  kueche: 'Küche',
  schlafzimmer: 'Schlafzimmer',
  baeder: 'Bäder',
  garten: 'Garten & Außen',
};

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  // Wohnbereich
  { src: '/images/wohnen-essen.jpg', alt: 'Großzügiger offener Wohn- und Essbereich mit Küche und Gartenblick im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-1.jpg', alt: 'Helles Wohnzimmer mit Sofalandschaft und Blick in den Garten – Ferienhaus NorderHuus in Norden', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-2.jpg', alt: 'Gemütliche Sofaecke mit großem Smart-TV im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-3.jpg', alt: 'Offener Wohn- und Essbereich mit Sitzlandschaft und Treppe ins Obergeschoss', category: 'wohnbereich' },
  { src: '/images/essbereich-1.jpg', alt: 'Essbereich mit großem Esstisch für 6 Personen im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/dg-sitzecke.jpg', alt: 'Sitzecke mit Sesseln und Smart-TV im Obergeschoss', category: 'wohnbereich' },
  { src: '/images/arbeitsplatz.jpg', alt: 'Ruhiger Arbeitsplatz mit Schreibtisch – ideal für Workation an der Nordsee', category: 'wohnbereich' },
  { src: '/images/flur-1.jpg', alt: 'Heller Eingangsbereich mit Garderobe im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/flur-2.jpg', alt: 'Moderne Garderobe mit Holz-Lamellenwand und Sitzbank im Eingangsbereich', category: 'wohnbereich' },

  // Küche
  { src: '/images/kueche-1.jpg', alt: 'Voll ausgestattete offene Küche mit Blick in den Wohnbereich – NorderHuus Norden', category: 'kueche' },
  { src: '/images/kueche-2.jpg', alt: 'Küchentresen mit Barhockern in der offenen Küche des Ferienhauses', category: 'kueche' },

  // Schlafzimmer
  { src: '/images/schlafzimmer-1.jpg', alt: 'Schlafzimmer mit Doppelbett und Holz-Lamellen-Kopfteil im Erdgeschoss', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-2.jpg', alt: 'Schlafzimmer mit Doppelbett und Dachfenster im Obergeschoss', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-3.jpg', alt: 'Großes Schlafzimmer im Dachgeschoss mit Sesseln und Schreibtisch', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-4.jpg', alt: 'Schlafzimmer mit Doppelbett, Kleiderschrank und TV', category: 'schlafzimmer' },

  // Bäder
  { src: '/images/bad-1.jpg', alt: 'Modernes Badezimmer mit ebenerdiger Dusche im Erdgeschoss', category: 'baeder' },
  { src: '/images/bad-2.jpg', alt: 'Helles Duschbad mit Dachfenster im Obergeschoss', category: 'baeder' },
  { src: '/images/gaeste-wc.jpg', alt: 'Gäste-WC im Ferienhaus NorderHuus', category: 'baeder' },

  // Garten & Außen
  { src: '/images/hero.jpg', alt: 'Außenansicht des Ferienhauses NorderHuus in Norden mit Carport und Garten', category: 'garten' },
  { src: '/images/garten-1.jpg', alt: 'Überdachte Terrasse mit Markise und Gartenmöbeln im eingezäunten Garten', category: 'garten' },
  { src: '/images/spielplatz.jpg', alt: 'Spielplatz mit Rutsche und Klettergerüst direkt neben dem Ferienhaus NorderHuus', category: 'garten' },
];

// Auswahl für die Startseite
export const homeGallery: GalleryImage[] = [
  galleryImages.find((i) => i.src.includes('wohnzimmer-1'))!,
  galleryImages.find((i) => i.src.includes('kueche-2'))!,
  galleryImages.find((i) => i.src.includes('schlafzimmer-1'))!,
  galleryImages.find((i) => i.src.includes('bad-1'))!,
  galleryImages.find((i) => i.src.includes('garten-1'))!,
  galleryImages.find((i) => i.src.includes('essbereich-1'))!,
];
