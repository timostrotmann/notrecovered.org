import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogEn = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/en/` directory.
	loader: glob({ base: './src/content/blog/en', pattern: '**/*.{md,mdx}' }),
	type: 'content_layer',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
		}),
});

const blogDe = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/de/` directory.
	loader: glob({ base: './src/content/blog/de', pattern: '**/*.{md,mdx}' }),
	type: 'content_layer',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
		}),
});

export const collections = { blogEn, blogDe };
