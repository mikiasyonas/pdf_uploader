-- CreateTable
CREATE TABLE "Pdf" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Pdf_pkey" PRIMARY KEY ("id")
);
