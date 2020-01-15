export interface Todo {
  title: string;
}
//the methods here are supposed to be in services.. I just put em to not forget anything ^^
export class Product {
  id: number;
  name: string;
  owner: string;
  category: string;
  description: string;
  nbrComments: number;
  nbrRatings: number;
  rate: number;
  path: string;
  // moyenne(){
  //   this.rate=this.nbrRatings/5;
  // }
}

abstract class User {
  id: number;
  email: string;
  mdp: string;
  numb: number;
  auth(){

  }
  register(){

  }
  editprofile(){

  }
}

export class Tester extends User{
  name: string;
  firstName: string;
  age: number;
  sexe: string;
  userName: string;
  path: string;
  addComment(){

  }
  rate(){

  }
}

export class ProductOwner extends User{
  orgNAme: string;
  sector: string;
  path: string;
  addProduct(){

  }
  deleteProduct(){

  }
  editProduct(){

  }
}

export class Comment {
  productId: number;
  testerId: number;
}
