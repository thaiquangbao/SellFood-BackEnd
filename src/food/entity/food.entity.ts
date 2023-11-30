import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
  KHO = "Kho",
  XAO = "Xào",
  CHIEN = "Chiên",
  CANH = "Canh",
  Nuong = "Nuớng",
  Lau = "Lẩu",
  Hap = "Hấp",
  Luoc = "Luộc",
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
  @Prop()
  img: string;
  @Prop()
  noiBat: string;
}
export const FoodSchema = SchemaFactory.createForClass(Food);
export const Categories = { Category };
