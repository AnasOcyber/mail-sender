import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Mail } from './interfaces/mail.interface';

@Processor('emailList')
export class EmailConsumer {
  @Process()
  async sendEmail({ data }: Job<Mail>) {
    console.log('Send email', data);
  }
}
