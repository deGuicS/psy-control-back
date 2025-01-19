import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import * as dotenv from "dotenv";
import fs from "fs";

const dotenvConfigFileName = ".env";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathname = resolve(__dirname, dotenvConfigFileName);

if (!fs.existsSync(pathname)) {
  throw new Error(`Create a ${dotenvConfigFileName} file and try again!`);
}

dotenv.config({ path: dotenvConfigFileName });

export default {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: { min: 1, max: 1 },
  migrations: {
    name: "migrations",
    directory: "src/shared/database/knex/migrations",
    extension: "ts",
  },
};
