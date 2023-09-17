/*
  Warnings:

  - You are about to drop the column `catetoryId` on the `books` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_catetoryId_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "catetoryId",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "publicationDate" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
