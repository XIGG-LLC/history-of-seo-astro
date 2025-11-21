import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
    loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/articles" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        sortOrder: z.number().nonnegative(),
        pageTitle: z.string(),
        metaDescription: z.string().optional().nullable(),
        metaKeywords: z.string().optional().nullable()
    }),
});

const interviews = defineCollection({
    loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/interviews" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        mediumdescription: z.string().optional().nullable(),
        sortOrder: z.number().nonnegative(),
        featuredsort: z.number().nonnegative(),
        featureddescription: z.string().optional().nullable(),
        thumbnail: image(),
        summaryMetaDescription: z.string().optional().nullable(), 
        summaryMetaKeywords:  z.string().optional().nullable(),
        metaDescription:  z.string().optional().nullable(),
        metaKeywords: z.string().optional().nullable()
    }),
});

export const collections = { articles, interviews };