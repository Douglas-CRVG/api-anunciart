-- CreateTable
CREATE TABLE "videos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "videos_name_key" ON "videos"("name");

-- CreateIndex
CREATE UNIQUE INDEX "videos_link_key" ON "videos"("link");
