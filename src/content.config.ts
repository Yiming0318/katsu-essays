import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Markets', 'AI & Infrastructure', 'Money Philosophy']),
    readingTime: z.string(),
    featured: z.boolean().default(false),
    coverImage: z.string(),
    coverAlt: z.string()
  })
});

export const collections = { essays };
