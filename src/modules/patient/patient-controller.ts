import { STATUS_CODE } from "@/shared/constants/status-code";
import { PatientRepository } from "./patient-repository";
import { PatientService } from "./patient-service";

const repository = new PatientRepository();
const service = new PatientService(repository);

export class PatientController {
  async create(req: any, res: any) {
    const createdPatient = await service.createPatient(req.body);
    return res.status(STATUS_CODE.CREATED).send(createdPatient);
  }

  async findAll(req: any, res: any) {
    const allPatients = await service.findAllPatients();
    return res.status(STATUS_CODE.OK).send(allPatients);
  }

  async findById(req: any, res: any) {
    const foundPatient = await service.findPatientById(req.params.id);
    return res.status(STATUS_CODE.OK).send(foundPatient);
  }

  async update(req: any, res: any) {
    const updatedPatient = await service.updatePatient(req.params.id, req.body);
    return res.status(STATUS_CODE.OK).send(updatedPatient);
  }

  async delete(req: any, res: any) {
    const deletedPatient = await service.deletePatient(req.params.id);
    return res.status(STATUS_CODE.DELETED).send(deletedPatient);
  }
}
