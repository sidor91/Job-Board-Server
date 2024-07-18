import { Injectable, NotFoundException } from '@nestjs/common';
import { Job, JobRepository } from 'src/@database/entities/job';
import { CompanyRepository } from 'src/@database/entities/company';
import { CreateJobDto } from 'src/@database/entities/job';

@Injectable()
export class JobService {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async getAllJobs(): Promise<Job[]> {
    return await this.jobRepository.findAll();
  }

  async createJob(createJobDto: CreateJobDto): Promise<Job> {
    const { name, description, companyId } = createJobDto;
    const company = await this.companyRepository.findOneById(companyId);
    if (!company) {
      throw new NotFoundException(
        `Company with id ${createJobDto.companyId} does not exist.`,
      );
    }

    return await this.jobRepository.create({ name, description, company });
  }

  async deleteJob(id: number): Promise<void> {
    const job = await this.jobRepository.findOneById(id);
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found.`);
    }
    await this.jobRepository.delete(id);
  }
}
