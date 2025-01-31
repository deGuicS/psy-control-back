import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("psychologists", (table) => {
    table.string("name").notNullable();
  });
}

export async function down(): Promise<void> {
  throw new Error("Error");
}
