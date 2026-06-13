import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Ferienhaus Norden (Ostfriesland) für 6 Personen mit Garten',
  description:
    'Ferienhaus in Norden mieten: Das NorderHuus bietet 125 m², 3 Schlafzimmer, 2 Bäder, Garten und Carport in ruhiger Lage – nahe Strand, Stadt und Fähren. Direkt buchen.',
  alternates: { canonical: '/ferienhaus-norden' },
};

export default function Page() {
  return (
    <LandingPage
      content={{
        path: '/ferienhaus-norden',
        breadcrumb: 'Ferienhaus Norden',
        h1: 'Ferienhaus in Norden – Urlaub in der ältesten Stadt Ostfrieslands',
        intro:
          'Sie suchen ein Ferienhaus in Norden? Das NorderHuus ist ein modernes Ferienhaus für bis zu 6 Personen mit 125 m² Wohnfläche, Garten und Terrasse – ruhig gelegen und doch nah an allem, was Norden und die Nordseeküste ausmacht.',
        sections: [
          {
            title: 'Warum ein Ferienhaus in Norden?',
            text: 'Norden ist der ideale Ausgangspunkt für den Nordseeurlaub auf dem Festland: Die Stadt bietet Restaurants, Cafés, Geschäfte und das berühmte Teemuseum, während Strand und Deich in Norddeich nur wenige Minuten entfernt sind. Anders als auf den Inseln reisen Sie bequem mit dem eigenen Auto an – im NorderHuus parken Sie direkt am Haus unter dem Carport.',
          },
          {
            title: 'Viel Platz für Familien und Gruppen',
            text: 'Mit drei Schlafzimmern und zwei Bädern eignet sich das Ferienhaus perfekt für Familien mit Kindern, zwei befreundete Paare oder den Mehrgenerationenurlaub mit den Großeltern. Der eingezäunte Garten und der Spielplatz direkt nebenan machen das Haus besonders kinderfreundlich.',
          },
          {
            title: 'Ruhige Lage, kurze Wege',
            text: 'Das NorderHuus liegt in einer ruhigen Wohnlage in Norden. Supermärkte und Bäcker erreichen Sie schnell, die Fähranleger nach Norderney und Juist in rund zehn Auto-Minuten – ideal für spontane Inselausflüge.',
          },
        ],
      }}
    />
  );
}
