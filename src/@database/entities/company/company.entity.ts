import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Job } from '../job';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Job, (job) => job.company)
  jobs: Job[];
}
