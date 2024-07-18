import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto, Job } from 'src/@database/entities/job';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async getAllJobs(): Promise<Job[]> {
    return await this.jobService.getAllJobs();
  }

  @Post()
  async createJob(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return await this.jobService.createJob(createJobDto);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: number): Promise<void> {
    await this.jobService.deleteJob(id);
  }
}
