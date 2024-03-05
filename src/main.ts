import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => console.log(`Listening on port ${port}...`));
}
bootstrap();
