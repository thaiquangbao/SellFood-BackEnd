import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Reply {
  @Prop({ type: String, required: false })
  hoTen: string;
  @Prop({ type: Number, required: false })
  sdt: number;
  @Prop({ type: String, required: false })
  address: string;
  @Prop({ type: String, required: false })
  email: string;
  @Prop({ type: String, required: false })
  title: string;
  @Prop({ type: String, required: false })
  noiDung: string;
  @Prop({ type: String, required: false })
  img: string;
}
export const ReplySchema = SchemaFactory.createForClass(Reply);
