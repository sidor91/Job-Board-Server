import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Job, JobRepository } from 'src/@database/entities/job';
import { CompanyRepository } from 'src/@database/entities/company';
import { CreateJobDto } from 'src/@database/entities/job';

@Injectable()
export class JobService {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly companyRepository: CompanyRepository,
  ) {}

  async getAllJobs() {
    const data = await this.jobRepository.findAll();
    return { success: true, data };
  }

  async createJob(createJobDto: CreateJobDto) {
   const { name, description, companyId } = createJobDto;
   const company = await this.companyRepository.findOneById(companyId);
   if (!company) {
     throw new NotFoundException(
       `Company with id ${createJobDto.companyId} does not exist.`,
     );
   }

   const data = await this.jobRepository.create({
     name,
     description,
     company,
   });
   return { success: true, data };
  }

  async deleteJob(id: number) {
    const job = await this.jobRepository.findOneById(id);
    if (!job) {
      throw new NotFoundException(`Job with id ${id} not found.`);
    }
    await this.jobRepository.delete(id);
    return { success: true };
  }
}
