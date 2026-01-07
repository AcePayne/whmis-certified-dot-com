import { z, defineCollection } from "astro:content";

const articleSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  published: z.union([z.string(), z.date()]).optional(),
  author: z.string().optional(),
});

export const collections = {
  articles: defineCollection({ schema: articleSchema }),
  questions: defineCollection({ schema: articleSchema }),
};