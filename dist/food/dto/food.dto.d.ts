import { Category } from "../entity/food.entity";
export declare class FoodDTO {
    readonly id: string;
    readonly nameFood: string;
    readonly price: number;
    readonly describe: string;
    readonly category: Category;
    readonly img: string;
    readonly noiBat: string;
}
export declare class FoodDTOUpdate {
    readonly nameFood: string;
    readonly price: number;
    readonly describe: string;
    readonly category: Category;
    readonly img: string;
    readonly noiBat: string;
}
export declare class ImgCloud {
    imgDTO: string;
}
