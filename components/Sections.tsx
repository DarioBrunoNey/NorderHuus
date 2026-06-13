import Link from 'next/link';
import { site } from '@/content/site';
import { Icon, type IconName } from '@/components/Icons';

export function SectionHeading({
  eyebrow,
  title,
  center,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-display text-2xl sm:text-3xl md:text-4xl">{title}</h2>
    </div>
  );
}

export function Highlights() {
  return (
    <section className="container-site py-16 md:py-24" aria-labelledby="highlights">
      <SectionHeading eyebrow="Ausstattung" title="Alles, was der Nordsee-Urlaub braucht" />
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {site.highlights.map((h) => (
          <li key={h.label} className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand-100 text-navy">
              <Icon name={h.icon as IconName} />
            </span>
            <span className="text-sm font-medium text-navy">{h.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Wiederverwendbarer Call-To-Action-Block (alle 2–3 Abschnitte einsetzen) */
export function Cta({
  title = 'Lust auf Nordsee?',
  text = 'Prüfen Sie die Verfügbarkeit und buchen Sie das NorderHuus direkt – ohne Portalgebühren.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-sand-100">
      <div className="container-site flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div>
          <h2 className="h-display text-2xl md:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-navy/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/preise-und-verfuegbarkeit/" className="btn-secondary whitespace-nowrap">
            Verfügbarkeit prüfen
          </Link>
          <Link href="/preise-und-verfuegbarkeit/" className="btn-primary whitespace-nowrap">
            Jetzt buchen
          </Link>
        </div>
      </div>
    </section>
  );
}
