import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Company } from '../company';
import { Appliance } from '../appliance';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Company, (company) => company.jobs, { onDelete: 'CASCADE' })
  company: Company;

  @OneToMany(() => Appliance, (appliance) => appliance.job)
  appliances: Appliance[];
}
