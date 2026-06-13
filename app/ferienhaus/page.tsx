import type { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/content/site';
import { SectionHeading, Highlights, Cta } from '@/components/Sections';
import { JsonLd } from '@/components/Extras';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Das Ferienhaus – 125 m², 3 Schlafzimmer, 2 Bäder, Garten',
  description:
    'Das NorderHuus im Detail: modernes Ferienhaus für bis zu 6 Personen in Norden mit voll ausgestatteter Küche, 3 Schlafzimmern, 2 Bädern, Garten, Terrasse und Carport.',
  alternates: { canonical: '/ferienhaus' },
};

export default function FerienhausPage() {
  return (
    <>
      <section className="container-site py-14 md:py-20">
        <SectionHeading eyebrow="Das Ferienhaus" title="Das NorderHuus im Detail" />
        <p className="mt-5 max-w-3xl text-lg text-navy/80">{site.fullDescription.intro}</p>
      </section>

      <section className="container-site pb-6">
        <div className="grid gap-8 md:grid-cols-2">
          {site.fullDescription.rooms.map((room, i) => (
            <article key={room.name} className={`rounded-lg p-7 ${i % 2 === 0 ? 'bg-sand-50' : 'border border-sand-200'}`}>
              <h2 className="h-display text-xl">{room.name}</h2>
              <p className="mt-3 leading-relaxed text-navy/75">{room.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Highlights />

      {/* Grundriss (optional) */}
      {site.floorplan.enabled && (
        <section className="container-site py-16">
          <SectionHeading eyebrow="Grundriss" title="So ist das Haus aufgeteilt" />
          <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-sand-200">
              <Image src={site.floorplan.image} alt="Grundriss des Ferienhauses NorderHuus" fill className="object-contain bg-white" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-navy/80">
                Den vollständigen Grundriss mit allen Maßen können Sie als PDF herunterladen.
              </p>
              <a href={site.floorplan.pdf} className="btn-primary mt-5" download>
                Grundriss als PDF laden
              </a>
            </div>
          </div>
        </section>
      )}

      <Cta />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Ferienhaus', path: '/ferienhaus' }])} />
    </>
  );
}
