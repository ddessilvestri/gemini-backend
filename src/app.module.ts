import { Module } from '@nestjs/common';
import { GeminiModule } from './gemini/gemini.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true      // process.env can be used in any part of the project
    }),
    GeminiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
