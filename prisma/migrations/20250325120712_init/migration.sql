-- CreateTable
CREATE TABLE "SolanaUpdate" (
    "id" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SolanaUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SolanaUpdate_account_key" ON "SolanaUpdate"("account");
