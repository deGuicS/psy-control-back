import { Psychologist } from "./psychologist-models";

export interface IPsychologistRepository {
  create(psychologist: Psychologist): Promise<Psychologist>;
  findById(id: number): Promise<Psychologist | null>;
  update(
    id: number,
    psychologist: Partial<Psychologist>,
  ): Promise<Psychologist | null>;
  delete(id: number): Promise<boolean>;
}
