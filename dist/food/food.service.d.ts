/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Category, Food } from "./entity/food.entity";
import * as mongoose from "mongoose";
export declare class FoodService {
    private foodEntity;
    constructor(foodEntity: mongoose.Model<Food>);
    findAllFood(): Promise<Food[]>;
    findAllFoodC(category: Category): Promise<Food[]>;
    findAllFoodNB(): Promise<Food[]>;
    findAllFoodDX(): Promise<Food[]>;
    insertFood(food: Food): Promise<Food>;
    findOneById(id: string): Promise<Food>;
    deleteOne(id: string): Promise<boolean>;
    updateFood(id: string, food: Food): Promise<Food>;
    checkNameFood(nameFood: string): Promise<boolean>;
    deleteAll(ids: string[]): Promise<mongoose.mongo.DeleteResult>;
}
