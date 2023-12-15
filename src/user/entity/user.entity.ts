import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  userName: string;
  @Prop({ type: String, required: false })
  passWord: string;
  @Prop({ type: String, required: false, unique: true })
  email: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
