import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { CreateAddressDto } from './dtos/create-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private cityService: CityService,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    userId: number,
  ): Promise<Address> {
    await this.userService.findUserById(userId);
    await this.cityService.findCityById(createAddressDto.cityId);

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
