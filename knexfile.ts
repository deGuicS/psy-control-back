import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

let dotenvConfigFileName: string;

if (process.env.NODE_ENV === "test") {
  dotenvConfigFileName = ".env.testing";
} else {
  dotenvConfigFileName = ".env";
}
const __dirname = path.resolve();

const pathname = path.resolve(__dirname, dotenvConfigFileName);

if (!fs.existsSync(pathname)) {
  throw new Error(`Create a ${dotenvConfigFileName} file and try again!`);
}

dotenv.config({ path: dotenvConfigFileName });

export default {
  client: "pg",
  connection: process.env.DATABASE_URL,
  debug: true,
  pool: { min: 1, max: 1 },
  migrations: {
    name: "migrations",
    directory: "src/shared/database/knex/migrations",
    extension: "ts",
  },
};

export {};
