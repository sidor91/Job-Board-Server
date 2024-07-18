import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appliance, CreateApplicationInDatabaseDto } from './';

@Injectable()
export class ApplianceRepository {
  constructor(
    @InjectRepository(Appliance)
    private readonly repository: Repository<Appliance>,
  ) {}

  async create(
    createApplicationDto: CreateApplicationInDatabaseDto,
  ): Promise<Appliance> {
    return await this.repository.save(createApplicationDto);
  }
}
