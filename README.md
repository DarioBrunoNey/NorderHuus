# NorderHuus – norderhuus.de

Moderne, schnelle und SEO-optimierte Website für das Ferienhaus **NorderHuus** in Norden (Ostfriesland).

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel-ready

---

## Schnellstart

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Produktions-Build (vor Deployment testen)
```

## Deployment auf Vercel

1. Projekt in ein Git-Repository pushen (GitHub/GitLab) **oder** `npx vercel` im Projektordner ausführen.
2. In Vercel importieren – Next.js wird automatisch erkannt, keine Build-Einstellungen nötig.
3. Domain `norderhuus.de` in Vercel unter *Settings → Domains* hinzufügen und die angezeigten DNS-Einträge beim Domain-Provider setzen. SSL kommt automatisch.
4. Umgebungsvariablen in Vercel setzen (siehe `.env.example`):
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` – GA4-Mess-ID (optional, wird nur nach Cookie-Einwilligung geladen)
   - `NEXT_PUBLIC_GSC_VERIFICATION` – Google-Search-Console-Verifizierungscode (optional)

## Wo wird was gepflegt? (Adminfreundlichkeit)

| Inhalt | Datei |
|---|---|
| Alle Texte, Kontaktdaten, Highlights, Entfernungen, Check-in/out | `content/site.ts` |
| Galerie-Bilder + Alt-Texte + Kategorien | `content/gallery.ts` |
| FAQ (Akkordeon **und** Schema.org-FAQ) | `content/faq.ts` |
| **vOffice-Integration (zentral!)** | `lib/voffice.ts` |
| Bilddateien | `public/images/` (siehe `README.txt` dort) |
| Grundriss-PDF | `public/downloads/` + Schalter in `content/site.ts` |

Blog später ergänzen: einfach `app/blog/` als neue Route anlegen – die Architektur ist darauf vorbereitet.

## Offene TODOs vor Livegang

1. ~~vOffice~~ ✅ eingebaut (offizieller Embed: `V.setup` + `ex_m.js`, Modul `booking_with_calendar`). Nach dem ersten Deployment einmal Buchungsstrecke und Seitenwechsel testen. Optional: `directBookingUrl` und `icalUrl` in `lib/voffice.ts` ergänzen.
2. ~~Kontaktdaten~~ ✅ Telefon, Mobil, info@norderhuus.de und WhatsApp sind eingetragen. E-Mail-Postfach/Weiterleitung für info@norderhuus.de anlegen!
3. ~~Hausadresse~~ ✅ Dortmunder Straße 10b inkl. Koordinaten. Kartenmarker nach Livegang prüfen, ggf. feinjustieren.
4. ~~Bilder~~ ✅ 21 echte Fotos eingebaut (Kennzeichen auf Außenansicht verpixelt). Nächste Woche durch Neuaufnahmen ersetzen: gleiche Dateinamen in `public/images/`.
5. **Impressum/Datenschutz:** TODO-Kommentare prüfen (z. B. USt-IdNr.) und rechtlich gegenprüfen.
6. **Nach Deployment:** GA4-Property + Search Console anlegen, Env-Vars in Vercel setzen, Sitemap einreichen.

## Google Search Console vorbereiten

1. Property `norderhuus.de` (Domain-Property) in der Search Console anlegen.
2. Verifizierung wahlweise per DNS-Eintrag **oder** per HTML-Tag: Code in `NEXT_PUBLIC_GSC_VERIFICATION` hinterlegen – das Meta-Tag wird automatisch ausgegeben.
3. Sitemap einreichen: `https://www.norderhuus.de/sitemap.xml` (wird automatisch generiert, ebenso `robots.txt`).

## DSGVO-Konzept

- **Schriften:** über `next/font` selbst gehostet – kein Google-Fonts-CDN zur Laufzeit.
- **GA4:** wird ausschließlich nach aktiver Einwilligung im Cookie-Banner geladen ("Nur notwendige" = kein Tracking).
- **Karte:** OpenStreetMap als Zwei-Klick-Lösung – kein externer Request vor dem Klick.
- **Datenschutzerklärung:** deckt Vercel, GA4, vOffice, OSM und WhatsApp ab (Entwurf, bitte prüfen).

## vOffice-Architektur (austauschbar)

Alle PMS-spezifischen Werte liegen in **einer** Datei: `lib/voffice.ts`. Die Komponenten
`BookingWidget` und `AvailabilityCalendar` (in `components/VOffice.tsx`) lesen nur aus
dieser Config. Ein Wechsel des Widgets oder des PMS bedeutet: nur diese zwei Dateien
anfassen – Seiten und Layout bleiben unverändert. iCal-Feed und Direktbuchungslink sind
als Felder vorbereitet.
