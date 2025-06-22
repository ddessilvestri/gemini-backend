import { Body, Controller,Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { BasicPromptDto } from './dtos/basic-prompt.dto';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}


   @Post('basic-prompt')
   async basicPrompt(@Body() body:BasicPromptDto){
    return this.geminiService.basicPrompt(body);
   }

  // @Get()
  // getHelloWorld(){
    
  //   const apiKey = process.env.GEMINI_API_KEY;
  //   console.log('API Key:', process.env.GEMINI_API_KEY);
  //   return { apiKey };

  // }
}
