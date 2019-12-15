import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: String, required: true },
  category: { type: String, required: true },
  path: { type: String, required: true },
  rate: { type: Number, required: true },
  nbrComments: { type: Number, required: true },
  nbrRatings: { type: Number, required: true },

});

export class Product implements mongoose.Document {
  id: number;
  name: string;
  owner: string;
  category: string;
  description: string;
  nbrComments: number;
  nbrRatings: number;
  rate: number;
  path: string;
  moyenne(){
    this.rate=this.nbrRatings/5;
  }
save(){}
}
