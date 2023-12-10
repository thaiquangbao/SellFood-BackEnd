import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Footer {
  @Prop()
  logo: string;
  @Prop()
  address: string;
  @Prop()
  hotline: string;
  @Prop()
  mail: string;
  @Prop()
  timeWork: string;
  @Prop()
  iframe: string;
}
export const FooterSchema = SchemaFactory.createForClass(Footer);
