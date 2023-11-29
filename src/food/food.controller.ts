import { Body, Controller, Get, Post } from "@nestjs/common";
import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";

@Controller("foods")
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  async getAllBook(): Promise<Food[]> {
    return this.foodService.findAllFood();
  }
  @Post("insertFood")
  async addBook(@Body() food): Promise<Food> {
    return this.foodService.insertFood(food);
  }
}
