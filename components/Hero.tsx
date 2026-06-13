import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

/**
 * Hero mit großem Bild + "Fakten-Leiste":
 * Die sandfarbene Leiste mit den Eckdaten überlappt die Unterkante des Bildes –
 * das wiederkehrende Erkennungszeichen der Seite.
 */
export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[68vh] min-h-[420px] w-full md:h-[78vh]">
        <Image
          src={site.hero.image}
          alt={site.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent" />

        <div className="container-site absolute inset-x-0 bottom-24 md:bottom-32">
          <h1 className="h-display max-w-3xl text-3xl text-white sm:text-4xl md:text-5xl">
            {site.hero.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">{site.hero.subheadline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/preise-und-verfuegbarkeit" className="btn-primary">
              Jetzt buchen
            </Link>
            <Link href="/preise-und-verfuegbarkeit" className="btn-secondary">
              Verfügbarkeit prüfen
            </Link>
          </div>
        </div>
      </div>

      {/* Fakten-Leiste */}
      <div className="container-site relative z-10 -mt-12">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-sand-300 bg-sand-300 shadow-sm md:grid-cols-4">
          {[
            { value: `${site.facts.persons}`, label: 'Personen' },
            { value: `${site.facts.sqm} m²`, label: 'Wohnfläche' },
            { value: `${site.facts.bedrooms}`, label: 'Schlafzimmer' },
            { value: `${site.facts.bathrooms}`, label: 'Badezimmer' },
          ].map((f) => (
            <div key={f.label} className="flex flex-col-reverse bg-sand-100 px-4 py-5 text-center">
              <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy/60">{f.label}</dt>
              <dd className="font-display text-3xl font-medium text-navy">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
