import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((val) => new Date(val)),
        author: z.string().default("VelyonSoft"),
        cover: z.string().optional(),
        category: z.string().optional(),
    }),
});

const proyectosCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        result: z.string(),
        date: z.string().transform((val) => new Date(val)),
        cover: z.string(),
        url: z.string().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    blog: blogCollection,
    proyectos: proyectosCollection,
};