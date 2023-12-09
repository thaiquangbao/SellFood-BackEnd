import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from "src/app.service";
//import { FoodService } from "src/food/food.service";
import { Response } from "express";

@Controller("thucdon")
export class ThucdonController {
  constructor(
    //private foddService: FoodService,
    private appService: AppService,
  ) {}
  @Get()
  async thucDon(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    return res.render("thucdons/thucdon", { slides });
  }
}
