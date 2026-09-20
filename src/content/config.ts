import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()).optional(),
    author: z.string().default('Tim Sewa Mobil Matic'),
    category: z.string().default('Rental Mobil'),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().default('/images/blog/default.webp'),
    canonical: z.string().optional(),
    draft: z.boolean().default(false),
    relatedSeoPage: z.string().optional(), // slug to link back to landing page
  }),
});

export const collections = {
  blog: blogCollection,
};
