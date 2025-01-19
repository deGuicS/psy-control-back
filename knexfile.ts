import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

const dotenvConfigFileName = ".env";
const __dirname = path.resolve();

const pathname = path.resolve(__dirname, dotenvConfigFileName);

if (!fs.existsSync(pathname)) {
  throw new Error(`Create a ${dotenvConfigFileName} file and try again!`);
}

dotenv.config({ path: dotenvConfigFileName });

export default {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: { min: 2, max: 10 },
  migrations: {
    name: "migrations",
    directory: "src/shared/database/knex/migrations",
    extension: "ts",
  },
};
