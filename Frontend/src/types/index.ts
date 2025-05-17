export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum VehicleType {
  CAR = 'CAR',
  MOTORCYCLE = 'MOTORCYCLE',
  TRUCK = 'TRUCK',
  VAN = 'VAN'
}

export enum VehicleSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export enum ParkingSlotStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  MAINTENANCE = 'MAINTENANCE'
}

export enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum Location {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  vehicles?: Vehicle[];
  slotRequests?: SlotRequest[];
  createdAt: string;
  updatedAt: string;
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  brand: string;
  model: string;
  type: string;
  size: VehicleSize;
  attributes: {
    color: string;
    [key: string]: any;
  };
  ownerId: string;
  owner?: User;
  slotRequests?: SlotRequest[];
  createdAt: string;
  updatedAt: string;
  color?: string;
}

export interface ParkingSlot {
  id: string;
  slotNumber: string;
  size: VehicleSize;
  type: VehicleType;
  status: ParkingSlotStatus;
  location: Location;
  slotRequests?: SlotRequest[];
  createdAt: string;
  updatedAt: string;
}

export interface SlotRequest {
  id: string;
  userId: string;
  user?: User;
  vehicleId: string;
  vehicle?: Vehicle;
  parkingSlotId?: string;
  parkingSlot?: ParkingSlot;
  status: RequestStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Log {
  id: string;
  userId: string;
  user?: User;
  action: string;
  details?: any;
  createdAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    total: number;
    page: number;
    totalPages: number;
    limit: number;
  };
}

export interface ParkingSpot {
  id: string;
  spotNumber: string;
  status: 'AVAILABLE' | 'OCCUPIED';
  vehicleType: string;
  floor: string;
  section: string;
}

export interface ParkingRecord {
  id: string;
  checkIn: string;
  checkOut?: string;
  vehicleId: string;
  vehicle?: Vehicle;
  parkingSpot?: ParkingSpot;
  fee?: number;
} 