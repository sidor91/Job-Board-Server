import { Module } from '@nestjs/common';
import { ApplianceService } from './appliance.service';
import { ApplianceController } from './appliance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appliance, ApplianceRepository } from 'src/@database/entities/appliance';
import { JobModule } from 'src/job/job.module';

@Module({
  imports: [TypeOrmModule.forFeature([Appliance]), JobModule],
  providers: [ApplianceService, ApplianceRepository],
  controllers: [ApplianceController],
})
export class ApplianceModule {}
