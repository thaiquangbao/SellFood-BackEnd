import { Controller, Get, Res, Session } from "@nestjs/common";
import { AppService } from "src/app.service";
//import { FoodService } from "src/food/food.service";
import { Response } from "express";
import { FooterService } from "src/footer/footer.service";
import { FoodService } from "src/food/food.service";
import { Category } from "src/food/entity/food.entity";

const randomMa = generateRandomString(6);
@Controller("thucdon")
export class ThucdonController {
  constructor(
    private foodService: FoodService,
    private appService: AppService,
    private footerService: FooterService,
  ) {}
  @Get()
  async thucDon(@Res() res: Response) {
    //const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const categories = [
      Category.BREAKFAST,
      Category.STARTERS,
      Category.RICE,
      Category.CHIEN,
      Category.SPRINGROLLS,
      Category.PANCAKE,
      Category.PORRIDGE,
      Category.SOUP,
      Category.SOUPV,
      Category.LOBSTER,
      Category.HOTPOT,
      Category.CLAM,
      Category.THAIFOOD,
      Category.VEGETABLE,
      Category.VEGAN,
      Category.BEEF,
      Category.CHICKEN,
      Category.FISH,
      Category.MI,
      Category.PHO,
      Category.TOM,
      Category.MUC,
      Category.PORK,
      Category.SALAD,
      Category.SANDWICH,
      Category.SPAGHETTIS,
      Category.DESSERT,
      Category.DRINKING,
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
      footers,
      listFoodArrays,
      slideOne,
    });
  }
  @Get("test")
  async test(@Session() session: Record<string, any>) {
    session.authenticated = true;
    session.maHoa = randomMa;
    console.log(session.maHoa);
    console.log(session.id);
    console.log(session);
    //const sessionKeys = Object.keys(session);
    return session;
  }
}
function generateRandomString(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
