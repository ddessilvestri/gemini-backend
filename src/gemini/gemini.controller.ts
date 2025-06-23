import { Body, Controller,Get, HttpStatus, Post, Res } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { BasicPromptDto } from './dtos/basic-prompt.dto';
import { Response } from 'express';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}


   @Post('basic-prompt')
   async basicPrompt(@Body() body:BasicPromptDto){
    return this.geminiService.basicPrompt(body);
   }
    @Post('basic-prompt-stream')
   async basicPromptStream(@Body() body:BasicPromptDto, @Res() res: Response){ // Res from Express Node
    const stream = await this.geminiService.basicPromptStream(body);
    // res.setHeader('Content-Type','application/json');
    res.setHeader('Content-Type','text/plain');
    res.status(HttpStatus.OK);

    for await (const chunk of stream){
      const piece = chunk.text;
      res.write(piece);
    }

    res.end();
   
   }

  // @Get()
  // getHelloWorld(){
    
  //   const apiKey = process.env.GEMINI_API_KEY;
  //   console.log('API Key:', process.env.GEMINI_API_KEY);
  //   return { apiKey };

  // }
}
