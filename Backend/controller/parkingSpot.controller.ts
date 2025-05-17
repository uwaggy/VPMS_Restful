import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();
class ParkingSlotController {
  // Create a parking slot
  async createParkingSlot(req: Request, res: Response) {
    try {
      const {
        code,
        zone,
        floor,
        type,
        size,   
        status,
        hourlyRate,
        isCovered,
        hasCharger,
      } = req.body;

      const parkingSlot = await prisma.parkingSlot.create({
        data: {
          code,
          zone,
          floor,
          type,
          size,
          status,
          hourlyRate,
          isCovered,
          hasCharger,
        },
      });

      return res.status(201).json({ success: true, data: parkingSlot });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Inside ParkingSlotController class
  async updateSpotStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updatedSlot = await prisma.parkingSlot.update({
        where: { id },
        data: { status },
      });

      return res.status(200).json({ success: true, data: updatedSlot });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Get all parking slots
  async getAllParkingSlots(req: Request, res: Response) {
    try {
      const parkingSlots = await prisma.parkingSlot.findMany();
      return res.status(200).json({ success: true, data: parkingSlots });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Update a parking slot
  async updateParkingSlot(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        code,
        zone,
        floor,
        type,
        size,
        status,
        hourlyRate,
        isCovered,
        hasCharger,
      } = req.body;

      const updatedSlot = await prisma.parkingSlot.update({
        where: { id },
        data: {
          code,
          zone,
          floor,
          type,
          size,
          status,
          hourlyRate,
          isCovered,
          hasCharger,
        },
      });

      return res.status(200).json({ success: true, data: updatedSlot });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }

  // Delete a parking slot
  async deleteParkingSlot(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.parkingSlot.delete({ where: { id } });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}

export default ParkingSlotController;