/*
  Warnings:

  - The primary key for the `Plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `price` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - Added the required column `priceId` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_pkey",
DROP COLUMN "price",
ADD COLUMN     "priceId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Plan_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Plan_id_seq";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price",
ADD COLUMN     "priceId" TEXT NOT NULL;
