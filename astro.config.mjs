import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function customSitemapIntegration() {
  return {
    name: 'custom-sitemap-generator',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        const siteUrl = 'https://sewamobilmatic.id';
        const pageUrls = pages
          .map((p) => {
            let pathname = p.pathname;
            if (!pathname || pathname === '404' || pathname.startsWith('404')) return null;
            if (!pathname.startsWith('/')) pathname = '/' + pathname;
            if (!pathname.endsWith('/')) pathname = pathname + '/';
            return `${siteUrl}${pathname}`;
          })
          .filter(Boolean);

        const uniqueUrls = Array.from(new Set(pageUrls));

        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === siteUrl + '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

        const distDir = fileURLToPath(dir);
        fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), xmlContent);
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xmlContent);
        console.log(`\n✓ Sitemap generated with ${uniqueUrls.length} canonical URLs at sitemap-index.xml & sitemap.xml\n`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://sewamobilmatic.id',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    customSitemapIntegration(),
  ],
});
