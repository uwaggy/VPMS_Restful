import { Router, Request, Response } from "express";
import { VehicleController } from "../controller/vehicle.controller";
import { createVehicleSchema, updateVehicleSchema } from "../dto/vehicle.dto";
import { validate } from "../middleware/auth.middleware";

const router = Router();
const vehicleController = new VehicleController();

router.post(
  "/add",


  validate(createVehicleSchema),
  async (req: Request, res: Response) => {
    await vehicleController.createVehicle(req, res);
  }
);

router.get("/", async (req: Request, res: Response) => {
  await vehicleController.getAllVehicles(req, res);
});

router.get("/:id", async (req: Request, res: Response) => {
  await vehicleController.getVehicleById(req, res);
});

router.put( 
  "/:id",
  validate(updateVehicleSchema),
  async (req: Request, res: Response) => {
    await vehicleController.updateVehicle(req, res);
  }
);

router.delete("/:id", async (req: Request, res: Response) => {
  await vehicleController.deleteVehicle(req, res);
});

export default router;
