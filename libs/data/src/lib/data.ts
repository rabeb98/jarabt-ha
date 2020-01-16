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

export class User {
  uid: string;
  email: string;
  displayName: string;


}

export class Tester extends User{
  name: string;
  firstName: string;
  age: number;
  sexe: string;
  userName: string;

}

export class Owner extends User {
  company: string;
  category: string;

}
