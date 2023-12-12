import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from "src/app.service";
//import { FoodService } from "src/food/food.service";
import { Response } from "express";
import { FooterService } from "src/footer/footer.service";
import { FoodService } from "src/food/food.service";
import { Category } from "src/food/entity/food.entity";
import { Slide } from "src/trangchu.entity/slide";

@Controller("thucdon")
export class ThucdonController {
  constructor(
    private foodService: FoodService,
    private appService: AppService,
    private footerService: FooterService,
  ) {}
  @Get()
  async thucDon(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    const foods = await this.foodService.findAllFoodNB();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const categories = [
      Category.Lau,
      Category.CANH,
      Category.CHIEN,
      Category.XAO,
      Category.Hap,
      Category.KHO,
      Category.Luoc,
      Category.Nuong,
    ];

    // Sử dụng Promise.all để đợi cho tất cả các truy vấn hoàn thành

    const listFoodArrays = {};

    // Lặp qua từng category và gọi hàm findAllFoodC
    for (const category of categories) {
      const foods = await this.foodService.findAllFoodC(category);
      listFoodArrays[category] = foods;
    }

    // Kết quả trả về là một đối tượng với key là category và value là danh sách món ăn

    // Kết quả trả về sẽ là một mảng các danh sách món ăn theo từng category
    return res.render("thucdons/thucdon", {
      Category,
      slides,
      foods,
      footers,
      listFoodArrays,
      slideOne,
    });
  }
  @Get("test")
  async test(): Promise<Slide> {
    const slideOne = await this.appService.findSlideOne();
    console.log(slideOne);
    return slideOne;
  }
}
