import { Controller, Get, Body, Post, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('api')
  @HttpCode(200)
  getRandomPeople(@Body('people') people: string[]) {
    const data = this.appService.getRandomPeople(people);
    return { message: 'Success!', data: data };
  }
}
