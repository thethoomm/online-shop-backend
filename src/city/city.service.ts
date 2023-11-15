import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { City } from '@prisma/client';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CityService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheMenager: Cache,
  ) {}
  async getAllCitiesByStateId(stateId: number): Promise<City[]> {
    const citiesCache: City[] = await this.cacheMenager.get(String(stateId));

    if (citiesCache) {
      return citiesCache;
    }

    const cities = await this.prisma.city.findMany({
      where: {
        state_id: Number(stateId),
      },
    });

    await this.cacheMenager.set(String(stateId), cities);

    return cities;
  }
}
