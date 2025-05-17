// dto/user.dto.ts
import { z } from "zod";
import { Role } from "../generated/prisma"; // Import Role directly

// 1) Use Role directly
const roleEnum = z.nativeEnum(Role);

export const createUserSchema = z.object({
  fullName: z.string().min(1).trim(),
  email: z.string().email().trim(),
  password: z.string().min(6).trim(),
  phone: z.string().min(10).trim(),
  role: roleEnum,
});

export const updateUserSchema = createUserSchema
  .partial()
  .extend({ password: z.string().min(6).optional() });

// These types now really match your schema
export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
