import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { State } from '@prisma/client';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}
  @Get()
  async getAllStates(): Promise<State[]> {
    return this.stateService.getAllState();
  }
}
