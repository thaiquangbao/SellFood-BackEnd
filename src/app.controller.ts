import { Body, Controller, Get, Param, Post, Put, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { FoodService } from "./food/food.service";
import { SlideDTO, UpdateSlideDTO } from "./trangchu.entity/dto/slideDTO";
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
    const slides = await this.appService.findAllSlide();
    return res.render("index", { foods, slides });
  }
  @Get("slide")
  async getListSlide(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    return res.render("trang-chu/slider", { slides });
  }
  @Post("slide/insert")
  async insert(@Body() slide: SlideDTO) {
    const result = await this.appService.insertSlide(slide);
    return result;
  }
  @Get("slide/:id")
  async findOne(@Param("id") id: string, @Res() res: Response) {
    const slide = await this.appService.findOneSlide(id);
    const slides = await this.appService.findAllSlide();
    return res.render("trang-chu/updateslider", { slide, slides });
  }
  @Put("slide/update/:id")
  async update(
    @Param("id") id: string,
    @Body() slide: UpdateSlideDTO,
    @Res() res: Response,
  ) {
    const result = await this.appService.updateSlide(id, slide);
    if (result) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 500,
      });
    }
  }
}
