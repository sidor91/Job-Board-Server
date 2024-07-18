import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job, CreateJobInDatabaseDto } from '.';

@Injectable()
export class JobRepository {
  constructor(
    @InjectRepository(Job)
    private readonly repository: Repository<Job>,
  ) {}

  async findOneById(id: number): Promise<Job> {
    return await this.repository.findOne({
      where: { id },
      relations: ['company', 'appliances'],
    });
  }

  async findAll(): Promise<Job[]> {
    return await this.repository.find({ relations: ['company', 'appliances'] });
  }

  async create(jobDto: CreateJobInDatabaseDto): Promise<Job> {
    return await this.repository.save(jobDto);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
