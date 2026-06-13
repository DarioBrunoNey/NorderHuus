'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Cookie-Consent + Google Analytics 4 (DSGVO-konform):
 * - GA4 wird AUSSCHLIESSLICH nach aktiver Einwilligung geladen.
 * - "Nur notwendige" setzt keinerlei Tracking.
 * - Entscheidung wird in localStorage gespeichert ('granted' | 'denied').
 * - Mess-ID kommt aus der Umgebungsvariable NEXT_PUBLIC_GA_MEASUREMENT_ID.
 *
 * Widerruf: Über den Link "Cookie-Einstellungen" in der Datenschutzerklärung
 * (Funktion resetConsent unten) kann der Banner erneut angezeigt werden.
 */

const STORAGE_KEY = 'nh-consent';
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGa() {
  if (!GA_ID || document.getElementById('ga4-script')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });

  const s = document.createElement('script');
  s.id = 'ga4-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function resetConsent() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'granted') loadGa();
    else if (stored !== 'denied') setVisible(true);
  }, []);

  const decide = (granted: boolean) => {
    localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
    setVisible(false);
    if (granted) loadGa();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-xl rounded-lg border border-sand-300 bg-white p-5 shadow-xl lg:bottom-6"
    >
      <p className="text-sm leading-relaxed text-navy/80">
        Wir verwenden neben technisch notwendigen Cookies optional Google Analytics, um zu
        verstehen, wie unsere Website genutzt wird. Details:{' '}
        <Link href="/datenschutz" className="underline">Datenschutzerklärung</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => decide(true)} className="btn-primary !py-2.5">
          Alle akzeptieren
        </button>
        <button type="button" onClick={() => decide(false)} className="btn-secondary !py-2.5">
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
