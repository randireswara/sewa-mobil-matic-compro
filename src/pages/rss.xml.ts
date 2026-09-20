import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);

  return rss({
    title: `${siteConfig.name} - Artikel & Panduan Rental Mobil`,
    description: siteConfig.description,
    site: context.site || siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishedAt),
      description: post.data.description,
      link: `/artikel/${post.slug}/`,
    })),
    customData: `<language>id-ID</language>`,
  });
}
