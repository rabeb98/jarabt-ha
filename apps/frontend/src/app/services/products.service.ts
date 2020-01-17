import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

products ;
  constructor(private firestore: AngularFirestore,private db: AngularFireDatabase) {

  }

  addProduct(record) {
    return this.firestore.collection('products').add(record);
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }


  deleteProduct(record_id) {
    this.firestore.doc('products/' + record_id).delete();
  }
  getProductsById(id:string |any){
    return this.firestore.doc('products/'+id).snapshotChanges();}


getProductsByCategory(category:string |any){
  return this.firestore
    .collection("products", ref => ref.where('category', '==', category)).snapshotChanges();}
}




