import { Injectable } from "@nestjs/common";
import { Introduction } from "./entity/gioi-thieu.entity";
import mongoose from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IntroductionBody } from "./dto/gioi-thieu.dto";

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
  async update(id: string, gioiThieu: IntroductionBody) {
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
  // Trong service
  async updateName(
    id: string,
    nameCategory: string,
    foodName: string,
    newName: string,
  ) {
    return this.introducEntity.findOneAndUpdate(
      {
        _id: id,
        "foods.nameCate": nameCategory,
        "foods.food.name": foodName,
      },
      {
        $set: { "foods.$[category].food.$[food].name": newName },
      },
      {
        new: true,
        arrayFilters: [
          { "category.nameCate": nameCategory },
          { "food.name": foodName },
        ],
      },
    );
  }
  async updateCate(id: string, nameCategory: string, newCategory: string) {
    return this.introducEntity.findOneAndUpdate(
      {
        _id: id,
        "foods.nameCate": nameCategory,
      },
      {
        $set: { "foods.$[category].nameCate": newCategory },
      },
      {
        new: true,
        arrayFilters: [{ "category.nameCate": nameCategory }],
      },
    );
  }
}
