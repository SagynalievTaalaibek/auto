/*
  Warnings:

  - Added the required column `quantity` to the `inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inventory" ADD COLUMN     "quantity" INTEGER NOT NULL;
