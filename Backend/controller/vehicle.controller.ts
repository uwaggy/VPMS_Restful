import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { VehicleType } from "../generated/prisma";
import { createVehicleSchema } from "../dto/vehicle.dto";

const prisma = new PrismaClient();

export class VehicleController {
  async createVehicle(req: Request, res: Response) {
    try {
      const parsed = createVehicleSchema.safeParse(req.body);

      if (!parsed.success) {
        const formattedErrors = parsed.error.format();
        return res.status(400).json({
          message: "Invalid vehicle data",
          errors: formattedErrors,
        });
      }

      const {
        plateNumber,
        type,
        brand,
        size,
        made,
        model,
        color,
        year,
        ownerId,
      } = parsed.data;

      const vehicle = await prisma.vehicle.create({
        data: {
          plateNumber,
          type,
          brand,
          size,
          made,
          model,
          color,
          year,
          ownerId,
        },
        include: {
          owner: true,
        },
      });

      return res.status(201).json({
        success: true,
        data: vehicle,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }

  async getAllVehicles(req: Request, res: Response) {
    try {
      const vehicles = await prisma.vehicle.findMany({
        include: {
          owner: true,
        },
      });

      return res.status(200).json({
        success: true,
        data: vehicles,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }

  async getVehicleById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const vehicle = await prisma.vehicle.findUnique({
        where: { id },
        include: {
          owner: true,
          parkingRecords: {
            include: {
              parkingSpot: true,
            },
          },
        },
      });

      if (!vehicle) {
        return res.status(404).json({
          success: false,
          message: "Vehicle not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: vehicle,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }

  async updateVehicle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { plateNumber, type, brand, size, made, model, color } = req.body;

      const vehicle = await prisma.vehicle.update({
        where: { id },
        data: {
          plateNumber,
          type: type as VehicleType,
          brand,
          size,
          made,
          model,
          color,
        },
        include: {
          owner: true,
        },
      });

      return res.status(200).json({
        success: true,
        data: vehicle,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }

  async deleteVehicle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await prisma.vehicle.delete({
        where: { id },
      });

      return res.status(200).json({
        success: true,
        message: "Vehicle deleted successfully",
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
  }
}
