import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
  timestamps: true,
})
export class Memory {
  @Prop()
  imgMemory: string;
}
export const MemorySchema = SchemaFactory.createForClass(Memory);
