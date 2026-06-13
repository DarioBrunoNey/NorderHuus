import type { Metadata } from 'next';
import MapEmbed from '@/components/MapEmbed';
import { SectionHeading, Cta } from '@/components/Sections';
import { JsonLd } from '@/components/Extras';
import { breadcrumbJsonLd } from '@/lib/seo';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Lage & Umgebung – Norden, Norddeich, Norderney & Juist',
  description:
    'Urlaub im Ferienhaus in Norden: Strand und Deich in Norddeich, Fähren nach Norderney und Juist, UNESCO-Weltnaturerbe Wattenmeer und die schönsten Ausflugsziele Ostfrieslands.',
  alternates: { canonical: '/lage-und-umgebung' },
};

const areas = [
  {
    id: 'norddeich',
    title: 'Norddeich – Strand, Deich und Meer',
    text: 'Norddeich ist der maritime Ortsteil von Norden und vom NorderHuus in wenigen Minuten erreichbar. Hier warten der breite Grünstrand mit Strandkörben, die Seehundstation, das Erlebnisbad Ocean Wave und die Drachenwiese auf Sie. Am Deich entlang lässt es sich herrlich radeln und spazieren – mit Blick auf das Wattenmeer und die vorgelagerten Inseln. Abends lohnt der Weg zur Mole: Die Sonnenuntergänge über der Nordsee gehören zu den schönsten an der gesamten Küste.',
  },
  {
    id: 'norden',
    title: 'Norden – die älteste Stadt Ostfrieslands',
    text: 'Norden verbindet ostfriesische Gemütlichkeit mit allem, was man im Urlaub braucht: Rund um den weitläufigen Marktplatz finden Sie Cafés, Restaurants, Geschäfte und das Teemuseum – schließlich gilt Ostfriesland als Heimat der deutschen Teekultur. Supermärkte, Bäcker und Apotheken sind vom Ferienhaus schnell erreicht. Wer Kultur mag, besucht die Ludgerikirche mit ihrer berühmten Arp-Schnitger-Orgel.',
  },
  {
    id: 'norderney',
    title: 'Norderney – Inselausflug ab Norddeich Mole',
    text: 'Vom Fähranleger Norddeich Mole, nur etwa zehn Auto-Minuten vom NorderHuus entfernt, bringt Sie die Fähre in rund 50 Minuten nach Norderney. Die Insel begeistert mit kilometerlangen Sandstränden, der eleganten Kurpromenade, dem bade:haus und einer lebendigen Innenstadt. Ein Tagesausflug lohnt sich zu jeder Jahreszeit – und wer mag, kombiniert ihn mit einer Wattwanderung oder einer Radtour über die Insel.',
  },
  {
    id: 'juist',
    title: 'Juist – das Töwerland',
    text: 'Auch die autofreie Insel Juist erreichen Sie bequem ab Norddeich Mole. Auf dem „Töwerland" (Zauberland) bestimmen Pferdekutschen, Dünen und ein 17 Kilometer langer Sandstrand das Tempo. Juist ist perfekt für einen entschleunigten Tagesausflug: barfuß durch den Sand, Fischbrötchen am Hafen, Muscheln sammeln mit den Kindern.',
  },
  {
    id: 'wattenmeer',
    title: 'UNESCO-Weltnaturerbe Wattenmeer',
    text: 'Direkt vor der Haustür liegt der Nationalpark Niedersächsisches Wattenmeer – seit 2009 UNESCO-Weltnaturerbe. Bei einer geführten Wattwanderung erleben Sie Wattwürmer, Krebse und mit etwas Glück Seehunde aus nächster Nähe. Das Nationalparkhaus in Norddeich erklärt die einzigartige Naturlandschaft – ein lohnender Programmpunkt, gerade mit Kindern und bei Schietwetter.',
  },
  {
    id: 'ausflugsziele',
    title: 'Ausflugsziele in Ostfriesland',
    text: 'Ostfriesland ist ideales Radfahrland: flach, grün und von Radwegen durchzogen. Lohnende Ziele rund um Norden sind Greetsiel mit seinem berühmten Kutterhafen und den Zwillingsmühlen, die Stadt Aurich, das Moormuseum in Moordorf sowie Emden mit Kunsthalle und Hafen. Für Familien lohnen der Tierpark in Aurich-Tannenhausen und an Regentagen das Ocean Wave in Norddeich.',
  },
];

export default function LagePage() {
  return (
    <>
      <section className="container-site py-14 md:py-20">
        <SectionHeading eyebrow="Lage & Umgebung" title="Ihr Ferienhaus mitten in Ostfriesland" />
        <p className="mt-5 max-w-3xl text-lg text-navy/80">
          Das NorderHuus liegt ruhig in Norden – und trotzdem ist alles nah: der Strand in
          Norddeich, die Fähren nach Norderney und Juist, das Wattenmeer und die schönsten
          Ausflugsziele Ostfrieslands.
        </p>
        <div className="mt-10">
          <MapEmbed />
        </div>
        <dl className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {site.distances.map((d) => (
            <div key={d.place} className="flex items-baseline justify-between gap-4 border-b border-sand-200 pb-3 text-sm">
              <dt className="font-medium text-navy">{d.place}</dt>
              <dd className="text-right text-navy/70">{d.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-sand-50 py-14 md:py-20">
        <div className="container-site space-y-12">
          {areas.map((a) => (
            <article key={a.id} id={a.id} className="max-w-3xl">
              <h2 className="h-display text-2xl">{a.title}</h2>
              <p className="mt-3 leading-relaxed text-navy/80">{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Cta title="Ostfriesland entdecken – vom NorderHuus aus" />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Lage & Umgebung', path: '/lage-und-umgebung' }])} />
    </>
  );
}
