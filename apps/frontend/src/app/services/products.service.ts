import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }
  addProduct(record) {
    return this.firestore.collection('products').add(record);
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }



  deleteProduct(record_id) {
    this.firestore.doc('products/' + record_id).delete();
  }
  getProductsByCategory(category:string |any){
  return this.firestore
    .collection("products", ref => ref.where('category', '==', category)).snapshotChanges();}
}
