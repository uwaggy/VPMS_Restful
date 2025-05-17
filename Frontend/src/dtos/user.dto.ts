import { z } from 'zod';
import { Role } from '../types';

export const CreateUserDto = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: z.string()
    .email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
    role: z.nativeEnum(Role)
});

export type CreateUserInput = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = CreateUserDto.omit({ password: true }).partial();
export type UpdateUserInput = z.infer<typeof UpdateUserDto>;

export const LoginDto = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required')
});

export type LoginInput = z.infer<typeof LoginDto>; 