/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
