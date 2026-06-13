import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[50vh] flex-col items-start justify-center py-20">
      <span className="eyebrow">404</span>
      <h1 className="h-display text-3xl">Diese Seite ist auf Wanderschaft – wie das Watt bei Ebbe.</h1>
      <p className="mt-4 max-w-md text-navy/75">
        Die gesuchte Seite gibt es nicht (mehr). Zur Startseite geht es hier entlang:
      </p>
      <Link href="/" className="btn-primary mt-7">Zur Startseite</Link>
    </section>
  );
}
