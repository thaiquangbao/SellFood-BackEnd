import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
  KHO = "Kho",
  XAO = "Xao",
  CHIEN = "Chien",
  CANH = "Canh",
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
