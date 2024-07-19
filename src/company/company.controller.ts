import { Body, Controller, Delete, Get, Param, Post, UseFilters } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from 'src/@database/entities/company';
import { UniqueConstraintFilter } from 'src/utils/filters/unique-constraint.filter';

@Controller('company')
@UseFilters(UniqueConstraintFilter)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAllCompanies(): Promise<Company[]> {
    return await this.companyService.getAllCompanies();
  }

  @Post()
  async createCompany(@Body() company: Company): Promise<Company> {
    return await this.companyService.createCompany(company);
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: number): Promise<void> {
    await this.companyService.deleteCompany(id);
  }
}
