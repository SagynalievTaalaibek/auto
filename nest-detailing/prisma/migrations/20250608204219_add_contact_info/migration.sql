-- CreateTable
CREATE TABLE "contact_info" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sub_title" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "working_hours" TEXT NOT NULL,
    "telegramUrl" TEXT,
    "whatsappUrl" TEXT,
    "instagramUrl" TEXT,
    "map_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_info_pkey" PRIMARY KEY ("id")
);
