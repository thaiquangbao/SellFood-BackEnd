import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
  BREAKFAST = "ĂN SÁNG",
  STARTERS = "KHAI VỊ",
  RICE = "CƠM",
  SPRINGROLLS = "SPRING ROLLS",
  PANCAKE = "BÁNH XÈO",
  PORRIDGE = "CHÁO",
  SOUP = "SOUP",
  SOUPV = "SOUP VIỆT NAM",
  LOBSTER = "CRAB-LOBSTER",
  HOTPOT = "LẨU",
  CLAM = "CLAM-NAIL",
  THAIFOOD = "MÓN THÁI",
  VEGETABLE = "RAU",
  VEGAN = "MÓN CHAY",
  CHIEN = "CƠM CHIÊN",
  PHO = "PHỞ",
  FISH = "CÁC MÓN CÁ",
  CHICKEN = "CÁC MÓN GÀ",
  BEEF = "CÁC MÓN BÒ",
  TOM = "CÁC MÓN TÔM",
  MUC = "CÁC MÓN MỰC",
  PORK = "CÁC MÓN HEO",
  MI = "MÌ",
  SALAD = "SALAD",
  SANDWICH = "SANDWICH",
  SPAGHETTIS = "SPAGHETTI",
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
