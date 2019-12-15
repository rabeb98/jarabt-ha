import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './product.model';




@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  async insertProduct(name: string, description: string,owner:string,category:string,path:string, rate: number,nbrComments: number,nbrRatings:number) {
    const newProduct = new this.productModel({
      name,
      description,
      owner,
      category,
      path,
      rate,
      nbrComments,
      nbrRatings,
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      name: prod.name,
      description: prod.description,
      owner: prod.owner,
      category: prod.category,
      path: prod.path,
      rate: prod.rate,
      nbrComments: prod.nbrComments,
      nbrRatings: prod.nbrRatings,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      owner: product.owner,
      category: product.category,
      path: product.path,
      rate: product.rate,
      nbrComments: product.nbrComments,
      nbrRatings: product.nbrRatings,
    };
  }

  async updateProduct(
    productId: string, name: string, description: string,owner:string,category:string,path:string, rate: number,nbrComments: number,nbrRatings:number)
  {
    const updatedProduct = await this.findProduct(productId);
    if (name) {
      updatedProduct.name = name;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (owner) {
      updatedProduct.owner = owner;
    }
    if (category) {
      updatedProduct.category = category;
    }
    if (path) {
      updatedProduct.path = path;
    }
    if (rate) {
      updatedProduct.rate = rate;
    }
    if (nbrComments) {
      updatedProduct.nbrComments = nbrComments;
    }
    if (nbrRatings) {
      updatedProduct.nbrRatings= nbrRatings;
    }
    await updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    const result = await this.productModel.deleteOne({_id: prodId}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}
