/**
 * VOFFICE-INTEGRATION (zentral & austauschbar)
 * ============================================
 * Offizieller Einbettungscode aus dem vOffice-Admin (Stand: Juni 2026):
 * - Baustein-Div:  <div v-switch="layout"></div>  → rendert die Komponente <VofficeBooking />
 * - Globale Config `V.setup` + Script ex_m.js → werden beim Mounten gesetzt/geladen
 *
 * Ein PMS-/Widget-Wechsel bedeutet: nur diese Datei und components/VOffice.tsx anpassen.
 */

export const voffice = {
  /** vOffice Member-ID (Ferienwohnungen Bruno) */
  memberId: 3174,

  /** Modulpfad des NorderHuus: komplette Buchungsstrecke inkl. Belegungskalender */
  modulePath: '.booking_with_calendar/Nordsee/Norden/DHH.DO10B',

  /** Sprache des Widgets */
  lang: 'de',

  /** Offizielle Script-URL aus dem vOffice-Einbettungscode */
  widgetScriptSrc: 'https://dyn.v-office.com/resource/js/ex_m.js',

  /** Optional: direkter Buchungslink als Fallback (z. B. für E-Mails/Social) */
  directBookingUrl: '',

  /** Optional: iCal-Feed des Objekts (aus vOffice exportierbar) */
  icalUrl: '',
} as const;

export const isWidgetConfigured = () => voffice.widgetScriptSrc.length > 0;
