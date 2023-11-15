import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;
}
