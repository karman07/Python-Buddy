import { Body, Controller, Post, Headers, Get } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('chat')
  async chat(
    @Body() body: { message: string },
    @Headers('x-api-key') apiKey: string
  ) {
    return this.aiService.chat(body.message, apiKey);
  }

   @Get()
   getHello(): string {
     return this.aiService.getHello();
   }
}