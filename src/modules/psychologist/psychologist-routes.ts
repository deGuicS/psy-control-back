import { FastifyInstance } from "fastify";
import { PsychologistController } from "./psychologist-controller";

const psychologistController = new PsychologistController();
export default function psychologistRoutes(fastify: FastifyInstance) {
  fastify.post("/psychologist", psychologistController.create);
  fastify.get("/psychologist/:id", psychologistController.findById);
  fastify.put("/psychologist/:id", psychologistController.update);
  fastify.delete("/psychologist/:id", psychologistController.delete);
}
