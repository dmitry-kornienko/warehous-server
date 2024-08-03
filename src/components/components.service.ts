import { Injectable } from '@nestjs/common';

@Injectable()
export class ComponentsService {
  getAll(): string[] {
    return ['comp1', 'cpmp2'];
  }
}
