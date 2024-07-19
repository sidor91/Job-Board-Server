import { Job } from '../job';

export class ApplicationDto {
  userName: string;
  userEmail: string;
  applianceText: string;
}

export class CreateApplicationDto extends ApplicationDto {
  jobId: number;
}

export class CreateApplicationInDatabaseDto extends ApplicationDto {
  job: Job;
}
