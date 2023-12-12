import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Slide {
  @Prop()
  sttSlide?: number;
  @Prop()
  imgSlide: string;
  @Prop()
  titleSlide?: string;
  @Prop()
  noiDungSlide?: string;
}
export const SlideSchema = SchemaFactory.createForClass(Slide);
