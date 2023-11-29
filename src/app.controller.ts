import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { FoodService } from "./food/food.service";
//import { Request } from 'express';
@Controller()
export class AppController {
  constructor(
    private readonly foodService: FoodService,
    private readonly appService: AppService,
  ) {}
  @Get()
  async getAllFood(@Res() res: Response) {
    const foods = await this.foodService.findAllFood();
    return res.render("index", { foods });
  }
}
