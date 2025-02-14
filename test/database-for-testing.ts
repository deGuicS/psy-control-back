import { initializeDB } from "@src/shared/database/knex";
import { Knex } from "knex";

export class DatabaseForTesting {
  public static db: Knex | null = null;

  static async get() {
    if (!DatabaseForTesting.db) {
      DatabaseForTesting.db = await initializeDB();
    }

    return DatabaseForTesting.db;
  }

  static async destroy() {
    if (DatabaseForTesting.db) {
      await DatabaseForTesting.db.destroy();
      DatabaseForTesting.db = null;
    }
  }
}
