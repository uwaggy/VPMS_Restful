import { z } from "zod";

// Enums - replace with your actual enums or string unions
const LocationZoneEnum = z.enum(["ZONE_A", "ZONE_B", "ZONE_C"]); // example
const VehicleTypeEnum = z.enum(["CAR", "MOTORCYCLE", "TRUCK"]); // example
const VehicleSizeEnum = z.enum(["SMALL", "MEDIUM", "LARGE"]); // example
const ParkingStatusEnum = z.enum(["AVAILABLE", "OCCUPIED", "RESERVED"]);

// Parking Slot DTO
export const createParkingSlotSchema = z.object({
  code: z.string().min(1),
  zone: LocationZoneEnum,
  floor: z.number().int().positive().default(1),
  type: VehicleTypeEnum,
  size: VehicleSizeEnum,
  status: ParkingStatusEnum.default("AVAILABLE"),
  hourlyRate: z.number().positive().default(2.5),
  isCovered: z.boolean().default(false),
  hasCharger: z.boolean().default(false),
});
  

export const updateParkingSlotSchema = createParkingSlotSchema.partial();

export type CreateParkingSlotDto = z.infer<typeof createParkingSlotSchema>;
export type UpdateParkingSlotDto = z.infer<typeof updateParkingSlotSchema>;

// Parking Record DTO
export const createParkingRecordSchema = z.object({
  requestId: z.string().uuid().optional(),
  vehicleId: z.string().uuid(),
  slotId: z.string().uuid(),
  parkingSpotId: z.string().uuid().optional(),
  checkIn: z.preprocess((arg: unknown) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date().optional()),

  checkOut: z.preprocess((arg: unknown) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date().optional()),

  totalHours: z.number().positive().optional(),
  amountPaid: z.number().nonnegative().optional(),
  paymentMethod: z.string().optional(),
});

export const updateParkingRecordSchema = createParkingRecordSchema.partial();

export type CreateParkingRecordDto = z.infer<typeof createParkingRecordSchema>;
export type UpdateParkingRecordDto = z.infer<typeof updateParkingRecordSchema>;
