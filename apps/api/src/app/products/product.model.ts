import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 25 })
  name:string;

  @Column()
  description:string;

  @Column()
  owner:string;

  @Column()
  category:string;

  @Column()
  path:string;

  @Column()
  rate:number;

  @Column()
  nbrComments:number;

  @Column()
  nbrRatings:number;

  moyenne(){
    this.rate=this.nbrRatings/5;
  }
save(){}
}
