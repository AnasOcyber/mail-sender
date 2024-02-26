import { Body, Controller, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { GetEmailDto } from './dto/get-email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @Render('email')
  sendEmail(@Body() emailDto: GetEmailDto) {
    this.appService.sendEmail(emailDto);
    return { message: 'Email Added' };
  }
}
