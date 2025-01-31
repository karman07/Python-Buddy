import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
  async chat(message: string, apiKey: string) {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'system',
        content: 'You are a friendly Python tutor for children. Explain concepts simply with fun examples about animals or games. Use emojis and keep responses under 100 words.'
      }, {
        role: 'user',
        content: message
      }]
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].message.content;
  }
}