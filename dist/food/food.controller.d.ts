/// <reference types="multer" />
import { FoodService } from "./food.service";
import { Food } from "./entity/food.entity";
import { FoodDTO, FoodDTOUpdate } from "./dto/food.dto";
import { Response } from "express";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
export declare class FoodController {
    private foodService;
    private cloudinaryService;
    constructor(foodService: FoodService, cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File): Promise<import("../cloudinary/cloudinary-response").CloudinaryResponse>;
    getAllFood(res: Response): Promise<void>;
    getFormFood(res: Response): Promise<void>;
    addFood(food: FoodDTO): Promise<Food>;
    findByIdFood(id: string, res: Response): Promise<void>;
    deleteOneFood(id: string): Promise<void>;
    updateFood(id: string, food: FoodDTOUpdate): Promise<Food>;
}
