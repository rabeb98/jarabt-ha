import { Controller, Get } from '@nestjs/common';
import { Todo } from '@myorg/data';
//789
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getTodos(): Todo[] {
    return this.appService.getTodos();
  }
}
