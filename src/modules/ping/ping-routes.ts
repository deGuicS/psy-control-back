import { FastifyInstance } from "fastify";
import pinghandler from "./ping-handler";

export default function pingRoutes(fastify: FastifyInstance) {
  fastify.get("/ping", {}, pinghandler);
}
