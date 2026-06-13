/**
 * FAQ – wird für das Akkordeon auf der Startseite UND
 * für die strukturierten Daten (Schema.org FAQPage) verwendet.
 * TODO: Antworten mit Details prüfen/ergänzen.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Wie weit ist Norddeich entfernt?',
    answer:
      'Norddeich mit Strand, Deich und den Fähranlegern nach Norderney und Juist erreichen Sie vom NorderHuus aus in wenigen Auto-Minuten. Auch mit dem Fahrrad ist Norddeich gut erreichbar.',
  },
  {
    question: 'Gibt es Parkplätze?',
    answer:
      'Ja, zum Haus gehört ein Carport. Ihr Auto steht direkt am Haus – bequem zum Be- und Entladen.',
  },
  {
    question: 'Sind Haustiere erlaubt?',
    answer:
      'Nein, das NorderHuus ist ein haustierfreies Haus. So bleibt es auch für Allergiker gut geeignet.',
  },
  {
    question: 'Gibt es WLAN?',
    answer: 'Ja, im gesamten Haus steht Ihnen kostenloses WLAN zur Verfügung.',
  },
  {
    question: 'Gibt es eine Waschmaschine?',
    answer:
      'Ja, eine Waschmaschine und ein Trockner sind vorhanden – praktisch für längere Aufenthalte und Strandtage.',
  },
  {
    question: 'Wann ist Check-in?',
    answer: 'Der Check-in ist ab 16:00 Uhr möglich. Andere Zeiten gern auf Anfrage.',
  },
  {
    question: 'Wann ist Check-out?',
    answer: 'Am Abreisetag bitten wir Sie, das Haus bis 10:00 Uhr zu verlassen.',
  },
];
