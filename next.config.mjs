/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // statischer Export → reines HTML/CSS/JS für Cloudflare Pages
  images: {
    unoptimized: true, // nötig für statischen Export (kein Server zur Bildoptimierung)
  },
  trailingSlash: true, // saubere URLs als Ordner (norderhuus.de/kontakt/)
  poweredByHeader: false,
};

export default nextConfig;
