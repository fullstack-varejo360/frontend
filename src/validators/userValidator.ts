import {z} from "zod"

export const schemaRegister = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})

export type TRegisterData = z.infer<typeof schemaRegister>

export const schemaLogin = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha obrigatória")
})

export type TLoginData = z.infer<typeof schemaLogin>

export const schemaUserUpdate = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
})

export type TUserUpdate = z.infer<typeof schemaUserUpdate>