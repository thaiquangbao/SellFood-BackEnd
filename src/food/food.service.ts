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
    const books = await this.foodEntity.find();
    return books;
  }
}
