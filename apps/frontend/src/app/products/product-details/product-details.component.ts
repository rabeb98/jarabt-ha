import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'myorg-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  constructor(private crudService: ProductsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
    (params) => {
      this.product = this.crudService.getProductsById(params.id).subscribe(data => {

            this.product.id=data.payload.id,
            this.product.name=data.payload.data()['name'],
            this.product.path=data.payload.data()['path'],
            this.product.rate=data.payload.data()['rate'],


console.log(this.product)

      });
    },);
  }

}
