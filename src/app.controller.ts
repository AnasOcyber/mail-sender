import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetEmailDto } from './dto/get-email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendEmail(@Body() emailDto: GetEmailDto) {
    return this.appService.sendEmail(emailDto);
  }
}
