import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import { SectionHeading, Cta } from '@/components/Sections';
import { JsonLd } from '@/components/Extras';
import { breadcrumbJsonLd } from '@/lib/seo';
import { galleryImages } from '@/content/gallery';

export const metadata: Metadata = {
  title: 'Bildergalerie – Einblicke ins Ferienhaus',
  description:
    'Alle Bilder des Ferienhauses NorderHuus in Norden: Wohnbereich, Küche, Schlafzimmer, Bäder und Garten mit Terrasse.',
  alternates: { canonical: '/galerie' },
};

export default function GaleriePage() {
  return (
    <>
      <section className="container-site py-14 md:py-20">
        <SectionHeading eyebrow="Galerie" title="Schauen Sie sich um" />
        <p className="mt-4 max-w-2xl text-navy/80">
          Vom hellen Wohnbereich bis zum Garten mit Terrasse – hier finden Sie alle
          Bilder des NorderHuus, nach Bereichen gefiltert.
        </p>
        <div className="mt-10">
          <Gallery images={[...galleryImages]} withFilter />
        </div>
      </section>
      <Cta />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Bildergalerie', path: '/galerie' }])} />
    </>
  );
}
