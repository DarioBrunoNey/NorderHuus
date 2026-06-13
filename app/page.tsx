import Link from 'next/link';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import MapEmbed from '@/components/MapEmbed';
import { Highlights, Cta, SectionHeading } from '@/components/Sections';
import { NewsletterSignup, JsonLd } from '@/components/Extras';
import { faqJsonLd } from '@/lib/seo';
import { site } from '@/content/site';
import { homeGallery } from '@/content/gallery';
import { Icon } from '@/components/Icons';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Kurzbeschreibung */}
      <section className="container-site py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeading eyebrow="Das Haus" title="Ankommen, durchatmen, Meer genießen" />
          <div className="prose-site text-navy/80">
            {site.shortDescription.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="mt-6">
              <Link href="/ferienhaus" className="font-semibold text-navy underline decoration-sand-400 decoration-2 underline-offset-4">
                Das ganze Haus entdecken →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Highlights />

      <Cta />

      {/* Warum NorderHuus? */}
      <section className="container-site py-16 md:py-24" aria-labelledby="warum">
        <SectionHeading eyebrow="Gute Gründe" title="Warum NorderHuus?" center />
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {site.whyUs.map((item) => (
            <li key={item.title}>
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Galerie-Vorschau */}
      <section className="bg-sand-50 py-16 md:py-24">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Einblicke" title="Bilder aus dem NorderHuus" />
            <Link href="/galerie" className="btn-secondary">Alle Bilder ansehen</Link>
          </div>
          <div className="mt-10">
            <Gallery images={[...homeGallery]} />
          </div>
        </div>
      </section>

      {/* Lage */}
      <section className="container-site py-16 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Lage" title="Ruhig wohnen, mittendrin sein" />
            <p className="mt-5 text-navy/80">
              Das NorderHuus liegt in einer ruhigen Wohnlage in Norden – mit kurzen Wegen
              zum Strand in Norddeich, zu den Fähren nach Norderney und Juist und in die
              Stadt mit Restaurants, Cafés und Supermärkten.
            </p>
            <dl className="mt-7 space-y-3">
              {site.distances.map((d) => (
                <div key={d.place} className="flex items-baseline justify-between gap-4 border-b border-sand-200 pb-3 text-sm">
                  <dt className="font-medium text-navy">{d.place}</dt>
                  <dd className="text-right text-navy/70">{d.value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/lage-und-umgebung" className="mt-6 inline-block font-semibold text-navy underline decoration-sand-400 decoration-2 underline-offset-4">
              Mehr zur Umgebung →
            </Link>
          </div>
          <MapEmbed />
        </div>
      </section>

      <Cta title="Die Nordsee wartet nicht" text="Sichern Sie sich Ihren Wunschtermin im NorderHuus – direkt und unkompliziert." />

      {/* Verfügbarkeit & Buchung */}
      <section className="container-site py-16 md:py-24" id="verfuegbarkeit">
        <SectionHeading eyebrow="Verfügbarkeit" title="Freie Termine & direkt buchen" />
        <p className="mt-4 max-w-2xl text-navy/80">
          Auf der Buchungsseite sehen Sie die aktuelle Belegung des NorderHuus und können
          Ihren Aufenthalt direkt online buchen – ohne Umwege über Portale.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/preise-und-verfuegbarkeit" className="btn-primary">
            Verfügbarkeit prüfen & buchen
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand-50 py-16 md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading eyebrow="Gut zu wissen" title="Häufige Fragen" />
          <Faq />
        </div>
        <JsonLd data={faqJsonLd()} />
      </section>

      {/* Bewertungen – vorbereitet für Google Reviews */}
      {site.googleReviews.enabled && (
        <section className="container-site py-16">
          <SectionHeading eyebrow="Gästestimmen" title="Das sagen unsere Gäste" center />
          {/* TODO: Google-Reviews-Einbindung, sobald Unternehmensprofil + Place-ID vorhanden */}
        </section>
      )}

      <NewsletterSignup />

      {/* Kontakt */}
      <section className="container-site py-16 md:py-24" id="kontakt">
        <div className="grid gap-10 md:grid-cols-2">
          <SectionHeading eyebrow="Kontakt" title="Fragen? Wir sind für Sie da." />
          <div className="text-navy/80">
            <p className="font-semibold text-navy">{site.contact.company}</p>
            <p className="mt-1">
              {site.contact.street}
              <br />
              {site.contact.zipCity}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {site.contact.phone && (
                <li className="flex items-center gap-2.5">
                  <Icon name="phone" className="h-5 w-5 text-sand-500" />
                  <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="hover:underline">{site.contact.phone}</a>
                </li>
              )}
              {site.contact.mobile && (
                <li className="flex items-center gap-2.5">
                  <Icon name="phone" className="h-5 w-5 text-sand-500" />
                  <a href={`tel:${site.contact.mobile.replace(/\s/g, '')}`} className="hover:underline">{site.contact.mobile} (mobil)</a>
                </li>
              )}
              {site.contact.email && (
                <li className="flex items-center gap-2.5">
                  <Icon name="mail" className="h-5 w-5 text-sand-500" />
                  <a href={`mailto:${site.contact.email}`} className="hover:underline">{site.contact.email}</a>
                </li>
              )}
            </ul>
            <Link href="/kontakt" className="btn-primary mt-7">Zur Kontaktseite</Link>
          </div>
        </div>
      </section>
    </>
  );
}
