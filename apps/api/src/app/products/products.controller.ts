import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete, Put
} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProductsService } from './products.service';
import { Product } from './product.model';
@Crud({
  model: {
    type: Product,
  },
})
@Controller('products')
export class ProductsController implements CrudController<Product> {
  constructor(public service: ProductsService) {}
}
