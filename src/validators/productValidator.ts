import { z } from "zod";

export const productCreateSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const productUpdateSchema = z.object({
  code: z.string().optional(),
  name: z.string().optional(),
});

export type TProductCreateData = z.infer<typeof productCreateSchema>;

export type TProductUpdateData = z.infer<typeof productUpdateSchema>;
