import Link from 'next/link';

/**
 * Mobile Sticky Booking Bar – auf Mobilgeräten immer sichtbar am unteren Rand.
 * (Der Footer hat unten zusätzliches Padding, damit nichts verdeckt wird.)
 */
export default function StickyBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/95 p-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <Link href="/preise-und-verfuegbarkeit" className="btn-secondary flex-1 !py-3 text-center">
          Verfügbarkeit
        </Link>
        <Link href="/preise-und-verfuegbarkeit" className="btn-primary flex-1 !py-3 text-center">
          Jetzt buchen
        </Link>
      </div>
    </div>
  );
}
