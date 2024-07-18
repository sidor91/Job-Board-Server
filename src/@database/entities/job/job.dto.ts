import { Company } from '../company';

export class JobDto {
  name: string;
  description: string;
}

export class CreateJobDto extends JobDto {
  companyId: number;
}

export class CreateJobInDatabaseDto extends JobDto {
  company: Company;
}
