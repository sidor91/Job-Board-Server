import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Job } from '../job/job.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Job, (job) => job.company)
  jobs: Job[];
}
