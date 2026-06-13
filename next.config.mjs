/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',        // statischer Export → reines HTML/CSS/JS
  images: {
    unoptimized: true,     // nötig für statischen Export
  },
  poweredByHeader: false,
  // KEIN trailingSlash → vermeidet Slash-Konflikte mit /_next/static-Dateien auf Cloudflare
};

export default nextConfig;
