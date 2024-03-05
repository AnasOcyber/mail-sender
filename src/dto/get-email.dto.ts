import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GetEmailDto {
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @IsEmail()
  @IsNotEmpty()
  from: string;

  @IsString()
  subject: string;

  @IsOptional()
  data?: any;
}
