/* eslint-disable */
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

const dotenvConfigFileName = ".env";
const pathname = path.resolve(__dirname, dotenvConfigFileName);

if (!fs.existsSync(pathname)) {
  throw new Error(`Create a ${dotenvConfigFileName} file and try again!`);
}

dotenv.config({ path: dotenvConfigFileName });

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: { min: 1, max: 1 },
  migrations: {
    name: "migrations",
    directory: "src/shared/database/knex/migrations",
    extension: "ts",
  },
};
