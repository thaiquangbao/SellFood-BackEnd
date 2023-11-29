"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const food_entity_1 = require("./entity/food.entity");
const mongoose = require("mongoose");
let FoodService = class FoodService {
    constructor(foodEntity) {
        this.foodEntity = foodEntity;
    }
    async findAllFood() {
        const books = await this.foodEntity.find();
        return books;
    }
    async insertFood(food) {
        const res = await this.foodEntity.create(food);
        return res;
    }
    async findOneById(id) {
        const food = await this.foodEntity.findById(id);
        return food;
    }
    async deleteOne(id) {
        await this.foodEntity.findByIdAndDelete(id);
        return true;
    }
};
exports.FoodService = FoodService;
exports.FoodService = FoodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(food_entity_1.Food.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], FoodService);
//# sourceMappingURL=food.service.js.map