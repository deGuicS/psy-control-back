import knex, { Knex } from "knex";

export type UowRunner = <T>(
  runnable: (uow: Knex.Transaction) => Promise<T>,
) => Promise<T>;

export const initializeDB = async () =>
  knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
  }).on("query-error", (error) => {
    console.error(
      `[RB.REQUIRES_MANUAL_INTERVENTION] An error occurs trying around KNEX: ${error.message}`,
      error,
    );
  });

export async function uowRunner(
  runnable: (uox: Knex.Transaction) => Promise<any>,
) {
  return (await initializeDB()).transaction(async (uow) => runnable(uow));
}
