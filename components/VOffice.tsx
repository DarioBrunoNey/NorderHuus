'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/**
 * vOffice-Buchungsstrecke – isoliert in einem iframe.
 *
 * Warum iframe? Das vOffice-Widget (ex_m.js) startet eine eigene AngularJS-App
 * und übernimmt <html>/<body>. Das kollidiert mit React/Next.js, die dasselbe
 * DOM kontrollieren. Im iframe bekommt vOffice ein eigenes, sauberes Dokument
 * (public/voffice-buchung.html) und läuft dort konfliktfrei – exakt nach
 * vOffice-Anleitung. Die Höhe wird per postMessage automatisch angepasst.
 */
export function VofficeBooking() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(640);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const h = e?.data?.vofficeHeight;
      if (typeof h === 'number' && h > 200) {
        setHeight(h + 24); // kleiner Puffer
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="min-h-[520px]">
      <iframe
        ref={ref}
        src="/voffice-buchung.html"
        title="Belegungskalender, Preise und Online-Buchung NorderHuus"
        className="w-full border-0"
        style={{ height }}
        loading="lazy"
      />
      <noscript>
        <p>
          Für die Online-Buchung wird JavaScript benötigt. Alternativ erreichen Sie uns
          telefonisch oder per E-Mail – siehe Kontakt.
        </p>
      </noscript>
    </div>
  );
}

/** Buchen-Buttons, die auf die Buchungsseite führen */
export function BookingButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="/preise-und-verfuegbarkeit" className="btn-secondary">
        Verfügbarkeit prüfen
      </Link>
      <Link href="/preise-und-verfuegbarkeit" className="btn-primary">
        Jetzt buchen
      </Link>
    </div>
  );
}
