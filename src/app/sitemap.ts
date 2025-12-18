import type { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ['', '/about', '/services', '/portfolio', '/contact'].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
    })
  );

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
