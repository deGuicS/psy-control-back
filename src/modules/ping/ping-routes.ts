import { FastifyInstance } from "fastify";
import pingController from "./ping-controller";

export default function pingRoutes(fastify: FastifyInstance) {
  fastify.get("/ping", {}, pingController);
}
