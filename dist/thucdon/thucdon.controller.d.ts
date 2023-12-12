import { AppService } from "src/app.service";
import { Response } from "express";
import { FooterService } from "src/footer/footer.service";
import { FoodService } from "src/food/food.service";
import { Slide } from "src/trangchu.entity/slide";
export declare class ThucdonController {
    private foodService;
    private appService;
    private footerService;
    constructor(foodService: FoodService, appService: AppService, footerService: FooterService);
    thucDon(res: Response): Promise<void>;
    test(): Promise<Slide>;
}
