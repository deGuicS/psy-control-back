import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

let dotenvConfigFileName: string;

if (process.env.NODE_ENV === "test") {
  dotenvConfigFileName = ".env.testing";
} else {
  dotenvConfigFileName = ".env";
}

const pathname = path.resolve(process.cwd(), dotenvConfigFileName);

if (!fs.existsSync(pathname)) {
  throw new Error(`Create a ${dotenvConfigFileName} file and try again!`);
}

dotenv.config({ path: pathname });

const config = {
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

export default config;
