'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { categoryLabels, type GalleryCategory, type GalleryImage } from '@/content/gallery';

/**
 * Galerie mit Lightbox.
 * - Lazy Loading: next/image lädt Bilder standardmäßig erst beim Scrollen.
 * - Filter (optional): wird nur angezeigt, wenn `withFilter` gesetzt ist.
 * - Lightbox: Tastatur (Esc, Pfeiltasten) und Touch-freundliche Buttons.
 */
export default function Gallery({
  images,
  withFilter = false,
}: {
  images: GalleryImage[];
  withFilter?: boolean;
}) {
  const [filter, setFilter] = useState<GalleryCategory | 'alle'>('alle');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = filter === 'alle' ? images : images.filter((i) => i.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) => (i === null ? null : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  return (
    <div>
      {withFilter && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Galerie filtern">
          {(['alle', ...Object.keys(categoryLabels)] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c as GalleryCategory | 'alle')}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? 'border-navy bg-navy text-white'
                  : 'border-sand-300 bg-white text-navy hover:bg-sand-100'
              }`}
            >
              {c === 'alle' ? 'Alle' : categoryLabels[c as GalleryCategory]}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {visible.map((img, i) => (
          <li key={img.src} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block aspect-[4/3] h-full w-full overflow-hidden rounded-md"
              aria-label={`Bild vergrößern: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Bildansicht"
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {visible[lightbox].alt} · {lightbox + 1}/{visible.length}
          </p>
          <button type="button" onClick={close} aria-label="Schließen" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            ✕
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Vorheriges Bild" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            ‹
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Nächstes Bild" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
            ›
          </button>
        </div>
      )}
    </div>
  );
}
