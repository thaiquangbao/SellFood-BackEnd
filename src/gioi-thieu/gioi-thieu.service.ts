import { Injectable } from "@nestjs/common";
import { Introduction } from "./entity/gioi-thieu.entity";
import mongoose from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class GioiThieuService {
  constructor(
    @InjectModel(Introduction.name)
    private introducEntity: mongoose.Model<Introduction>,
  ) {}
  async insert(gioiThieu: Introduction): Promise<Introduction> {
    const result = await this.introducEntity.create(gioiThieu);
    return result;
  }
  async update(id: string, gioiThieu: Introduction) {
    const result = await this.introducEntity.findByIdAndUpdate(id, gioiThieu);
    return result;
  }
  async findOne(id: string) {
    const result = await this.introducEntity.findById(id);
    return result;
  }
  async findAll(): Promise<Introduction[]> {
    const result = await this.introducEntity.find();
    return result;
  }
}
