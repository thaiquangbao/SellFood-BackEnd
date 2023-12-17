import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Icons {
  @Prop()
  imgIcons: string;
  @Prop()
  titleIcons: string;
  @Prop()
  linkIcons?: string;
}
export const IconsSchema = SchemaFactory.createForClass(Icons);
