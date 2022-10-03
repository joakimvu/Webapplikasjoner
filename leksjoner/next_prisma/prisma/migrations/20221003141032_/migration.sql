-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feed" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "authorId" TEXT,
    CONSTRAINT "feed_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_feed" ("authorId", "id", "name", "url") SELECT "authorId", "id", "name", "url" FROM "feed";
DROP TABLE "feed";
ALTER TABLE "new_feed" RENAME TO "feed";
CREATE UNIQUE INDEX "feed_url_key" ON "feed"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
