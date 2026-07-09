/*
  Warnings:

  - The primary key for the `Plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `priceId` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pkey",
ADD COLUMN     "priceId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT;
DROP SEQUENCE "Plan_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Plan_id_key" ON "Plan"("id");
