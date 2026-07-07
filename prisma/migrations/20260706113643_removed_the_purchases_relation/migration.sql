/*
  Warnings:

  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_productId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_userId_fkey";

-- DropTable
DROP TABLE "Purchase";

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "credits" BIGINT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
