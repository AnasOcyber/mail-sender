import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Mail } from './interfaces/mail.interface';

@Injectable()
export class AppService {
  constructor(@InjectQueue('emailSender') private emailQueue: Queue) {}

  async sendEmail(data: Mail) {
    const job = await this.emailQueue.add({ data });
    console.log(job);
    return { jobId: job.id };
  }
}
