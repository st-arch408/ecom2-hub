import { defineCollection, z } from 'astro:content';

const prfaqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    version: z.string().optional(),
    owner: z.string().optional(),
    date: z.string().optional(),
    status: z.enum(['draft', 'review', 'approved', 'shipped']).optional().default('draft'),
    workstream: z.enum([
      'ecom2-core',
      'atb-blue',
      'builds',
      'template-library',
      'jobs',
      'delivery-tracking',
      'crm',
      'payments',
      'other',
    ]).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  prfaq: prfaqCollection,
};
