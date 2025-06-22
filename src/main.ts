import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  // the backend validates using the following pipes
  // on this case, we only retrieve what we need
  app.useGlobalPipes(  
  new ValidationPipe({ 
    whitelist: true, 
    forbidNonWhitelisted: true, 
  }) 
);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
