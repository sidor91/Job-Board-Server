import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './@database/database.config';
import { CompanyModule } from './company/company.module';
import { JobModule } from './job/job.module';
import { ApplianceModule } from './appliance/appliance.module';
import { MailerService } from './mailer/mailer.service';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CompanyModule,
    JobModule,
    ApplianceModule,
    MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailerService],
})
export class AppModule {}
