/// <reference types="multer" />
import { FoodService } from "./food.service";
import { FoodDTO, FoodDTOUpdate, ImgCloud } from "./dto/food.dto";
import { Response } from "express";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { AppService } from "src/app.service";
export declare class FoodController {
    private foodService;
    private cloudinaryService;
    private appService;
    constructor(foodService: FoodService, cloudinaryService: CloudinaryService, appService: AppService);
    uploadImage(file: Express.Multer.File): Promise<import("../cloudinary/cloudinary-response").CloudinaryResponse>;
    deleteImage(deleteImageDto: ImgCloud, res: Response): Promise<void>;
    getAllFood(res: Response): Promise<void>;
    getFormFood(res: Response): Promise<void>;
    addFood(food: FoodDTO, res: Response): Promise<void>;
    findByIdFood(id: string, res: Response): Promise<void>;
    deleteOneFood(id: string): Promise<void>;
    updateFood(id: string, food: FoodDTOUpdate, res: Response): Promise<void>;
    checkNameFood(food: FoodDTO, res: Response): Promise<void>;
    deleteAllFood(food: FoodDTO, res: Response): Promise<void>;
    deleteAllI(food: FoodDTO): Promise<void>;
}
