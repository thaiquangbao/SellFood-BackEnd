import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Slide {
  @Prop()
  imgSlide: string;
  @Prop()
  titleSlide: string;
  @Prop()
  noiDungSlide: string;
}
export const FoodSchema = SchemaFactory.createForClass(Slide);
