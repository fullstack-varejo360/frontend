import { z } from "zod";

export const productCreateSchema = z.object({
  user_id: z.number().max(15),
  code: z.number().max(15),
  name: z.string(),
});

export const productUpdateSchema = z.object({
  user_id: z.number().max(15).optional(),
  code: z.number().max(15).optional(),
  name: z.string().optional(),
});

export type TProductCreateData = z.infer<typeof productCreateSchema>;

export type TProductUpdateData = z.infer<typeof productUpdateSchema>;
