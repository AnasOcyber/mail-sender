import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Mail } from './interfaces/mail.interface';

@Processor('emailList')
export class EmailConsumer {
  @Process()
  async sendEmail(job: Job<Mail>) {
    console.log(job.queue);
  }
}
