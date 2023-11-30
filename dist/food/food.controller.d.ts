import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";
import { FoodDTO, FoodDTOUpdate } from "./dto/food.dto";
import { Response } from "express";
export declare class FoodController {
    private foodService;
    constructor(foodService: FoodService);
    getAllFood(res: Response): Promise<void>;
    getFormFood(res: Response): Promise<void>;
    addFood(food: FoodDTO): Promise<Food>;
    findByIdFood(id: string, res: Response): Promise<void>;
    deleteOneFood(id: string): Promise<void>;
    updateFood(id: string, food: FoodDTOUpdate): Promise<Food>;
}
