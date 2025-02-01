import { IPsychologistRepository } from "./psychologist-interface";
import { Psychologist } from "./psychologist-models";

export class PsychologistService {
  constructor(private psychologistRepository: IPsychologistRepository) {}

  async createPsychologist(data: Psychologist) {
    return this.psychologistRepository.create(data);
  }

  async findAllPsychologists() {
    return this.psychologistRepository.findAllPsychologists();
  }

  async findPsychologistById(id: number) {
    return this.psychologistRepository.findById(id);
  }

  async updatePsychologist(id: number, data: Partial<Psychologist>) {
    return this.psychologistRepository.update(id, data);
  }

  async deletePsychologist(id: number) {
    return this.psychologistRepository.delete(id);
  }
}
