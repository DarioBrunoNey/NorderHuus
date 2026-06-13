import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Ferienhaus bei Norddeich – 6 Personen, Garten, strandnah',
  description:
    'Ferienhaus nahe Norddeich: modernes Haus für 6 Personen mit 125 m², Garten und Carport. In wenigen Minuten am Strand, am Deich und an der Seehundstation. Jetzt direkt buchen.',
  alternates: { canonical: '/ferienhaus-norddeich' },
};

export default function Page() {
  return (
    <LandingPage
      content={{
        path: '/ferienhaus-norddeich',
        breadcrumb: 'Ferienhaus Norddeich',
        h1: 'Ferienhaus bei Norddeich – Strandurlaub an der Nordsee',
        intro:
          'Strand, Deich und Meer in wenigen Minuten: Das NorderHuus ist ein modernes Ferienhaus für bis zu 6 Personen bei Norddeich – mit dem Komfort eines ruhig gelegenen Hauses und der Nähe zum beliebtesten Badeort der ostfriesischen Festlandsküste.',
        sections: [
          {
            title: 'Norddeich direkt vor der Tür',
            text: 'Vom NorderHuus aus erreichen Sie Norddeich in wenigen Auto-Minuten – oder gemütlich mit dem Fahrrad. Dort warten der Grünstrand mit Strandkörben, die Seehundstation, das Erlebnisbad Ocean Wave und die lange Deichpromenade. Abends locken Fischrestaurants und der Sonnenuntergang an der Mole.',
          },
          {
            title: 'Ruhiger wohnen als direkt am Trubel',
            text: 'Wer in der Hochsaison schon einmal direkt in Norddeich übernachtet hat, kennt den Trubel. Das NorderHuus bietet die entspannte Alternative: tagsüber Strand und Meer, abends Ruhe im eigenen Garten mit Terrasse – und dank Carport nie die Parkplatzsuche.',
          },
          {
            title: 'Perfekt für den Familienurlaub am Meer',
            text: 'Drei Schlafzimmer, zwei Bäder, Waschmaschine und Trockner für die Strandsachen, ein Spielplatz direkt nebenan: Das Haus ist auf Familien eingestellt. Und wenn das Wetter mal nicht mitspielt, sind Schwimmbad, Seehundstation und Teemuseum schnell erreicht.',
          },
        ],
      }}
    />
  );
}
