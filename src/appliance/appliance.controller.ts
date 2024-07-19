import { Body, Controller, Post } from '@nestjs/common';
import { ApplianceService } from './appliance.service';
import { Appliance, CreateApplicationDto } from 'src/@database/entities/appliance';

@Controller('appliance')
export class ApplianceController {
  constructor(private readonly applianceService: ApplianceService) {}

  @Post()
  async createAppliance(
    @Body() createApplicationDto: CreateApplicationDto,
  ) {
    return await this.applianceService.createAppliance(createApplicationDto);
  }
}
