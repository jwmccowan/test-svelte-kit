/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "name" VARCHAR(255);

-- AlterTable
ALTER TABLE "user" DROP COLUMN "name";
