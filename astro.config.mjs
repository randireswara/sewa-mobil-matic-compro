import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function customSitemapIntegration() {
  return {
    name: "custom-sitemap-generator",
    hooks: {
      "astro:build:done": async ({ dir, pages }) => {
        const siteUrl = "https://sewamobilmatic.id";

        console.log(
          "Sitemap pages:",
          pages.map((p) => p.pathname),
        );

        const pageUrls = pages
          .map((p) => {
            let pathname = p.pathname;

            // Exclude 404, but keep homepage ""
            if (
              pathname === "404/" ||
              pathname === "/404/" ||
              pathname === "/404"
            ) {
              return null;
            }

            if (!pathname.startsWith("/")) {
              pathname = "/" + pathname;
            }

            if (!pathname.endsWith("/")) {
              pathname += "/";
            }

            return `${siteUrl}${pathname}`;
          })
          .filter(Boolean);

        const uniqueUrls = [...new Set(pageUrls)];

        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;

        const distDir = fileURLToPath(dir);

        fs.writeFileSync(path.join(distDir, "sitemap.xml"), xmlContent);

        console.log(
          `\n✓ Sitemap generated with ${uniqueUrls.length} URLs at sitemap.xml\n`,
        );
      },
    },
  };
}

export default defineConfig({
  site: "https://sewamobilmatic.id",
  trailingSlash: "always",

  integrations: [tailwind(), customSitemapIntegration()],
});
