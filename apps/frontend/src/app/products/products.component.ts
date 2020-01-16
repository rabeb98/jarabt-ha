import { Component, OnInit } from '@angular/core';

import {Product } from '@myorg/data';


@Component({
  selector: 'myorg-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    { id: 11, name: 'Dr Nice', owner: ' ', category: ' ', description: ' ' , nbrComments: 0, nbrRatings: 0, rate: 0, path:'../../assets/Testing.jpg'  },
    { id: 12, name: 'Narco' , owner: ' ', category: ' ', description: ' ' , nbrComments: 0, nbrRatings: 0, rate: 0, path:'../../assets/Testing.jpg'  },
    { id: 13, name: 'Bombasto' , owner: ' ', category: ' ', description: ' ' , nbrComments: 0, nbrRatings: 0, rate: 0, path:'../../assets/Testing.jpg'  },


  ];

  value= 3;

  constructor() { }

  ngOnInit() {
  }

}
