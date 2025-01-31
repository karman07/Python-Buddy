import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { VercelAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://frontend-nrygc84lh-karman07s-projects.vercel.app',
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Make sure OPTIONS is included
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
  
  await app.listen(3000);
}
bootstrap();
