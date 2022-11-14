import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get("validate")
  async validate(@Body() body:any) {
    const num: number = await Math.floor(Math.random() * 10);
    const response: boolean = num == 10 ? true : false

    return response

  }
}
