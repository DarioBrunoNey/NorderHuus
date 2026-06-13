// Schlanke Inline-SVG-Icons (keine externe Bibliothek, keine Ladezeit-Kosten).
// Stil: 1.5px Strich, abgerundet – passend zum ruhigen, nordischen Design.

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export type IconName =
  | 'persons' | 'sqm' | 'bed' | 'bath' | 'garden' | 'terrace' | 'wifi'
  | 'washer' | 'dryer' | 'tv' | 'carport' | 'nosmoking' | 'nopets'
  | 'wave' | 'ferry' | 'pin' | 'phone' | 'mail' | 'check' | 'calendar';

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const icons: Record<IconName, React.ReactNode> = {
    persons: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 14.6c2.8.2 5 2 5 4.9" />
      </>
    ),
    sqm: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
        <path d="M8 16v-5l3 3 3-3v5" />
      </>
    ),
    bed: (
      <>
        <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
        <path d="M3 18h18M6 9V7a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 18 7v2" />
      </>
    ),
    bath: (
      <>
        <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
        <path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4c1.2 0 2.1.8 2.4 1.9M7 19l-1 2M17 19l1 2" />
      </>
    ),
    garden: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 13c0-3.5-2.5-6-6-6 0 3.5 2.5 6 6 6ZM12 11c0-3 2.2-5 5.5-5 0 3-2.2 5-5.5 5Z" />
        <path d="M5 21h14" />
      </>
    ),
    terrace: (
      <>
        <path d="M12 4v16M4 21h16" />
        <path d="M12 4c-4 0-7 2.5-8 5h16c-1-2.5-4-5-8-5ZM8 21v-4a4 4 0 0 1 8 0v4" />
      </>
    ),
    wifi: (
      <>
        <path d="M4 9.5C8.5 5.5 15.5 5.5 20 9.5M6.8 13c3-2.6 7.4-2.6 10.4 0M9.6 16.2a3.6 3.6 0 0 1 4.8 0" />
        <circle cx="12" cy="19" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
    washer: (
      <>
        <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M8.5 13c1.2-1 2.3 1 3.5 0s2.3 1 3.5 0M7.5 6.5h.01M10.5 6.5h.01" />
      </>
    ),
    dryer: (
      <>
        <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M12 10.5a2.5 2.5 0 0 1 0 5M7.5 6.5h.01M16.5 6.5h.01" />
      </>
    ),
    tv: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="1.5" />
        <path d="M9 21h6M12 17v4" />
      </>
    ),
    carport: (
      <>
        <path d="M3 10l9-5 9 5M5 10v10M19 10v10" />
        <path d="M7.5 17.5l1.2-2.7c.2-.5.7-.8 1.2-.8h4.2c.5 0 1 .3 1.2.8l1.2 2.7M7.5 17.5V20M16.5 17.5V20M7.5 17.5h9" />
      </>
    ),
    nosmoking: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M6 18 18 6M8 13.5h5.5M16 13.5h.5" />
      </>
    ),
    nopets: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M6 18 18 6" />
        <path d="M9.2 9.2c.5-.5.5-1.3 0-1.8M14.8 9.2c-.5-.5-.5-1.3 0-1.8M10 15.5c.5-1 1.2-1.5 2-1.5s1.5.5 2 1.5" />
      </>
    ),
    wave: <path d="M3 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />,
    ferry: (
      <>
        <path d="M4 17.5 3 13l9-2 9 2-1 4.5" />
        <path d="M6 11V8h12v3M10 8V5.5h4V8M3 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    check: <path d="m5 13 4 4L19 7" />,
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      </>
    ),
  };

  return (
    <svg {...base} className={className}>
      {icons[name]}
    </svg>
  );
}
