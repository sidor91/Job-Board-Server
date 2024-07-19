import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionsFilter } from './utils/filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new CustomExceptionsFilter());
  await app.listen(4000);
}
bootstrap();
