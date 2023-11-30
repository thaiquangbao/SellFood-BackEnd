import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
  KHO = "Kho",
  XAO = "Xào",
  CHIEN = "Chiên",
  CANH = "Canh",
  Nuong = "Nuớng",
}
@Schema({
  timestamps: true,
})
export class Food {
  @Prop()
  nameFood: string;
  @Prop()
  price: number;
  @Prop()
  describe: string;
  @Prop()
  category: Category;
}
export const FoodSchema = SchemaFactory.createForClass(Food);
export const Categories = { Category };
