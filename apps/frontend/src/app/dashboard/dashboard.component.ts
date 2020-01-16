import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'myorg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any;
  productName: string;
  productRate: number;
  productPath: string;
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
  CreateRecord() {
    const record = {};
    record['name'] = this.productName;
    record['rate'] = this.productRate;
    record['path'] = this.productPath;
    this.crudService.addProduct(record).then(resp => {
      this.productName = "";
      this.productRate = undefined;
      this.productPath = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.deleteProduct(rowID);
  }






}
