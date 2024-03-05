import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { GetEmailDto } from './dto/get-email.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Email } from './schemas/email.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('emailList') private readonly emailQueue: Queue,
    @InjectModel(Email.name) private emailModel: Model<Email>,
  ) {}

  async sendEmail(emailDto: GetEmailDto) {
    const job = await this.emailQueue.add(emailDto);
    const email = await this.emailModel.create(emailDto);

    console.log('Email job is added to the queue as well as MongoDB');

    return {
      jobId: job.id,
      emailId: email.subject,
    };
  }
}
