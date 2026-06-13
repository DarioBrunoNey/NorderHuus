import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading, Highlights, Cta } from '@/components/Sections';
import { BookingButtons } from '@/components/VOffice';
import { JsonLd } from '@/components/Extras';
import { breadcrumbJsonLd } from '@/lib/seo';
import { site } from '@/content/site';

/**
 * Gemeinsames Layout für SEO-Landingpages.
 * Jede Landingpage liefert eigene, einzigartige Texte (wichtig für SEO –
 * kein Duplicate Content) und nutzt dieses Gerüst.
 */
export interface LandingContent {
  path: string;
  breadcrumb: string;
  h1: string;
  intro: string;
  sections: { title: string; text: string }[];
}

export default function LandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px] w-full">
          <Image
            src={site.hero.image}
            alt={site.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/55" />
          <div className="container-site absolute inset-x-0 bottom-10">
            <h1 className="h-display max-w-3xl text-3xl text-white md:text-4xl">{content.h1}</h1>
          </div>
        </div>
      </section>

      <section className="container-site py-12 md:py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-navy/85">{content.intro}</p>
        <BookingButtons className="mt-7" />
      </section>

      <section className="container-site space-y-10 pb-12">
        {content.sections.map((s) => (
          <article key={s.title} className="max-w-3xl">
            <h2 className="h-display text-2xl">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-navy/80">{s.text}</p>
          </article>
        ))}
        <p className="max-w-3xl text-navy/80">
          Mehr über das Haus erfahren Sie auf der Seite{' '}
          <Link href="/ferienhaus" className="font-semibold underline decoration-sand-400 decoration-2 underline-offset-4">Ferienhaus</Link>, Eindrücke gibt es in der{' '}
          <Link href="/galerie" className="font-semibold underline decoration-sand-400 decoration-2 underline-offset-4">Bildergalerie</Link>.
        </p>
      </section>

      <Highlights />
      <Cta />
      <JsonLd data={breadcrumbJsonLd([{ name: content.breadcrumb, path: content.path }])} />
    </>
  );
}
