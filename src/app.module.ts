import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MongooseModule } from '@nestjs/mongoose';
import { Email, EmailSchema } from './schemas/email.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mail-sender'),
    MongooseModule.forFeature([{ name: Email.name, schema: EmailSchema }]),

    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'emailList',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
