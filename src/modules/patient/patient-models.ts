export class Patient {
  id!: number;
  name: string;
  email: string;
  password: string;
  psychologistId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Omit<Patient, "id" | "createdAt" | "updatedAt">) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.psychologistId = data.psychologistId;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
