import z from "zod";

export const signUpInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    name: z.string().optional(),
})

// type export
export type SignUpInput = z.infer<typeof signUpInput>;

export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
})

// type export
export type SignInInput = z.infer<typeof signInInput>;