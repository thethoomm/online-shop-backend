import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 900_000_000,
    }),
  ],
  controllers: [CityController],
  providers: [CityService, PrismaService],
})
export class CityModule {}
