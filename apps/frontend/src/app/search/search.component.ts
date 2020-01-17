import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductsService } from '../services/products.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'myorg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  dataSource: any;

  startAt = new Subject()
  endAt = new Subject()

  constructor(private crudService: ProductsService, public afs: AngularFirestore) {
  }

  ngOnInit() {
    this.crudService.getProductsByName(this.startAt, this.endAt);
      // .subscribe(data => {
      //
      //   this.dataSource= data.map(e => {
      //     return {
      //       id: e.payload.doc.id,
      //       isEdit: false,
      //       name: e.payload.doc.data()['name'],
      //       rate: e.payload.doc.data()['rate'],
      //       path: e.payload.doc.data()['path'],
      //     };
      //   })
      //   console.log(this.dataSource);
      //
      // });
  }

  search($event) {
    const q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q + "\uf8ff")
  }

}




