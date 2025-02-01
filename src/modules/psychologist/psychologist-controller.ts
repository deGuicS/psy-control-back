import { STATUS_CODE } from "@/shared/constants/status-code";
import { PsychologistRepository } from "./psychologist-repository";
import { PsychologistService } from "./psychologist-service";

const repository = new PsychologistRepository();
const service = new PsychologistService(repository);

export class PsychologistController {
  async create(req: any, res: any) {
    const createdPsychologist = await service.createPsychologist(req.body);
    return res.status(STATUS_CODE.CREATED).send(createdPsychologist);
  }

  async findAll(res: any) {
    const allPsychologists = await service.findAllPsychologists();
    return res.status(STATUS_CODE.OK).send(allPsychologists);
  }

  async findById(req: any, res: any) {
    const psychologistId = await service.findPsychologistById(req.params.id);
    return res.status(STATUS_CODE.OK).send(psychologistId);
  }

  async update(req: any, res: any) {
    const updatedPsychologist = await service.updatePsychologist(
      req.params.id,
      req.body,
    );
    return res.status(STATUS_CODE.OK).send(updatedPsychologist);
  }

  async delete(req: any, res: any) {
    const deletedPsychologist = await service.deletePsychologist(req.params.id);
    return res.status(STATUS_CODE.DELETED).send(deletedPsychologist);
  }
}
