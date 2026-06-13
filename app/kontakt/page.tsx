import type { Metadata } from 'next';
import { site } from '@/content/site';
import { SectionHeading } from '@/components/Sections';
import { Icon } from '@/components/Icons';
import MapEmbed from '@/components/MapEmbed';
import { JsonLd } from '@/components/Extras';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kontakt – Ferienwohnungen Bruno',
  description:
    'Fragen zum NorderHuus oder zur Buchung? Kontaktieren Sie Ferienwohnungen Bruno – telefonisch, per E-Mail oder WhatsApp.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  const c = site.contact;
  return (
    <>
      <section className="container-site py-14 md:py-20">
        <SectionHeading eyebrow="Kontakt" title="Wir freuen uns auf Sie" />
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-navy">{c.company}</p>
            <p className="mt-1 text-navy/80">
              {c.street}
              <br />
              {c.zipCity}
            </p>
            <ul className="mt-6 space-y-3">
              {c.phone && (
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="h-5 w-5 text-sand-500" />
                  <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="hover:underline">Telefon: {c.phone}</a>
                </li>
              )}
              {c.mobile && (
                <li className="flex items-center gap-3">
                  <Icon name="phone" className="h-5 w-5 text-sand-500" />
                  <a href={`tel:${c.mobile.replace(/\s/g, '')}`} className="hover:underline">Mobil: {c.mobile}</a>
                </li>
              )}
              {c.email && (
                <li className="flex items-center gap-3">
                  <Icon name="mail" className="h-5 w-5 text-sand-500" />
                  <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                </li>
              )}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              {c.whatsapp && (
                <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener" className="btn-primary">
                  WhatsApp schreiben
                </a>
              )}
              <a href={c.instagram} target="_blank" rel="noopener" className="btn-secondary">
                Instagram @ferienwohnungenbruno
              </a>
            </div>
            <div className="mt-10 rounded-lg bg-sand-50 p-6 text-sm text-navy/80">
              <p className="font-semibold text-navy">An- & Abreise</p>
              <p className="mt-2">Check-in: {site.checkin}</p>
              <p>Check-out: {site.checkout}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-1 font-semibold text-navy">Lage des Ferienhauses</h2>
            <p className="mb-4 text-sm text-navy/70">
              NorderHuus · {site.property.street}, {site.property.zipCity}
            </p>
            <MapEmbed />
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Kontakt', path: '/kontakt' }])} />
    </>
  );
}
