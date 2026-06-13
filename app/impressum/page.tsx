import type { Metadata } from 'next';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: true },
  alternates: { canonical: '/impressum' },
};

/**
 * TODO vor Livegang: Angaben vervollständigen (Inhaber/Vertretungsberechtigter,
 * ggf. USt-IdNr., Telefon, E-Mail). Empfehlung: Angaben mit einem
 * Impressums-Generator oder rechtlicher Beratung gegenprüfen.
 */
export default function ImpressumPage() {
  return (
    <section className="container-site max-w-3xl py-14 md:py-20">
      <h1 className="h-display text-3xl">Impressum</h1>
      <div className="prose-site mt-8 text-navy/80">
        <p className="font-semibold text-navy">Angaben gemäß § 5 DDG</p>
        <p>
          {site.contact.company}
          <br />
          Inhaber: Dario Bruno
          <br />
          {site.contact.street}
          <br />
          {site.contact.zipCity}
        </p>
        <p className="mt-6 font-semibold text-navy">Kontakt</p>
        <p>
          {site.contact.phone && <>Telefon: {site.contact.phone}<br /></>}
          {site.contact.mobile && <>Mobil: {site.contact.mobile}<br /></>}
          {site.contact.email && <>E-Mail: {site.contact.email}</>}
        </p>
        {/* TODO: Falls vorhanden: USt-IdNr. gemäß § 27a UStG ergänzen */}
        <p className="mt-6 font-semibold text-navy">Verbraucherstreitbeilegung</p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </section>
  );
}
