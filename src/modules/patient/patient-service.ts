import { IPatientRepository } from "./patient-interface";
import { Patient } from "./patient-models";

export class PatientService {
  constructor(private patientRepository: IPatientRepository) {}

  async createPatient(data: Patient) {
    return this.patientRepository.create(data);
  }

  async findAllPatients() {
    return this.patientRepository.findAllPatients();
  }

  async findPatientById(id: number) {
    return this.patientRepository.findById(id);
  }

  async updatePatient(id: number, data: Patient) {
    return this.patientRepository.update(id, data);
  }

  async deletePatient(id: number) {
    return this.patientRepository.delete(id);
  }
}
