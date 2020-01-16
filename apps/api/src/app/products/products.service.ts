import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.model';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';



@Injectable()
export class ProductsService extends TypeOrmCrudService<Product> {
  constructor (@InjectRepository(Product) repo) {
    super(repo)
  }


}
