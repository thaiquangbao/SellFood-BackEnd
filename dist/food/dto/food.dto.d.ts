import { Category } from "../entity/food.entity";
export declare class FoodDTO {
    readonly id: string;
    readonly nameFood: string;
    readonly price: number;
    readonly describe: string;
    readonly category: Category;
}
