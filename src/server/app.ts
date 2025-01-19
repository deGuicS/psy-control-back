import fastify from "fastify";
import { routes } from "./routes";

export const app = fastify();
app.register(routes);

app.listen({ port: 3000 }, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("Server running at 3000");
});
