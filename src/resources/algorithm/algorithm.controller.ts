import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlgorithmService } from './algorithm.service';
import { CreateAlgorithmDto } from './dto/create-algorithm.dto';
import { UpdateAlgorithmDto } from './dto/update-algorithm.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('algorithm')
@Controller('algorithm')
export class AlgorithmController {
  constructor(private readonly algorithmService: AlgorithmService) { }

  @Get('athleteId/:email')
  find(@Param('email') email: string) {
    return this.algorithmService.findAthlete(email);
  }

  @Patch('start-algorithm/:athleteId')
  update(@Param('athleteId') athleteId: string) {
    return this.algorithmService.update(athleteId);
  }

  @Delete('schedule/:athleteId')
  remove(@Param('athleteId') athleteId: string) {
    return this.algorithmService.remove(athleteId);
  }
}
