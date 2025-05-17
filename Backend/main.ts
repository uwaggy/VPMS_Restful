import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./Docs/swagger.json";
import prismaClient from "./prisma/prisma-client";
import { errorHandler } from "./middleware/errorHandler";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import vehicleRoute from "./routes/vehicle.routes";
import parkingSpotRoute from "./routes/parkingSpot.routes";
import parkingRecordRoute from "./routes/parkingRecord.routes";

dotenv.config();

const app =   express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


app.use(express.json());

// API routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/vehicles", vehicleRoute);
app.use("/api/v1/parking-spots", parkingSpotRoute);
app.use("/api/v1/parking-records", parkingRecordRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  prismaClient
    .$connect()
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
    })
    .catch((err) => {
      console.log("Error connecting to database:", err);
    });
});
