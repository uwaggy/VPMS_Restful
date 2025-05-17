import { z } from 'zod';
import { VehicleType, VehicleSize, Role, Location, ParkingSlotStatus } from '../types';

// Vehicle Registration Schema
export const vehicleSchema = z.object({
  plateNumber: z.string()
    .min(5, 'Plate number must be at least 5 characters')
    .max(10, 'Plate number must not exceed 10 characters'),
  brand: z.string()
    .min(2, 'Brand must be at least 2 characters'),
  model: z.string()
    .min(2, 'Model must be at least 2 characters'),
  type: z.nativeEnum(VehicleType, {
    errorMap: () => ({ message: 'Please select a valid vehicle type' })
  }),
  size: z.nativeEnum(VehicleSize, {
    errorMap: () => ({ message: 'Please select a valid vehicle size' })
  }),
  attributes: z.object({
    color: z.string().min(2, 'Color must be at least 2 characters')
  }).and(z.record(z.string()))
});

// User Registration Schema
export const userSchema = z.object({
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
  role: z.nativeEnum(Role, {
    errorMap: () => ({ message: 'Please select a valid role' })
  })
});

// Parking Slot Schema
export const parkingSlotSchema = z.object({
  slotNumber: z.string()
    .min(2, 'Slot number must be at least 2 characters')
    .max(10, 'Slot number must not exceed 10 characters'),
  size: z.nativeEnum(VehicleSize, {
    errorMap: () => ({ message: 'Please select a valid slot size' })
  }),
  type: z.nativeEnum(VehicleType, {
    errorMap: () => ({ message: 'Please select a valid vehicle type' })
  }),
  status: z.nativeEnum(ParkingSlotStatus, {
    errorMap: () => ({ message: 'Please select a valid status' })
  }),
  location: z.nativeEnum(Location, {
    errorMap: () => ({ message: 'Please select a valid location' })
  })
});

// Bulk Parking Slots Schema
export const bulkParkingSlotsSchema = z.object({
  count: z.number()
    .min(1, 'Must create at least 1 slot')
    .max(100, 'Cannot create more than 100 slots at once'),
  type: z.nativeEnum(VehicleType),
  size: z.nativeEnum(VehicleSize),
  location: z.nativeEnum(Location)
}); 