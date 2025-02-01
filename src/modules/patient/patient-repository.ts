import { uowRunner } from "@/shared/database/knex";
import { IPatientRepository } from "./patient-interface";
import { Patient } from "./patient-models";

export class PatientRepository implements IPatientRepository {
  async create(patient: Patient): Promise<Patient> {
    return await uowRunner(async (uow) => {
      const [createdPatient] = await uow("patients")
        .insert(patient)
        .returning("*");
      return createdPatient;
    });
  }

  async findAllPatients(): Promise<Patient[]> {
    return await uowRunner(async (uow) => {
      const allPatients = await uow("patients").select().returning("*");
      return allPatients;
    });
  }

  async findById(id: number): Promise<Patient | null> {
    return await uowRunner(async (uow) => {
      const foundPatient = await uow("patients")
        .select()
        .where({ id: id })
        .first();

      if (!foundPatient) {
        return null;
      }

      return foundPatient;
    });
  }

  async update(id: number, patient: Partial<Patient>): Promise<Patient | null> {
    return await uowRunner(async (uow) => {
      const [updatedPatient] = await uow("patients")
        .where({ id: id })
        .update(patient)
        .returning("*");

      if (!updatedPatient) {
        return null;
      }

      return updatedPatient;
    });
  }

  async delete(id: number): Promise<boolean> {
    return await uowRunner(async (uow) => {
      const deletedPatient = await uow("patients").where({ id: id }).del();
      if (deletedPatient > 0) {
        return true;
      } else {
        return false;
      }
    });
  }
}
