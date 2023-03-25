// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const articleCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        sortOrder: z.number().nonnegative(),
        pageTitle: z.string(),
        metaDescription: z.string().optional().nullable(),
        metaKeywords: z.string().optional().nullable()
    }),
});

const interviewCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        mediumdescription: z.string().optional().nullable(),
        sortOrder: z.number().nonnegative(),
        featuredsort: z.number().nonnegative(),
        featureddescription: z.string().optional().nullable(),
        thumbnail: z.string(),
        summaryMetaDescription: z.string().optional().nullable(), 
        summaryMetaKeywords:  z.string().optional().nullable(),
        metaDescription:  z.string().optional().nullable(),
        metaKeywords: z.string().optional().nullable()
    }),
});

export const collections = {
  'articles': articleCollection,
  'interviews': interviewCollection
};