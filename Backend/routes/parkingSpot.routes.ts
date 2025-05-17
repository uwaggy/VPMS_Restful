import { Router, Request, Response } from "express";
import ParkingSpotController from "../controller/parkingSpot.controller";
import { checkAdmin } from "../middleware/auth.middleware";
import { authenticate } from "../controller/user.controller";

const router = Router();
const parkingSpotController = new ParkingSpotController();

// Protected routes: Admin only
router.post("/add",   async (req: Request, res: Response) => {
  await parkingSpotController.createParkingSlot(req, res);
});

router.get("/", authenticate, checkAdmin, async (req: Request, res: Response) => {
  await parkingSpotController.getAllParkingSlots(req, res);
});

router.get(
  "/available",
  authenticate,
  checkAdmin,
  async (req: Request, res: Response) => {
    await parkingSpotController.updateParkingSlot(req, res);
  }
);

router.put(
  "/:id/status",
  authenticate,
  checkAdmin,
  async (req: Request, res: Response) => {
    await parkingSpotController.updateSpotStatus(req, res);
  }
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  async (req: Request, res: Response) => {
    await parkingSpotController.deleteParkingSlot(req, res);
  }
);

export default router;
