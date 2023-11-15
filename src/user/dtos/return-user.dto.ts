import { User } from '@prisma/client';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.cpf = user.cpf;
    this.phone = user.phone;
  }
}
