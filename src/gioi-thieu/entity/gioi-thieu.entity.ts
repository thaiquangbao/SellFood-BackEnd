import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

interface Food {
  name: string;
}
interface CategoryFood {
  nameCate: string;
  food: Array<Food>;
}
@Schema({
  timestamps: true,
})
export class Introduction {
  @Prop({ type: String, required: false })
  title: string;
  @Prop({ type: String, required: false })
  noiDung: string;
  @Prop({ type: Array, required: false })
  foods: Array<CategoryFood>;
  @Prop({ type: String, required: false })
  img: string;
  @Prop({ type: String, required: false })
  noiDungKhac: string;
}
export const IntroductionSchema = SchemaFactory.createForClass(Introduction);
