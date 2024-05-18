-- CreateTable
CREATE TABLE "Assignor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "document" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Receivable" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL,
    "emissionDate" DATETIME,
    "assignorId" TEXT,
    CONSTRAINT "Receivable_assignorId_fkey" FOREIGN KEY ("assignorId") REFERENCES "Assignor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
