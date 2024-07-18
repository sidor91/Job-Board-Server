import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Job } from '../job/job.entity';

@Entity()
export class Appliance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  applianceText: string;

  @ManyToOne(() => Job, (job) => job.appliances)
  job: Job;
}
