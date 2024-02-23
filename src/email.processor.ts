import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Mail } from './interfaces/mail.interface';

@Processor('emailSender')
export class EmailProcessor {
  @Process()
  sendEmail(job: Job<Mail>) {}
}
