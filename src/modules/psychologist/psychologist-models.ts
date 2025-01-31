export class Psychologist {
  id!: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Omit<Psychologist, "id" | "createdAt" | "updatedAt">) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
