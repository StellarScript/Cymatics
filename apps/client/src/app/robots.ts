import type { MetadataRoute } from 'next';
import { env } from '@client/env.mjs';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/admin'],
      },
    ],
    sitemap: `${env.BASE_URL}/sitemap.xml`,
  };
}
