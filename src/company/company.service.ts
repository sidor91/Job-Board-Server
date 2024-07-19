import { Injectable, NotFoundException } from '@nestjs/common';
import { Company, CompanyRepository } from 'src/@database/entities/company'

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async getCompanyById(id: number): Promise<Company> {
     return await this.companyRepository.findOneById(id)
  }

  async getAllCompanies(): Promise<Company[]> {
    return await this.companyRepository.findAll();
  }

  async createCompany(company: Company): Promise<Company> {
    return await this.companyRepository.create(company);
  }

  async deleteCompany(id: number): Promise<void> {
    const company = await this.companyRepository.findOneById(id);
    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found.`);
    }
    await this.companyRepository.delete(id);
  }
}
