import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { City } from '@prisma/client';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
  constructor(
    private prisma: PrismaService,
    private cacheService: CacheService,
  ) {}

  async getAllCitiesByStateId(stateId: number): Promise<City[]> {
    return this.cacheService.getCache<City[]>(String(stateId), () =>
      this.prisma.city.findMany({
        where: {
          state_id: Number(stateId),
        },
      }),
    );
  }

  async findCityById(cityId: number): Promise<City> {
    const city = await this.prisma.city.findFirst({
      where: {
        id: cityId,
      },
    });

    if (!city) {
      throw new NotFoundException(`CityId: ${cityId} Not Found`);
    }

    return city;
  }
}
