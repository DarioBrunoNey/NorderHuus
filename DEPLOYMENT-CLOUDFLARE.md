# NorderHuus auf Cloudflare Pages bringen – Schritt für Schritt

Du brauchst **kein** Node.js und **keine** Kommandozeile. Cloudflare baut die Seite
für dich in der Cloud. Insgesamt ca. 15 Minuten.

Wichtig vorab: Die `.tsx`-Dateien usw., die du per FTP zu Host Europe geladen hast,
kannst du dort wieder löschen – Host Europe kann eine Next.js-Seite nicht ausführen.
Wir hosten ab jetzt bei Cloudflare. Host Europe brauchst du nur noch, falls deine
Domain norderhuus.de dort registriert ist.

---

## Schritt 1: GitHub-Konto anlegen (falls noch keins)

1. Auf https://github.com/signup ein kostenloses Konto erstellen.
2. E-Mail bestätigen, fertig.

## Schritt 2: Projekt zu GitHub hochladen (per Browser, kein Git nötig)

1. Auf https://github.com/new ein neues Repository anlegen:
   - Repository name: `norderhuus`
   - Auf **Private** stellen (geht auch Public, aber privat ist sauberer).
   - **Nicht** "Add a README" anhaken.
   - Auf **Create repository** klicken.
2. Auf der nächsten Seite den Link **„uploading an existing file"** anklicken
   (Text: *"Get started by … uploading an existing file"*).
3. Den **Inhalt** dieses Projektordners (norderhuus) per Drag & Drop ins Browserfenster
   ziehen. Wichtig: die Dateien/Ordner SELBST hochladen (app, components, content,
   lib, public, package.json …), nicht den umschließenden Ordner.
   - Falls der Browser keine Ordner annimmt: ZIP entpacken und alles markiert reinziehen.
4. Unten auf **Commit changes** klicken. Warten, bis alle Dateien sichtbar sind.

## Schritt 3: Cloudflare Pages mit GitHub verbinden

1. Im Cloudflare-Dashboard (du hast ja schon ein Konto) links auf
   **Workers & Pages** → Tab **Pages** → **Connect to Git**.
2. GitHub autorisieren und das Repository `norderhuus` auswählen → **Begin setup**.
3. Bei den Build-Einstellungen eingeben:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   (Falls das Preset die Felder schon ausfüllt: so lassen, nur „out" prüfen.)
4. Auf **Save and Deploy** klicken. Cloudflare baut jetzt die Seite (1–3 Minuten).
5. Danach bekommst du eine Test-URL wie `norderhuus-xyz.pages.dev` – dort kannst du
   die fertige Seite sofort ansehen und die vOffice-Buchung testen.

## Schritt 4: Domain norderhuus.de verbinden

1. In deinem Pages-Projekt → Tab **Custom domains** → **Set up a custom domain**.
2. `norderhuus.de` eingeben → Cloudflare legt den nötigen DNS-Eintrag automatisch an
   (deine Nameserver zeigen ja schon auf Cloudflare).
3. Optional zusätzlich `www.norderhuus.de` hinzufügen.
4. SSL ist automatisch aktiv. Nach ein paar Minuten ist die Seite live.

---

## Künftige Änderungen

Wenn du später etwas änderst (z. B. neue Fotos): die geänderten Dateien einfach
wieder über GitHub hochladen (gleicher Weg wie Schritt 2, „Add file" → „Upload files").
Cloudflare baut und veröffentlicht automatisch neu – nichts weiter zu tun.

## Wenn der Build fehlschlägt

- Prüfe, dass **Build output directory** auf `out` steht.
- Prüfe, dass die Datei `package.json` wirklich im Repository-Hauptverzeichnis liegt
  (nicht in einem Unterordner „norderhuus").
- Schick mir die rote Fehlermeldung aus dem Cloudflare-Build-Log, dann lösen wir es.
