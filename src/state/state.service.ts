import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { State } from '@prisma/client';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}
  async getAllState(): Promise<State[]> {
    return this.prisma.state.findMany();
  }
}
