import { MetadataRoute } from 'next';
import { env } from '@client/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${env.BASE_URL}`,
      lastModified: new Date(),
    },
  ];
}
