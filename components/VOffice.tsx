import Link from 'next/link';

/**
 * vOffice-Buchungsstrecke – Baustein gemäß vOffice-Anleitung (Schritt 1):
 * Nur der Container <div v-switch="layout">. Das Setup-Script und ex_m.js
 * werden global im Layout (app/layout.tsx) eingebunden – exakt wie von
 * vOffice vorgegeben ("vor </body>"). Das Widget sucht beim Laden diesen
 * Container und rendert dort Kalender, Preise und Buchung.
 */
export function VofficeBooking() {
  return (
    <div className="min-h-[520px]">
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
