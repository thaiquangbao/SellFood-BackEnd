import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";
import { FoodDTO } from "./dto/food.dto";
export declare class FoodController {
    private foodService;
    constructor(foodService: FoodService);
    getAllFood(): Promise<Food[]>;
    addFood(food: FoodDTO): Promise<Food>;
    findByIdFood(id: string): Promise<Food>;
}
