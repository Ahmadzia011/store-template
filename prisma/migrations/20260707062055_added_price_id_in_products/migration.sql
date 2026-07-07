/*
  Warnings:

  - The primary key for the `Plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `priceId` on the `Plan` table. All the data in the column will be lost.
  - The `id` column on the `Plan` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `price` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pkey",
DROP COLUMN "priceId",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Plan_pkey" PRIMARY KEY ("id");
