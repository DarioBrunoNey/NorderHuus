import type { Metadata } from 'next';
import { SectionHeading } from '@/components/Sections';
import { VofficeBooking } from '@/components/VOffice';
import { JsonLd } from '@/components/Extras';
import { breadcrumbJsonLd } from '@/lib/seo';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Preise & Verfügbarkeit – jetzt direkt buchen',
  description:
    'Aktuelle Preise und freie Termine für das Ferienhaus NorderHuus in Norden. Belegungskalender ansehen und direkt online buchen – ohne Portalgebühren.',
  alternates: { canonical: '/preise-und-verfuegbarkeit' },
};

export default function PreisePage() {
  return (
    <>
      <section className="container-site py-14 md:py-20">
        <SectionHeading eyebrow="Preise & Verfügbarkeit" title="Ihr Termin im NorderHuus" />
        <p className="mt-4 max-w-2xl text-navy/80">
          Die aktuellen Preise und freien Termine werden live aus unserem Buchungssystem
          geladen. Wählen Sie einfach Ihren Wunschzeitraum – Sie sehen sofort den Preis
          und können direkt buchen.
        </p>

        <div className="mt-12">
          <h2 className="mb-4 font-display text-xl font-medium text-navy">
            Belegungskalender, Preise & Online-Buchung
          </h2>
          <VofficeBooking />
        </div>

        <div className="mt-12 grid gap-6 rounded-lg bg-sand-50 p-7 text-sm text-navy/80 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-navy">Check-in</p>
            <p className="mt-1">{site.checkin}</p>
          </div>
          <div>
            <p className="font-semibold text-navy">Check-out</p>
            <p className="mt-1">{site.checkout}</p>
          </div>
          <div>
            <p className="font-semibold text-navy">Direkt buchen lohnt sich</p>
            <p className="mt-1">Bester Preis ohne Portalgebühren – und persönlicher Kontakt zu uns.</p>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Preise & Verfügbarkeit', path: '/preise-und-verfuegbarkeit' }])} />
    </>
  );
}
