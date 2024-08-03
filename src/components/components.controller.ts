import { Controller, Get } from '@nestjs/common';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @Get()
  getAll() {
    return this.componentsService.getAll();
  }
}
