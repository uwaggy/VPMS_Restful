import { Router, Request, Response } from 'express';
import { ParkingRecordController } from '../controller/parkingRecord.controller';
import { checkAdmin } from "../middleware/auth.middleware";
import { authenticate } from "../controller/user.controller";


const router = Router();
const parkingRecordController = new ParkingRecordController();

// Parking record routes
router.post('/check-in', authenticate, checkAdmin, async (req: Request, res: Response) => {
  await parkingRecordController.checkIn(req, res);
});

router.put(
  "/:id/check-out",
  authenticate,
  checkAdmin,
  async (req: Request, res: Response) => {
    await parkingRecordController.checkOut(req, res);
  }
);

router.get(
  "/:id",
  authenticate,
  checkAdmin,
  async (req: Request, res: Response) => {
    await parkingRecordController.getParkingRecord(req, res);
  }
);

router.get(
  "/active",
  authenticate,
  checkAdmin,
  async (req: Request, res: Response) => {
    await parkingRecordController.getActiveParkingRecords(req, res);
  }
);

export default router; 