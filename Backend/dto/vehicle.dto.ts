import { z } from "zod";

// Enums
const VehicleTypeEnum = z.enum(["CAR", "MOTORCYCLE", "TRUCK"]); // example, adjust to your VehicleType
const VehicleSizeEnum = z.enum(["SMALL", "MEDIUM", "LARGE"]); // example

  export const createVehicleSchema = z.object({
    plateNumber: z.string().min(1),
    type: VehicleTypeEnum,
    brand: z.string().optional(),
    size: VehicleSizeEnum,
    made: z.string(),
    model: z.string(),
    color: z.string(),
    year: z.number().int().min(1886).max(new Date().getFullYear()).optional(), // cars invented in 1886
    ownerId: z.string().uuid(),
  });

export const updateVehicleSchema = createVehicleSchema.partial();
export type CreateVehicleDto = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleDto = z.infer<typeof updateVehicleSchema>;
