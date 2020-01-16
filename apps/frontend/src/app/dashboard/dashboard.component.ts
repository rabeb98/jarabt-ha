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
  productRate=5;
  productPath: string;
  productOwner: string;
  productCategory: string;
  productDescription: string;
  productNbrComments=0;
  productNbrRatings=0;
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
          owner: e.payload.doc.data()['owner'],
          category: e.payload.doc.data()['category'],
          description: e.payload.doc.data()['description'],
          nbrComments: e.payload.doc.data()['nbrComments'],
          nbrRatings: e.payload.doc.data()['nbrRatings'],
        };
      })
      console.log(this.products);

    });
  }
  CreateRecord() {
    const record = {};
    record['name'] = this.productName;
    record['path'] = this.productPath;
    record['owner'] = this.productOwner;
    record['category'] = this.productCategory;
    record['description'] = this.productDescription;
    this.crudService.addProduct(record).then(resp => {
      this.productName = "";
      this.productPath = "";
      this.productOwner = "";
      this.productCategory = "";
      this.productDescription= "";
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
