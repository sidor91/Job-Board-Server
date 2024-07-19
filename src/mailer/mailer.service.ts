import { Injectable, Logger } from '@nestjs/common';
import { transporter } from './mailer.config';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  async sendMail(dto: SendMailDto) {
    const { name, from, to, subject, text} = dto;
    try {
      const info = await transporter.sendMail({
        from: `${name} <${from}>`,
        to,
        subject,
        text,
      });

      this.logger.log(`Message sent: ${info.messageId}`);
    } catch (error) {
      this.logger.error(`Error sending email: ${error.message}`);
    }
  }
}
