-- AlterTable
ALTER TABLE "parking_records" ADD COLUMN     "parking_spot_id_prisma" TEXT;

-- AlterTable
ALTER TABLE "vehicles" ADD COLUMN     "brand" TEXT;

-- AddForeignKey
ALTER TABLE "parking_records" ADD CONSTRAINT "parking_records_parking_spot_id_prisma_fkey" FOREIGN KEY ("parking_spot_id_prisma") REFERENCES "parking_slots"("id") ON DELETE SET NULL ON UPDATE CASCADE;
