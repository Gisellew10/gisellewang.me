/*
  Warnings:

  - You are about to drop the column `title` on the `WorkExperience` table. All the data in the column will be lost.
  - Added the required column `company` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkExperience" DROP COLUMN "title",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "skills" TEXT NOT NULL;
