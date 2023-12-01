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
exports.FoodController = void 0;
const common_1 = require("@nestjs/common");
const food_service_1 = require("./food.service");
const food_entity_1 = require("./entity/food.entity");
const food_dto_1 = require("./dto/food.dto");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const platform_express_1 = require("@nestjs/platform-express");
let FoodController = class FoodController {
    constructor(foodService, cloudinaryService) {
        this.foodService = foodService;
        this.cloudinaryService = cloudinaryService;
    }
    async uploadImage(file) {
        try {
            const result = await this.cloudinaryService.uploadFileFromBuffer(file.buffer);
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllFood(res) {
        const foods = await this.foodService.findAllFood();
        return res.render("foods/listFoods", { foods });
    }
    async getFormFood(res) {
        return res.render("foods/createFoods", { Category: food_entity_1.Category });
    }
    async addFood(food) {
        return this.foodService.insertFood(food);
    }
    async findByIdFood(id, res) {
        const food = await this.foodService.findOneById(id);
        return res.render("foods/updateFood", { food, Category: food_entity_1.Category });
    }
    async deleteOneFood(id) {
        this.foodService.deleteOne(id);
    }
    async updateFood(id, food) {
        return this.foodService.updateFood(id, food);
    }
};
exports.FoodController = FoodController;
__decorate([
    (0, common_1.Post)("uploads"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "getAllFood", null);
__decorate([
    (0, common_1.Get)("formAddFoods"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "getFormFood", null);
__decorate([
    (0, common_1.Post)("insertFood"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_dto_1.FoodDTO]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "addFood", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "findByIdFood", null);
__decorate([
    (0, common_1.Delete)("deleteFood/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "deleteOneFood", null);
__decorate([
    (0, common_1.Put)("updateFood/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, food_dto_1.FoodDTOUpdate]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "updateFood", null);
exports.FoodController = FoodController = __decorate([
    (0, common_1.Controller)("foods"),
    __metadata("design:paramtypes", [food_service_1.FoodService,
        cloudinary_service_1.CloudinaryService])
], FoodController);
//# sourceMappingURL=food.controller.js.map