import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
  STARTERS = "Khai Vị",
  FISH = "Món Cá",
  SEEFOOD = "Món Hải Sản",
  CHIEN = "Món Cơm Chiên",
  PHO = "Món Phở",
  CHICKEN = "Món Gà",
  BEEF = "Món Bò",
  PORK = "Món Lợn",
  MI = "Món Mì",
  SALAD = "Món Salad",
  DESSERT = "Món Tráng Miệng",
  SANDWICH = "Món SandWich",
  SPAGHETTIS = "Món Mì SPAGHETTIS",
  DRINKING = "Thức Uống",
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
