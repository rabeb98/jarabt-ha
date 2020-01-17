import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductsService } from '../services/products.service';
import {  Subject } from 'rxjs';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'myorg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
names;
  dataSource: any;
  searchterm:string ;
  startAt = new Subject();
  endAt = new Subject();
  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();

  search($event){
    const q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
  }
  constructor(private crudService: ProductsService, public afs: AngularFirestore) {
  }

  firequery(start, end){
    return this.afs.collection('products', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).snapshotChanges();
  }

  ngOnInit() {
    combineLatest(this.startObs, this.endObs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe(data => {

        this.dataSource = data.map(e => {
          return {
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            rate: e.payload.doc.data()['rate'],
            path: e.payload.doc.data()['path'],
          };
        })})});

  }


}




