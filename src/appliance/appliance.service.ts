import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Appliance,
  CreateApplicationDto,
  ApplianceRepository
} from 'src/@database/entities/appliance'
import { JobRepository } from 'src/@database/entities/job';

@Injectable()
export class ApplianceService {
  constructor(
    private readonly applianceRepository: ApplianceRepository,
    private readonly jobRepository: JobRepository,
  ) {}

  async createAppliance(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Appliance> {
    const { userName, userEmail, applianceText, jobId } = createApplicationDto;

    const job = await this.jobRepository.findOneById(jobId);
    if (!job) {
      throw new NotFoundException(
        `Job with id ${createApplicationDto.jobId} does not exist.`,
      );
    }

    return await this.applianceRepository.create({
      userName,
      userEmail,
      applianceText,
      job,
    });
  }
}
