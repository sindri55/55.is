import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/vefsidugerd',
    '/leitarvelabestun',
    '/auglysingar',
    '/verdskra',
    '/um-okkur',
    '/blogg',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogg/${post.id}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...blogRoutes];
}
