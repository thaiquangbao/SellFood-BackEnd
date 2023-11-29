import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";
import { FoodDTO, FoodDTOUpdate } from "./dto/food.dto";

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
    this.foodService.deleteOne(id);
  }
  @Put("updateFood/:id")
  async updateFood(
    @Param("id") id: string,
    @Body() food: FoodDTOUpdate,
  ): Promise<Food> {
    return this.foodService.updateFood(id, food);
  }
}
