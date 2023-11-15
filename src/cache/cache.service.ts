import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheMenager: Cache) {}
  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const allData: T = await this.cacheMenager.get(key);

    if (allData) {
      return allData;
    }

    const cities: T = await functionRequest();

    await this.cacheMenager.set(key, cities);

    return cities;
  }
}
