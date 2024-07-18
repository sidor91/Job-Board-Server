import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobRepository {
  constructor(
    @InjectRepository(Job)
    private readonly repository: Repository<Job>,
  ) {}

  async findAll(): Promise<Job[]> {
    return await this.repository.find({ relations: ['company', 'appliances'] });
  }

  async create(job: Job): Promise<Job> {
    return await this.repository.save(job);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
