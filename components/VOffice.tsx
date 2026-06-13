'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { voffice } from '@/lib/voffice';

declare global {
  interface Window {
    V?: {
      setup: { module: string; memberid: number; lang: string };
    };
  }
}

/**
 * vOffice-Buchungsstrecke (Modul "booking_with_calendar"):
 * Belegungskalender, Preisanzeige und Direktbuchung in einem Baustein.
 *
 * Umsetzung des offiziellen Einbettungscodes für Next.js:
 * 1. Globale Config `window.V.setup` setzen (Member-ID, Modul, Sprache)
 * 2. ex_m.js laden – das Script sucht das Element mit v-switch="layout"
 *    und rendert dort das Widget.
 *
 * Bei Client-Navigation (Seitenwechsel ohne Reload) wird das Script neu
 * eingefügt, damit das Widget den frisch gemounteten Baustein findet.
 */
export function VofficeBooking() {
  useEffect(() => {
    window.V = {
      setup: {
        module: voffice.modulePath,
        memberid: voffice.memberId,
        lang: voffice.lang,
      },
    };

    // Vorhandenes Script entfernen und neu laden, damit das Widget
    // auch nach Client-Navigation zuverlässig initialisiert.
    document.querySelector('script[data-voffice]')?.remove();
    const s = document.createElement('script');
    s.src = voffice.widgetScriptSrc;
    s.async = true;
    s.setAttribute('data-voffice', '1');
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-[520px]">
      {/* Baustein gemäß vOffice-Einbettungscode */}
      <div {...{ 'v-switch': 'layout' }} />
      <noscript>
        <p>
          Für die Online-Buchung wird JavaScript benötigt. Alternativ erreichen Sie uns
          telefonisch oder per E-Mail – siehe Kontakt.
        </p>
      </noscript>
    </div>
  );
}

/** Buchen-Buttons, die auf die Buchungsstrecke zeigen */
export function BookingButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link href="/preise-und-verfuegbarkeit/" className="btn-secondary">
        Verfügbarkeit prüfen
      </Link>
      <Link href="/preise-und-verfuegbarkeit/" className="btn-primary">
        Jetzt buchen
      </Link>
    </div>
  );
}
