import { z } from "zod";

export const snippetSchema = z.object({
    id: z.string(),
    createdAt: z.number(),
    language: z.string(),
    content: z.string(),
});
