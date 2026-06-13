# NorderHuus auf Cloudflare (Workers) bringen – Schritt für Schritt

Cloudflare hat die Oberfläche umgestellt: Statische Seiten laufen jetzt über
"Workers" mit Static Assets (statt dem alten "Pages"). Funktioniert genauso gut,
ist kostenlos und ist bereits über die Datei `wrangler.toml` vorkonfiguriert.

Du brauchst KEIN Node.js und KEINE Kommandozeile – Cloudflare baut in der Cloud.

---

## Voraussetzung
Das Projekt liegt bereits im GitHub-Repository (DarioBrunoNey/NorderHuus).
WICHTIG: Die neue Datei `wrangler.toml` muss mit hochgeladen sein (siehe unten).

## Schritt 1: wrangler.toml zu GitHub hinzufügen
Falls `wrangler.toml` noch nicht im Repo ist:
1. Im Repo auf **Add file → Upload files**.
2. Die Datei `wrangler.toml` reinziehen → **Commit changes**.

## Schritt 2: Anwendung in Cloudflare erstellen
1. Cloudflare → **Workers und Pages** → **Anwendung erstellen**.
2. Tab/Bereich **Workers** → **Mit Git verbinden** (GitHub autorisieren,
   Repository `NorderHuus` auswählen).
3. Bei den Build-Einstellungen:
   - **Build-Befehl:** `npm run build`
   - **Bereitstellungsbefehl:** `npx wrangler deploy`
   (Dank wrangler.toml weiß Cloudflare, dass der Ordner `out` als statische
   Seite ausgeliefert wird.)
4. **Bereitstellen** klicken. Cloudflare baut (1–3 Min) und gibt dir eine
   Test-URL `…workers.dev`.

## Schritt 3: Domain norderhuus.de verbinden
1. Im Worker-Projekt → **Einstellungen** → **Domains & Routes** (bzw.
   "Benutzerdefinierte Domain hinzufügen").
2. `norderhuus.de` (und optional `www.norderhuus.de`) eintragen.
   Cloudflare legt den DNS-Eintrag automatisch an, SSL kommt automatisch.

---

## Künftige Änderungen
Geänderte Dateien einfach wieder über GitHub hochladen → Cloudflare baut und
veröffentlicht automatisch neu.

## Wenn der Build fehlschlägt
Schick die rote Fehlermeldung aus dem Build-Log – häufige Ursachen:
- `wrangler.toml` fehlt im Repo → Schritt 1 nachholen.
- Bereitstellungsbefehl steht nicht auf `npx wrangler deploy`.
