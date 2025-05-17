import { z } from 'zod';
import { VehicleType, VehicleSize, Location, ParkingSlotStatus } from '../types';

export const CreateParkingSlotDto = z.object({
  slotNumber: z.string()
    .min(2, 'Slot number must be at least 2 characters')
    .max(10, 'Slot number must not exceed 10 characters'),
  size: z.nativeEnum(VehicleSize),
  type: z.nativeEnum(VehicleType),
  status: z.nativeEnum(ParkingSlotStatus),
  location: z.nativeEnum(Location)
});

export type CreateParkingSlotInput = z.infer<typeof CreateParkingSlotDto>;

export const UpdateParkingSlotDto = CreateParkingSlotDto.partial();
export type UpdateParkingSlotInput = z.infer<typeof UpdateParkingSlotDto>;

export const CreateBulkParkingSlotsDto = z.object({
  count: z.number()
    .min(1, 'Must create at least 1 slot')
    .max(100, 'Cannot create more than 100 slots at once'),
  type: z.nativeEnum(VehicleType),
  size: z.nativeEnum(VehicleSize),
  location: z.nativeEnum(Location)
});

export type CreateBulkParkingSlotsInput = z.infer<typeof CreateBulkParkingSlotsDto>;

export const CheckInDto = z.object({
  vehicleId: z.string().uuid('Invalid vehicle ID'),
  parkingSlotId: z.string().uuid('Invalid parking slot ID')
});

export type CheckInInput = z.infer<typeof CheckInDto>;

export const CheckOutDto = z.object({
  parkingRecordId: z.string().uuid('Invalid parking record ID')
});

export type CheckOutInput = z.infer<typeof CheckOutDto>; 