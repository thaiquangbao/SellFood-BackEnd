import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
  STARTERS = "KHAI VỊ",
  FISH = "CÁ",
  SEEFOOD = "HẢI SẢN",
  CHIEN = "CƠM CHIÊN",
  PHO = "PHỞ",
  CHICKEN = "GÀ",
  BEEF = "BÒ",
  PORK = "HEO",
  MI = "MÌ",
  SALAD = "SALAD",
  SANDWICH = "SANDWICH",
  SPAGHETTIS = "SPAGHETTIS",
  DESSERT = "TRÁNG MIỆNG",
  DRINKING = "THỨC UỐNG",
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
  @Prop()
  deXuat: string;
  @Prop()
  ngonNgu?: string;
  @Prop({ type: Boolean, default: false })
  deleted: boolean;
}
export const FoodSchema = SchemaFactory.createForClass(Food);
export const Categories = { Category };
