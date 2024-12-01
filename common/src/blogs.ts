import z from "zod";

export const blogPostInput = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
})

export type BlogPostInput = z.infer<typeof blogPostInput>;

export const updatePostInput = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    id: z.string().min(1),
})

export type UpdatePostInput = z.infer<typeof updatePostInput>;