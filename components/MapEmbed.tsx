'use client';

import { useState } from 'react';
import { site } from '@/content/site';

/**
 * DSGVO-konforme Karte: OpenStreetMap wird erst nach Klick geladen
 * (Zwei-Klick-Lösung). Vorher wird kein externer Request ausgelöst.
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const { lat, lng } = site.property;

  // Sichtbarer Kartenausschnitt um die Koordinaten
  const d = 0.02;
  const bbox = `${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-sand-200 bg-sand-100 md:aspect-[16/9]">
      {loaded ? (
        <iframe
          src={src}
          title="Karte: Lage des Ferienhauses NorderHuus in Norden"
          className="h-full w-full border-0"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
          <p className="max-w-md text-sm text-navy/75">
            Beim Laden der Karte werden Daten an OpenStreetMap (OpenStreetMap Foundation)
            übertragen. Details in unserer{' '}
            <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
          </p>
          <button type="button" onClick={() => setLoaded(true)} className="btn-primary">
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
