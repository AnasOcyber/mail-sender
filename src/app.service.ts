import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { GetEmailDto } from './dto/get-email.dto';

@Injectable()
export class AppService {
  constructor(@InjectQueue('emailList') private readonly emailQueue: Queue) {}

  async sendEmail(emailDto: GetEmailDto) {
    const job = await this.emailQueue.add(emailDto);
    return { jobId: job.id };
  }
}
