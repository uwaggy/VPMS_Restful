import { z } from "zod";

export const  loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
}); 


export const registerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["ADMIN", "USER"], {
    errorMap: () => ({ message: "Role must be either ADMIN or USER" }),
  }),
});

export type RegisterDto = z.infer<typeof registerSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
