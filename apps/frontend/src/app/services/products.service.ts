import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productCollection ;
products ;
  constructor(private firestore: AngularFirestore,private db: AngularFireDatabase) {
    // const  database=firebase.database();
    // database.ref('/products').once('value', contacts => {
    //   // Build an array of all records to push to Algolia
    //   const records = [];
    //   contacts.forEach(product => {
    //     // get the key and data from the snapshot
    //     const childKey = product.key;
    //     const childData = product.val();
    //     // We set the Algolia objectID as the Firebase .key
    //     childData.objectID = childKey;
    //     // Add object for indexing
    //     records.push(childData);
    //   });
    //
    //   // Add or update new objects
    //   index
    //     .saveObjects(records)
    //     .then(() => {
    //       console.log('Contacts imported into Algolia');
    //     })
    //     .catch(error => {
    //       console.error('Error when importing contact into Algolia', error);
    //     });
    // });
  }
  // getMovies(start, end): FirebaseListObservable<any> {
  //   return this.db.list('/movies', {
  //     query: {
  //       orderByChild: 'Title',
  //       limitToFirst: 10,
  //       startAt: start,
  //       endAt: end
  //     }
  //   });
  // }

  addProduct(record) {
    return this.firestore.collection('products').add(record);
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }


    getProductsByName(start, end) {


      // return this.firestore.collection('products', ref =>
      //   ref
      //     .orderBy('name')
      //     .limit(5)
      //     .startAt(start)
      //     .endAt(end)
      // ).snapshotChanges();
      // this.productCollection = this.firestore.collection<Product>('/products', ref => ref.orderBy('name').startAt(start).endAt(end));
      // this.products = this.productCollection.snapshotChanges()
      // return this.products;
  }



  deleteProduct(record_id) {
    this.firestore.doc('products/' + record_id).delete();
  }
  getProductsByCategory(category:string |any){
  return this.firestore
    .collection("products", ref => ref.where('category', '==', category)).snapshotChanges();}
}




