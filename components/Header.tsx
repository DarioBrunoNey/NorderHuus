'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Start' },
  { href: '/ferienhaus', label: 'Ferienhaus' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/lage-und-umgebung', label: 'Lage & Umgebung' },
  { href: '/preise-und-verfuegbarkeit', label: 'Preise & Verfügbarkeit' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Menü bei Seitenwechsel schließen
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-white/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-navy">
          Norder<span className="text-sand-500">Huus</span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-navy ${
                pathname === item.href ? 'text-navy underline decoration-sand-400 decoration-2 underline-offset-8' : 'text-navy/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/preise-und-verfuegbarkeit#buchen" className="btn-primary !py-2.5">
            Jetzt buchen
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobiles Menü */}
      {open && (
        <nav id="mobile-menu" className="border-t border-sand-200 bg-white lg:hidden" aria-label="Mobile Navigation">
          <ul className="container-site flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 text-base font-medium ${pathname === item.href ? 'text-navy' : 'text-navy/70'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pb-2 pt-3">
              <Link href="/preise-und-verfuegbarkeit#buchen" className="btn-primary w-full">
                Jetzt buchen
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
