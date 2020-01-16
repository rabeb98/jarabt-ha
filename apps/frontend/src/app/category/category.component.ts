import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'myorg-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
products:any;
  constructor(private crudService: ProductsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {this.activatedRoute.params.subscribe(
    (params) => {
      this.products = this.crudService.getProductsByCategory(params.category).subscribe(data => {

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
    },);}

}
