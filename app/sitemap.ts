import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/ferienhaus',
    '/galerie',
    '/lage-und-umgebung',
    '/preise-und-verfuegbarkeit',
    '/kontakt',
    '/ferienhaus-norden',
    '/ferienhaus-norddeich',
    '/ferienhaus-norderney-faehre',
  ];

  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/preise') ? 0.9 : 0.7,
  }));
}
