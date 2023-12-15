import { Category } from "../entity/food.entity";
export declare class FoodDTO {
    readonly id: string;
    readonly nameFood: string;
    readonly price: number;
    readonly describe: string;
    readonly category: Category;
    readonly img: string;
    readonly noiBat: string;
    readonly ids: string[];
    readonly imgs: string[];
    readonly deXuat: string;
    readonly ngonNgu: string;
    readonly deleted: boolean;
}
export declare class FoodDTOUpdate {
    readonly nameFood: string;
    readonly price: number;
    readonly describe: string;
    readonly category: Category;
    readonly img: string;
    readonly noiBat: string;
    readonly deXuat: string;
    readonly ngonNgu: string;
    readonly deleted: boolean;
}
export declare class ImgCloud {
    imgDTO: string;
}
