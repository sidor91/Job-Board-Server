import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from 'src/@database/entities/job';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('all')
  async getAllJobs(
    @Query('page') page = 1,
    @Query('limit') limit = 5,
  ) {
    return await this.jobService.getAllJobs({ page: Number(page), limit: Number(limit) });
  }

  @Post()
  async createJob(@Body() createJobDto: CreateJobDto) {
    return await this.jobService.createJob(createJobDto);
  }

  @Get(':id')
  async getJobById(@Param('id') id: number) {
    return await this.jobService.getJobById(id);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: number) {
    return await this.jobService.deleteJob(id);
  }
}
