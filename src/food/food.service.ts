import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Food } from "./entity/food.entity";
import * as mongoose from "mongoose";

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food.name)
    private foodEntity: mongoose.Model<Food>,
  ) {}
  async findAllFood(): Promise<Food[]> {
    const foods = await this.foodEntity.find();
    return foods;
  }
  async insertFood(food: Food): Promise<Food> {
    const res = await this.foodEntity.create(food);
    return res;
  }
  async findOneById(id: string): Promise<Food> {
    const food = await this.foodEntity.findById(id);
    return food;
  }
  async deleteOne(id: string): Promise<boolean> {
    const result = await this.foodEntity.findByIdAndDelete(id);
    if (!result) {
      return false;
    }
    return true;
  }
  async updateFood(id: string, food: Food): Promise<Food> {
    const result = await this.foodEntity.findByIdAndUpdate(id, food, {
      new: true,
      runValidators: true,
    });
    return result;
  }

  async checkNameFood(nameFood: string): Promise<boolean> {
    const result = await this.foodEntity.findOne({ nameFood });
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
