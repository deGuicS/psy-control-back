import { FastifyInstance } from "fastify";
import { PatientController } from "./patient-controller";

const patientController = new PatientController();
export default function patientRoutes(fastify: FastifyInstance) {
  fastify.post("/patient", patientController.create);
  fastify.get("/patient", patientController.findAll);
  fastify.get("/patient/:id", patientController.findById);
  fastify.put("/patient/:id", patientController.update);
  fastify.delete("/patient/:id", patientController.delete);
}
