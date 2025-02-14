import fastify from "fastify";
import { routes } from "./routes";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error(
    "[SERVER.ERROR] DATABASE_URL is not defined in the environment variables.",
  );
  process.exit(1);
}

const App = fastify();
App.register(routes);

App.listen({ port: 3000 }, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("Server running at 3000");
});

export default App;
