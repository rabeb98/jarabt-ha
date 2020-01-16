import { Component, OnInit } from '@angular/core';

import {Product } from '@myorg/data';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'myorg-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;


  value= 3;

  constructor(private crudService: ProductsService) { }

  ngOnInit() {
    this.crudService.getProducts().subscribe(data => {

      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          rate: e.payload.doc.data()['rate'],
          path: e.payload.doc.data()['path'],
        };
      })
      console.log(this.products);

    });
  }

}
