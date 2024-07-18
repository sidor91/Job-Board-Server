import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from 'src/@database/entities/company';

@Controller('company')
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
