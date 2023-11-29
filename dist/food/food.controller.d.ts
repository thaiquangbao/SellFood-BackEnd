import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";
export declare class FoodController {
    private foodService;
    constructor(foodService: FoodService);
    getAllBook(): Promise<Food[]>;
    addBook(food: any): Promise<Food>;
}
