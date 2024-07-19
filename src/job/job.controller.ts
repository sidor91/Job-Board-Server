import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from 'src/@database/entities/job';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async getAllJobs() {
    return await this.jobService.getAllJobs();
  }

  @Post()
  async createJob(@Body() createJobDto: CreateJobDto) {
    return await this.jobService.createJob(createJobDto);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: number) {
    return await this.jobService.deleteJob(id);
  }
}
