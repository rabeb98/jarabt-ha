import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data';

@Injectable()
export class AppService {
  getTodos(): Todo[] {
    return [{ title: 'Product Management!' }, { title: 'ratings' }, { title: 'dashboard' } , { title: 'home page' }];
  }
}
