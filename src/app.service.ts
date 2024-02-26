import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Mail } from './interfaces/mail.interface';

@Injectable()
export class AppService {
  constructor(@InjectQueue('emailList') private emailQueue: Queue) {}

  async sendEmail() {
    await this.emailQueue.add({ mail: 'New Email' });
  }
}
