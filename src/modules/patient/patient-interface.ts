import { Patient } from "./patient-models";

export interface IPatientRepository {
  create(patient: Patient): Promise<Patient>;
  findAllPatients(): Promise<Patient[]>;
  findById(id: number): Promise<Patient | null>;
  update(id: number, patient: Partial<Patient>): Promise<Patient | null>;
  delete(id: number): Promise<boolean>;
}
