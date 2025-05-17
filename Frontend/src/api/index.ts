import axios from "axios";
import { CreateVehicleInput, UpdateVehicleInput } from "../dtos/vehicle.dto";
import { CreateUserInput, UpdateUserInput, LoginInput } from "../dtos/user.dto";
import {
  CreateParkingSlotInput,
  UpdateParkingSlotInput,
  CreateBulkParkingSlotsInput,
  CheckInInput,
  CheckOutInput,
} from "../dtos/parking.dto";

const API_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_URL,
});

// Auth API
export const authApi = {
  setAuthToken: (token: string | null) => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  },

  login: (email: string, password: string) => {
    return api.post("/auth/login", { email, password });
  },

  register: (data: { name: string; email: string; password: string }) => {
    return api.post("/auth/register", data);
  },

  getCurrentUser: () => {
    return api.get("/auth/me");
  },
};

// Vehicle API
export const vehicleApi = {
  getAll: () => api.get("/vehicles"),
  getById: (id: string) => api.get(`/vehicles/${id}`),
  create: (data: any) => api.post("/vehicles", data),
  update: (id: string, data: any) => api.put(`/vehicles/${id}`, data),
  delete: (id: string) => api.delete(`/vehicles/${id}`),
};

// User API
export const userApi = {
  create: (data: CreateUserInput) => api.post("/users", data),
  update: (id: string, data: UpdateUserInput) => api.put(`/users/${id}`, data),
  delete: (id: string) => api.delete(`/users/${id}`),
  getAll: () => api.get("/users"),
  getById: (id: string) => api.get(`/users/${id}`),
};

// Parking API
export const parkingApi = {
  createSlot: (data: CreateParkingSlotInput) =>
    api.post("/parking-slots", data),
  updateSlot: (id: string, data: UpdateParkingSlotInput) =>
    api.put(`/parking-slots/${id}`, data),
  deleteSlot: (id: string) => api.delete(`/parking-slots/${id}`),
  getAllSlots: () => api.get("/parking-slots"),
  getSlotById: (id: string) => api.get(`/parking-slots/${id}`),
  createBulkSlots: (data: CreateBulkParkingSlotsInput) =>
    api.post("/parking-slots/bulk", data),
  checkIn: (data: CheckInInput) => api.post("/parking-records/check-in", data),
  checkOut: (data: CheckOutInput) =>
    api.put(`/parking-records/check-out/${data.parkingRecordId}`),
  getActiveRecords: () => api.get("/parking-records/active"),
};

// Slot Requests
export const getSlotRequests = (
  page?: number,
  limit?: number,
  search?: string
) => api.get("/slot-requests", { params: { page, limit, search } });
export const approveRequest = (id: string) =>
  api.put(`/slot-requests/${id}/approve`);
export const rejectRequest = (id: string, reason?: string) =>
  api.put(`/slot-requests/${id}/reject`, { reason });

// Logs
export const getLogs = (page?: number, limit?: number, search?: string) =>
  api.get("/logs", { params: { page, limit, search } });

// Export API objects to match imports
export const parkingSpotApi = {
  getAll: () => api.get("/parking-slots"),
  update: (id: string, data: any) => api.put(`/parking-slots/${id}`, data),
  delete: (id: string) => api.delete(`/parking-slots/${id}`),
};

export const parkingRecordApi = {
  getActive: () => api.get("/parking-records/active"),
  checkIn: (data: any) => api.post("/parking-records/check-in", data),
  checkOut: (id: string) => api.put(`/parking-records/${id}/check-out`),
  getById: (id: string) => api.get(`/parking-records/${id}`),
};

// Parking Slots
export const getParkingSlots = (
  page?: number,
  limit?: number,
  search?: string
) => api.get("/parking-slots", { params: { page, limit, search } });
export const createBulkParkingSlots = (data: {
  count: number;
  type: string;
  size: string;
  location: string;
}) => api.post("/parking-slots/bulk", data);
export const updateParkingSlot = (id: string, data: any) =>
  api.put(`/parking-slots/${id}`, data);
export const deleteParkingSlot = (id: string) =>
  api.delete(`/parking-slots/${id}`);
