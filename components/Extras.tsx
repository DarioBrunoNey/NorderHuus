import { site } from '@/content/site';

/**
 * WhatsApp-Kontaktbutton – erscheint nur, wenn in content/site.ts
 * eine WhatsApp-Nummer hinterlegt ist (Format: 49170XXXXXXX).
 */
export function WhatsAppButton() {
  if (!site.contact.whatsapp) return null;

  return (
    <a
      href={`https://wa.me/${site.contact.whatsapp}`}
      target="_blank"
      rel="noopener"
      aria-label="Per WhatsApp Kontakt aufnehmen"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:bottom-6"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.9.8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.8l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.1-.6 3.5a11.5 11.5 0 0 0 4.4 4.8c1.6 1 2.9 1.3 3.8 1.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.2.1-1.3-.1-.2-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}

/**
 * Newsletter-Anmeldung (optional) – aktivieren in content/site.ts:
 * newsletter.enabled = true und formAction des Anbieters eintragen.
 */
export function NewsletterSignup() {
  if (!site.newsletter.enabled || !site.newsletter.formAction) return null;

  return (
    <section className="bg-navy">
      <div className="container-site py-12 text-white md:py-14">
        <h2 className="h-display text-2xl !text-white md:text-3xl">Nordsee-Post</h2>
        <p className="mt-2 max-w-xl text-white/80">
          Freie Termine, Angebote und Tipps für Norden & Norddeich – ab und zu per E-Mail.
        </p>
        <form action={site.newsletter.formAction} method="post" className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">E-Mail-Adresse</label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            required
            placeholder="ihre@email.de"
            className="w-full rounded-md border-0 px-4 py-3 text-navy"
          />
          <button type="submit" className="btn bg-sand-300 text-navy hover:bg-sand-200">
            Anmelden
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">
          Abmeldung jederzeit möglich. Hinweise in der Datenschutzerklärung.
        </p>
      </div>
    </section>
  );
}

/** JSON-LD sicher einbetten */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
