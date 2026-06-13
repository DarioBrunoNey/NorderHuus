import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import CookieConsent from '@/components/CookieConsent';
import { WhatsAppButton, JsonLd } from '@/components/Extras';
import { vacationRentalJsonLd } from '@/lib/seo';
import { site } from '@/content/site';
import { voffice } from '@/lib/voffice';

/**
 * Schriften werden über next/font selbst gehostet (kein Google-Fonts-CDN
 * zur Laufzeit → DSGVO-konform und schnell).
 */
const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
});
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'NorderHuus – Modernes Ferienhaus für 6 Personen in Norden, Ostfriesland',
    template: '%s | NorderHuus Norden',
  },
  description:
    'Großzügiges Ferienhaus an der Nordsee: 125 m², 3 Schlafzimmer, 2 Bäder, Garten & Terrasse in ruhiger Lage in Norden – nahe Norddeich und den Fähren nach Norderney & Juist. Jetzt direkt buchen.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'NorderHuus',
    url: site.domain,
    title: 'NorderHuus – Modernes Ferienhaus für 6 Personen an der Nordsee',
    description:
      '125 m² Wohnfläche, 3 Schlafzimmer, 2 Bäder, Garten und Terrasse – ruhig gelegen in Norden, Ostfriesland.',
    images: [{ url: site.hero.image, width: 1600, height: 900, alt: site.hero.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBookingBar />
        <WhatsAppButton />
        <CookieConsent />
        <JsonLd data={vacationRentalJsonLd()} />

        {/* vOffice-Buchungswidget – global eingebunden, exakt nach vOffice-Anleitung.
            Das Setup-Script und ex_m.js stehen damit auf jeder Seite "vor </body>". */}
        <Script id="voffice-setup" strategy="afterInteractive">
          {`var V = { setup: { module: '${voffice.modulePath}', memberid: ${voffice.memberId}, lang: '${voffice.lang}' } };`}
        </Script>
        <Script src={voffice.widgetScriptSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
