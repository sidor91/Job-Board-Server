import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './@database/database.config';
import { CompanyModule } from './company/company.module';
import { JobModule } from './job/job.module';
import { ApplianceModule } from './appliance/appliance.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CompanyModule, JobModule, ApplianceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
