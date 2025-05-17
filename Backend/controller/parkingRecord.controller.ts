import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { ParkingStatus } from "../generated/prisma";

const prisma = new PrismaClient();
const HOURLY_RATE = 2.0;

export class ParkingRecordController {
  // Check-in a vehicle
  async checkIn(req: Request, res: Response) {
    try {
      const { vehicleId, parkingSpotId, slotId } = req.body;

      // Check if parking spot is available
      const parkingSpot = await prisma.parkingSlot.findUnique({
        where: { id: parkingSpotId },
      });

      if (!parkingSpot || parkingSpot.status !== ParkingStatus.AVAILABLE) {
        return res.status(400).json({
          success: false,
          message: "Parking spot is not available",
        });
      }

      // Start a transaction to ensure data consistency
      const [parkingRecord] = await prisma.$transaction([
        // Create parking record
        prisma.parkingRecord.create({
          data: {
            vehicleId,
            slotId,
          },
          include: {
            vehicle: true,
            parkingSpot: true,
          },
        }),
        // Update parking spot status
        prisma.parkingSlot.update({
          where: { id: parkingSpotId },
          data: { status: ParkingStatus.OCCUPIED },
        }),
      ]);

      return res.status(201).json({
        success: true,
        data: parkingRecord,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Check-out a vehicle
  async checkOut(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const parkingRecord = await prisma.parkingRecord.findUnique({
        where: { id },
        include: {
          parkingSpot: true,
        },
      });

      if (!parkingRecord) {
        return res.status(404).json({
          success: false,
          message: "Parking record not found",
        });
      }

      if (parkingRecord.checkOut) {
        return res.status(400).json({
          success: false,
          message: "Vehicle has already been checked out",
        });
      }

      const checkOutTime = new Date();
      const parkingDuration =
        checkOutTime.getTime() - parkingRecord.checkIn.getTime();
      const parkingHours = Math.ceil(parkingDuration / (1000 * 60 * 60));
      const fee = parkingHours * HOURLY_RATE;

      // Start a transaction to ensure data consistency
      const [updatedRecord] = await prisma.$transaction([
        // Update parking record with check-out time and amountPaid
        prisma.parkingRecord.update({
          where: { id },
          data: {
            checkOut: checkOutTime,
            amountPaid: fee, // fee is assigned here correctly
          },
          include: {
            vehicle: true,
            parkingSpot: true,
          },
        }),
        // Update parking spot status
        prisma.parkingSlot.update({
          where: { id: parkingRecord.slotId },
          data: { status: ParkingStatus.AVAILABLE },
        }),
      ]);

      return res.status(200).json({
        success: true,
        data: updatedRecord,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get parking record by ID
  async getParkingRecord(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const parkingRecord = await prisma.parkingRecord.findUnique({
        where: { id },
        include: {
          vehicle: true,
          parkingSpot: true,
        },
      });

      if (!parkingRecord) {
        return res.status(404).json({
          success: false,
          message: "Parking record not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: parkingRecord,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get all active parking records
  async getActiveParkingRecords(req: Request, res: Response) {
    try {
      const parkingRecords = await prisma.parkingRecord.findMany({
        where: {
          checkOut: null,
        },
        include: {
          vehicle: true,
          parkingSpot: true,
        },
      });

      return res.status(200).json({
        success: true,
        data: parkingRecords,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}
