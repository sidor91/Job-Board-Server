import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company, CompanyRepository } from 'src/@database/entities/company';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyService, CompanyRepository],
  controllers: [CompanyController],
  exports: [CompanyService, CompanyRepository],
})
export class CompanyModule {}
