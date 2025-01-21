import { initializeDB } from "@/shared/database/knex";

export const lambdaHandler = async () => {
  const db = await initializeDB();
  try {
    console.info("run migrations");
    await db.migrate.latest({
      directory: "./shared/database/knex/migrations",
      loadExtensions: [".js"],
    });
    console.info("migrations finished");
  } catch (error: any) {
    throw new Error(error);
  } finally {
    await db.destroy();
  }
};
