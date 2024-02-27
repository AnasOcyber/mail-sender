import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Mail } from './interfaces/mail.interface';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('emailList')
export class EmailConsumer {
  constructor(private readonly mailService: MailerService) {}

  @Process()
  async sendEmail({ data }: Job<Mail>) {
    console.log('Sending email');

    await this.mailService.sendMail({
      ...data,
      subject: 'Welcome',
      template: 'email',
      context: data,
    });

    console.log('Email sent to', data.to);
  }
}
