import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";
import { FoodDTO } from "./dto/food.dto";

@Controller("foods")
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  async getAllFood(): Promise<Food[]> {
    return this.foodService.findAllFood();
  }
  @Post("insertFood")
  async addFood(@Body() food: FoodDTO): Promise<Food> {
    return this.foodService.insertFood(food);
  }
  @Get(":id")
  async findByIdFood(@Param("id") id: string): Promise<Food> {
    return this.foodService.findOneById(id);
  }
  @Delete("deleteFood/:id")
  async deleteOneFood(@Param("id") id: string): Promise<void> {
    const result = this.foodService.deleteOne(id);
    if ((await result) !== true) {
      throw new NotFoundException("Xóa không thành công");
    }
  }
}
