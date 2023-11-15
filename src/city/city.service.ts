import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { City } from '@prisma/client';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  async getAllCitiesByStateId(stateId: number): Promise<City[]> {
    return this.prisma.city.findMany({
      where: {
        state_id: Number(stateId),
      },
    });
  }
}
