import { AppService } from "./app.service";
import { Response } from "express";
import { FoodService } from "./food/food.service";
export declare class AppController {
    private readonly foodService;
    private readonly appService;
    constructor(foodService: FoodService, appService: AppService);
    getAllFood(res: Response): Promise<void>;
}
