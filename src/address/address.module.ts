import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [UserModule, CityModule],
  controllers: [AddressController],
  providers: [AddressService, PrismaService],
})
export class AddressModule {}
