import { Injectable } from "@nestjs/common";
import { Reply } from "./entity/lienhe.entity";
import mongoose from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class LienheService {
  constructor(
    @InjectModel(Reply.name)
    private replyEntity: mongoose.Model<Reply>,
  ) {}
  async insertLH(reply: Reply): Promise<Reply> {
    const result = await this.replyEntity.create(reply);
    return result;
  }
  async findAllLH(): Promise<Reply[]> {
    const result = await this.replyEntity.find();
    return result;
  }
  async deleteLH(id: string) {
    return this.replyEntity.findByIdAndDelete(id);
  }
}
