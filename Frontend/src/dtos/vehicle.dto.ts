import { z } from 'zod';
import { VehicleType, VehicleSize } from '../types';

export const CreateVehicleDto = z.object({
  plateNumber: z.string()
    .min(5, 'Plate number must be at least 5 characters')
    .max(10, 'Plate number must not exceed 10 characters'),
  brand: z.string()
    .min(2, 'Brand must be at least 2 characters'),
  model: z.string()
    .min(2, 'Model must be at least 2 characters'),
  type: z.nativeEnum(VehicleType),
  size: z.nativeEnum(VehicleSize),
  attributes: z.object({
    color: z.string().min(2, 'Color must be at least 2 characters')
  }).and(z.record(z.string()))
});

export type CreateVehicleInput = z.infer<typeof CreateVehicleDto>;

export const UpdateVehicleDto = CreateVehicleDto.partial();
export type UpdateVehicleInput = z.infer<typeof UpdateVehicleDto>; 