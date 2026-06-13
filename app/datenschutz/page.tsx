import type { Metadata } from 'next';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false, follow: true },
  alternates: { canonical: '/datenschutz' },
};

/**
 * TODO vor Livegang: Diese Datenschutzerklärung ist ein strukturierter Entwurf,
 * der die tatsächlich eingesetzten Dienste dieser Website abdeckt (Vercel-Hosting,
 * Google Analytics nach Einwilligung, OpenStreetMap per Zwei-Klick, vOffice-
 * Buchungswidget, WhatsApp-Link). Bitte vor Veröffentlichung die Angaben
 * (Verantwortlicher, ggf. Auftragsverarbeitungsverträge) prüfen und im Zweifel
 * rechtlich gegenprüfen lassen.
 */

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-xl font-medium text-navy">{children}</h2>;
}

export default function DatenschutzPage() {
  return (
    <section className="container-site max-w-3xl py-14 md:py-20">
      <h1 className="h-display text-3xl">Datenschutzerklärung</h1>
      <div className="prose-site mt-6 text-sm leading-relaxed text-navy/80">
        <H2>1. Verantwortlicher</H2>
        <p>
          {site.contact.company}, {site.contact.street}, {site.contact.zipCity}
          {site.contact.email ? `, E-Mail: ${site.contact.email}` : ''}.
        </p>

        <H2>2. Hosting</H2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website verarbeitet
          der Hoster technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des
          Zugriffs, aufgerufene Seite, Browsertyp) in sogenannten Server-Logfiles.
          Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und
          performanten Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel
          besteht ein Vertrag zur Auftragsverarbeitung; die Übermittlung in Drittländer
          erfolgt auf Grundlage der EU-Standardvertragsklauseln.
        </p>

        <H2>3. Cookies und Einwilligung</H2>
        <p>
          Technisch notwendige Speicherung (z. B. Ihre Cookie-Entscheidung) erfolgt auf
          Grundlage von § 25 Abs. 2 TDDDG. Alle nicht notwendigen Dienste – derzeit Google
          Analytics – werden ausschließlich nach Ihrer aktiven Einwilligung über den
          Cookie-Banner geladen (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können
          Ihre Einwilligung jederzeit widerrufen, indem Sie die im Browser gespeicherte
          Auswahl löschen oder uns kontaktieren.
        </p>

        <H2>4. Google Analytics 4 (nur nach Einwilligung)</H2>
        <p>
          Sofern Sie einwilligen, nutzen wir Google Analytics 4 der Google Ireland Ltd.,
          Gordon House, Barrow Street, Dublin 4, Irland, zur statistischen Auswertung der
          Websitenutzung. IP-Adressen werden von Google Analytics 4 nicht protokolliert
          bzw. nur gekürzt verarbeitet. Die Daten können in die USA übermittelt werden;
          Google ist nach dem EU-US Data Privacy Framework zertifiziert. Rechtsgrundlage
          ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <H2>5. Buchungssystem (vOffice)</H2>
        <p>
          Für Belegungskalender, Preisanzeige und Online-Buchung binden wir das
          Buchungssystem vOffice (vOffice SE) ein. Beim Laden des Buchungsbereichs und bei
          einer Buchung werden die von Ihnen eingegebenen Daten (z. B. Name, Anschrift,
          E-Mail, Reisedaten) an vOffice übermittelt und dort zur Vertragsabwicklung
          verarbeitet. Rechtsgrundlage ist die Vertragserfüllung bzw. -anbahnung
          (Art. 6 Abs. 1 lit. b DSGVO).
        </p>

        <H2>6. Kartendarstellung (OpenStreetMap)</H2>
        <p>
          Die Lagekarte wird erst nach Ihrem Klick auf „Karte laden" von Servern der
          OpenStreetMap Foundation (St John's Innovation Centre, Cambridge, UK) geladen.
          Dabei wird Ihre IP-Adresse übertragen. Rechtsgrundlage ist Ihre durch den Klick
          erteilte Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <H2>7. Kontaktaufnahme (E-Mail, Telefon, WhatsApp)</H2>
        <p>
          Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der
          Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Bei Kontakt über WhatsApp gelten
          ergänzend die Datenschutzhinweise der WhatsApp Ireland Ltd.; dabei können Daten
          (insbesondere Ihre Telefonnummer) an WhatsApp übermittelt werden.
        </p>

        <H2>8. Ihre Rechte</H2>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
          Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
          Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen Verarbeitungen auf
          Grundlage berechtigter Interessen (Art. 21 DSGVO). Außerdem können Sie sich bei
          einer Datenschutz-Aufsichtsbehörde beschweren, z. B. bei der Landesbeauftragten
          für den Datenschutz Niedersachsen.
        </p>

        <H2>9. Speicherdauer</H2>
        <p>
          Wir verarbeiten personenbezogene Daten nur so lange, wie es für die genannten
          Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten (z. B. aus
          Steuer- und Handelsrecht) bestehen.
        </p>
      </div>
    </section>
  );
}
