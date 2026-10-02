import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Categorías del blog. Añadir una categoría = actualizar estos 3 objetos.
export const CATEGORIES = ['programacion', 'ia', 'hardware', 'impresion-3d', 'cosplay'] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  programacion: 'Software',
  ia: 'IA',
  hardware: 'Hardware',
  'impresion-3d': 'Impresión 3D',
  cosplay: 'Cosplay',
};

// "Dirección" hexadecimal fija por categoría — guiño a 0xDA bit. Se usa como
// número de globo (balloon) en el plano del isotipo y en las listas.
export const CATEGORY_HEX: Record<Category, string> = {
  programacion: '0x01',
  ia: '0x02',
  hardware: '0x03',
  'impresion-3d': '0x04',
  cosplay: '0x05',
};

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      stack: z.array(z.string()).default([]),
      repoUrl: z.string().url().optional(),
      videoUrl: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      status: z.enum(['activo', 'completado', 'archivado']).default('activo'),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts, projects };
