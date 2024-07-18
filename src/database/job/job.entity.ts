import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Company } from '../company/company.entity';
import { Appliance } from '../appliance/appliance.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Company, (company) => company.jobs)
  company: Company;

  @OneToMany(() => Appliance, (appliance) => appliance.job)
  appliances: Appliance[];
}
