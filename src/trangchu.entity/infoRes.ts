import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Information {
  @Prop()
  imgInfo: string;
  @Prop()
  titleInfo: string;
  @Prop()
  noiDungInfo: string;
}
export const FoodSchema = SchemaFactory.createForClass(Information);
