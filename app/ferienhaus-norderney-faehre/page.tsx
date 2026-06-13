import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Ferienhaus nahe Norderney-Fähre – Inselausflüge ab Norddeich Mole',
  description:
    'Ferienhaus in der Nähe der Norderney-Fähre: Vom NorderHuus in Norden erreichen Sie Norddeich Mole in ca. 10 Minuten. 125 m², 6 Personen, Garten & Carport. Direkt buchen.',
  alternates: { canonical: '/ferienhaus-norderney-faehre' },
};

export default function Page() {
  return (
    <LandingPage
      content={{
        path: '/ferienhaus-norderney-faehre',
        breadcrumb: 'Ferienhaus Norderney-Fähre',
        h1: 'Ferienhaus nahe der Norderney-Fähre – Insel und Festland verbinden',
        intro:
          'Norderney erleben, aber auf dem Festland wohnen: Das NorderHuus liegt nur rund zehn Auto-Minuten vom Fähranleger Norddeich Mole entfernt – ideal für alle, die Inselausflüge lieben, aber die Flexibilität und den Platz eines Ferienhauses mit eigenem Auto schätzen.',
        sections: [
          {
            title: 'Tagesausflug nach Norderney – ganz entspannt',
            text: 'Ab Norddeich Mole bringt Sie die Fähre in rund 50 Minuten nach Norderney. Vom NorderHuus aus sind Sie schnell am Anleger – oft schneller, als so mancher Inselgast vom Hotel am Strand. Verbringen Sie den Tag an der Kurpromenade, am endlosen Sandstrand oder im bade:haus und kehren Sie abends in Ihr ruhiges Ferienhaus zurück.',
          },
          {
            title: 'Auch Juist liegt vor der Tür',
            text: 'Vom selben Anleger starten die Fähren zur autofreien Insel Juist. So können Sie in einem Urlaub gleich zwei ostfriesische Inseln entdecken – ohne Kofferschleppen und Inselzuschläge, denn Ihr Zuhause auf Zeit bleibt das NorderHuus.',
          },
          {
            title: 'Festlandurlaub mit Inselgefühl',
            text: 'Das Beste aus beiden Welten: Auf dem Festland wohnen Sie günstiger und flexibler, haben Ihr Auto immer dabei und genießen trotzdem Strand, Watt und Inselluft, wann immer Sie möchten. Mit 125 m², drei Schlafzimmern, zwei Bädern und Garten bietet das NorderHuus dafür die perfekte Basis für bis zu 6 Personen.',
          },
        ],
      }}
    />
  );
}
