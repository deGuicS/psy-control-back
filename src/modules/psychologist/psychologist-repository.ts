import { uowRunner } from "@/shared/database/knex";
import { IPsychologistRepository } from "./psychologist-interface";
import { Psychologist } from "./psychologist-models";

export class PsychologistRepository implements IPsychologistRepository {
  async create(psychologist: Psychologist): Promise<Psychologist> {
    return await uowRunner(async (uow) => {
      const [createdPsychologist] = await uow("psychologists")
        .insert(psychologist)
        .returning("*");
      return createdPsychologist;
    });
  }

  async findById(id: number): Promise<Psychologist | null> {
    return await uowRunner(async (uow) => {
      const foundPsychologist = await uow("psychologists")
        .select()
        .where({ id: id })
        .first();

      console.log(foundPsychologist.id);

      if (!foundPsychologist) {
        return null;
      }

      return foundPsychologist;
    });
  }

  async update(
    id: number,
    psychologist: Partial<Psychologist>,
  ): Promise<Psychologist | null> {
    return await uowRunner(async (uow) => {
      const [updatedPsychologist] = await uow("psychologists")
        .where({ id: id })
        .update(psychologist)
        .returning("*");

      if (!updatedPsychologist) {
        return null;
      }

      return updatedPsychologist;
    });
  }

  async delete(id: number): Promise<boolean> {
    return await uowRunner(async (uow) => {
      const deletePsychologist = await uow("psychologists")
        .where({ id: id })
        .del();
      if (deletePsychologist > 0) {
        return true;
      } else {
        return false;
      }
    });
  }
}
