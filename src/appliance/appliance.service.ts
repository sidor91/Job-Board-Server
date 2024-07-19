import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Appliance,
  CreateApplicationDto,
  ApplianceRepository,
} from 'src/@database/entities/appliance';
import { JobRepository } from 'src/@database/entities/job';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class ApplianceService {
  constructor(
    private readonly applianceRepository: ApplianceRepository,
    private readonly jobRepository: JobRepository,
    private readonly mailerService: MailerService,
  ) {}

  async createAppliance(createApplicationDto: CreateApplicationDto) {
    const { userName, userEmail, applianceText, jobId } = createApplicationDto;

    const job = await this.jobRepository.findOneById(jobId);
    if (!job) {
      throw new NotFoundException(
        `Job with id ${createApplicationDto.jobId} does not exist.`,
      );
    }

    const application = await this.applianceRepository.create({
      userName,
      userEmail,
      applianceText,
      job,
    });

    await this.mailerService.sendMail({
      name: userName,
      from: userEmail,
      to: job.company.email,
      subject: `New application from ${userName}`,
      text: applianceText,
    });

    return { success: true, data: application };
  }
}
