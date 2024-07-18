import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from 'src/company/company.module';
import { Job, JobRepository } from 'src/@database/entities/job';

@Module({
  imports: [TypeOrmModule.forFeature([Job]), CompanyModule],
  providers: [JobService, JobRepository],
  controllers: [JobController],
  exports: [JobService, JobRepository],
})
export class JobModule {}
