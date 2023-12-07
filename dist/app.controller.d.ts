import { AppService } from "./app.service";
import { Response } from "express";
import { FoodService } from "./food/food.service";
import { SlideDTO, UpdateSlideDTO } from "./trangchu.entity/dto/slideDTO";
export declare class AppController {
    private readonly foodService;
    private readonly appService;
    constructor(foodService: FoodService, appService: AppService);
    getAllFood(res: Response): Promise<void>;
    getListSlide(res: Response): Promise<void>;
    insert(slide: SlideDTO): Promise<import("./trangchu.entity/slide").Slide>;
    findOne(id: string, res: Response): Promise<void>;
    update(id: string, slide: UpdateSlideDTO, res: Response): Promise<void>;
}
