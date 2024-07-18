import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private readonly repository: Repository<Company>,
  ) {}

  async findOneById(id: number): Promise<Company> {
    return await this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<Company[]> {
    return await this.repository.find({
      relations: ['jobs', 'jobs.appliances'],
    });
  }

  async create(company: Company): Promise<Company> {
    return await this.repository.save(company);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}