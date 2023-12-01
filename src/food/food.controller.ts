import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FoodService } from "./food.service";
import { Category, Food } from "./entity/food.entity";
import { FoodDTO, FoodDTOUpdate } from "./dto/food.dto";
import { Response } from "express";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("foods")
export class FoodController {
  constructor(
    private foodService: FoodService,
    private cloudinaryService: CloudinaryService,
  ) {}

  @Post("uploads")
  @UseInterceptors(FileInterceptor("file"))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    try {
      const result = await this.cloudinaryService.uploadFileFromBuffer(
        file.buffer,
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async getAllFood(@Res() res: Response) {
    const foods = await this.foodService.findAllFood();
    return res.render("foods/listFoods", { foods });
  }
  @Get("formAddFoods")
  async getFormFood(@Res() res: Response) {
    return res.render("foods/createFoods", { Category });
  }
  @Post("insertFood")
  async addFood(@Body() food: FoodDTO): Promise<Food> {
    return this.foodService.insertFood(food);
  }
  @Get(":id")
  async findByIdFood(@Param("id") id: string, @Res() res: Response) {
    const food = await this.foodService.findOneById(id);
    return res.render("foods/updateFood", { food, Category });
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
