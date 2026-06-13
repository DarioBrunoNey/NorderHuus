import Link from 'next/link';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-navy-deep pb-28 pt-14 text-white/80 lg:pb-14">
      <div className="container-site grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">NorderHuus</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-400">Kontakt</p>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {site.contact.company}
            <br />
            {site.contact.street}
            <br />
            {site.contact.zipCity}
            {site.contact.phone && (
              <>
                <br />
                Tel.: <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="hover:text-white">{site.contact.phone}</a>
              </>
            )}
            {site.contact.mobile && (
              <>
                <br />
                Mobil: <a href={`tel:${site.contact.mobile.replace(/\s/g, '')}`} className="hover:text-white">{site.contact.mobile}</a>
              </>
            )}
            {site.contact.email && (
              <>
                <br />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a>
              </>
            )}
          </address>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-400">Ferienhaus in Ostfriesland</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/ferienhaus-norden" className="hover:text-white">Ferienhaus Norden</Link></li>
            <li><Link href="/ferienhaus-norddeich" className="hover:text-white">Ferienhaus Norddeich</Link></li>
            <li><Link href="/ferienhaus-norderney-faehre" className="hover:text-white">Ferienhaus nahe Norderney-Fähre</Link></li>
            <li><Link href="/lage-und-umgebung" className="hover:text-white">Lage & Umgebung</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.contact.company}</p>
        <nav className="flex gap-5" aria-label="Rechtliches">
          <Link href="/impressum" className="hover:text-white">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
