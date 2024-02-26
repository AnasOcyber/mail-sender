import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Mail } from './interfaces/mail.interface';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('emailList')
export class EmailConsumer {
  constructor(private readonly mailerService: MailerService) {}

  @Process()
  async sendEmail({ data }: Job<Mail>) {
    console.log('Sending email');
    await this.mailerService.sendMail({
      ...data,
      subject: 'Hello World',
      template: 'src/templates/email',
      text: 'Hello World',
    });
    console.log('Email sent');
  }
}
