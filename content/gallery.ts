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
  // Wohnbereich & Essbereich
  { src: '/images/wohnen-essen.jpg', alt: 'Großzügiger offener Wohn- und Essbereich mit Küche und Gartenblick im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-1.jpg', alt: 'Heller Wohn- und Essbereich mit Sofalandschaft und Esstisch im Ferienhaus NorderHuus in Norden', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-2.jpg', alt: 'Gemütliche Sofaecke mit Smart-TV und Blick in den Garten', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-3.jpg', alt: 'Helles Wohnzimmer mit Couch und Couchtisch im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/wohnzimmer-4.jpg', alt: 'Wohnzimmer mit Smart-TV, Sofa und Treppe ins Obergeschoss', category: 'wohnbereich' },
  { src: '/images/wohnen-essen-2.jpg', alt: 'Offener Wohnbereich mit Essplatz und Küche im NorderHuus', category: 'wohnbereich' },
  { src: '/images/essbereich-1.jpg', alt: 'Essbereich mit großem Esstisch für 6 Personen und Treppe ins Obergeschoss', category: 'wohnbereich' },
  { src: '/images/essbereich-2.jpg', alt: 'Großer Esstisch mit Polsterstühlen im offenen Wohnbereich', category: 'wohnbereich' },
  { src: '/images/arbeitsplatz.jpg', alt: 'Ruhiger Arbeitsplatz mit Schreibtisch – ideal für Workation an der Nordsee', category: 'wohnbereich' },
  { src: '/images/flur-1.jpg', alt: 'Heller Eingangsbereich mit Garderobenspiegel im Ferienhaus NorderHuus', category: 'wohnbereich' },
  { src: '/images/flur-2.jpg', alt: 'Moderne Garderobe mit Holz-Lamellenwand und Sitzbank im Eingangsbereich', category: 'wohnbereich' },
  { src: '/images/flur-dg-1.jpg', alt: 'Heller Flur im Dachgeschoss mit Treppe und Blick ins Schlafzimmer', category: 'wohnbereich' },
  { src: '/images/flur-dg-2.jpg', alt: 'Galerieflur im Obergeschoss mit Treppe und Blick in die Sitzecke', category: 'wohnbereich' },

  // Küche & Hauswirtschaft
  { src: '/images/kueche-1.jpg', alt: 'Voll ausgestattete offene Küche mit Tresen im Ferienhaus NorderHuus', category: 'kueche' },
  { src: '/images/kueche-2.jpg', alt: 'Moderne Küche mit Backofen, Kühlschrank und Frühstückstresen mit Barhockern', category: 'kueche' },
  { src: '/images/kueche-3.jpg', alt: 'Küchenzeile mit Backofen und Esstisch im offenen Wohnbereich', category: 'kueche' },
  { src: '/images/hauswirtschaft.jpg', alt: 'Hauswirtschaftsraum mit Waschmaschine, Trockner und Kühl-Gefrierkombination', category: 'kueche' },

  // Schlafzimmer
  { src: '/images/schlafzimmer-1.jpg', alt: 'Schlafzimmer mit Doppelbett und frischen Handtüchern im Erdgeschoss', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-2.jpg', alt: 'Schlafzimmer mit Doppelbett, Kleiderschrank und Smart-TV', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-3.jpg', alt: 'Helles Schlafzimmer mit Doppelbett und Holz-Lamellen-Kopfteil', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-4.jpg', alt: 'Großzügiges Schlafzimmer im Dachgeschoss mit Sesseln und Dachfenstern', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-5.jpg', alt: 'Schlafzimmer im Dachgeschoss mit Sitzecke und Schreibtisch', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-6.jpg', alt: 'Helles Dachgeschoss-Schlafzimmer mit Arbeitsplatz und Smart-TV', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-7.jpg', alt: 'Schlafzimmer mit Schreibtisch und gemütlichem Sessel unter der Dachschräge', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-8.jpg', alt: 'Schlafzimmer im Dachgeschoss mit Doppelbett, Schreibtisch und Dachfenster', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-9.jpg', alt: 'Doppelbett mit frischen Handtüchern unter der Dachschräge', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-10.jpg', alt: 'Schlafzimmer im Dachgeschoss mit Doppelbett unter dem Dachfenster', category: 'schlafzimmer' },
  { src: '/images/schlafzimmer-11.jpg', alt: 'Doppelbett mit Schreibtisch und Dachschräge im Obergeschoss', category: 'schlafzimmer' },

  // Bäder
  { src: '/images/bad-1.jpg', alt: 'Modernes Badezimmer mit Waschbecken und Fenster im Erdgeschoss', category: 'baeder' },
  { src: '/images/bad-2.jpg', alt: 'Helles Duschbad mit Dusche und Dachfenster im Obergeschoss', category: 'baeder' },
  { src: '/images/bad-3.jpg', alt: 'Badezimmer mit ebenerdiger Dusche und Tageslicht im Dachgeschoss', category: 'baeder' },
  { src: '/images/gaeste-wc.jpg', alt: 'Gäste-WC mit Waschbecken im Ferienhaus NorderHuus', category: 'baeder' },

  // Garten & Außen
  { src: '/images/hero.jpg', alt: 'Außenansicht des Ferienhauses NorderHuus in Norden mit Carport und Garten', category: 'garten' },
  { src: '/images/garten-1.jpg', alt: 'Überdachte Terrasse mit Markise und Gartenmöbeln im eingezäunten Garten', category: 'garten' },
  { src: '/images/spielplatz.jpg', alt: 'Spielplatz mit Rutsche und Klettergerüst direkt neben dem Ferienhaus NorderHuus', category: 'garten' },
];

// Auswahl für die Startseite – die stärksten Motive quer durch alle Bereiche
export const homeGallery: GalleryImage[] = [
  galleryImages.find((i) => i.src.includes('wohnen-essen.jpg'))!,
  galleryImages.find((i) => i.src.includes('kueche-2'))!,
  galleryImages.find((i) => i.src.includes('schlafzimmer-1'))!,
  galleryImages.find((i) => i.src.includes('bad-2'))!,
  galleryImages.find((i) => i.src.includes('garten-1'))!,
  galleryImages.find((i) => i.src.includes('schlafzimmer-4'))!,
];
