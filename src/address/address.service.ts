import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { CreateAddressDto } from './dtos/create-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    userId: number,
  ): Promise<Address> {
    return this.prisma.address.create({
      data: {
        complement: createAddressDto?.complement,
        number: createAddressDto.number,
        city_id: createAddressDto.cityId,
        cep: createAddressDto.cep,
        user_id: Number(userId),
      },
    });
  }
}
