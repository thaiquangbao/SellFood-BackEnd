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
    async deleteImage(deleteImageDto, res) {
        try {
            const { imgDTO } = deleteImageDto;
            const result = await this.cloudinaryService.deleteImage(imgDTO);
            if (result.result === "ok") {
                res.json({ code: 200 });
            }
            else {
                res.json({ code: 500 });
            }
        }
        catch (error) {
            throw new Error("Error deleting image from Cloudinary");
        }
    }
    async getAllFood(res) {
        const foods = await this.foodService.findAllFood();
        return res.render("foods/listFoods", { foods });
    }
    async getFormFood(res) {
        return res.render("foods/createFoods", { Category: food_entity_1.Category });
    }
    async addFood(food, res) {
        const result = await this.foodService.insertFood(food);
        if (result) {
            res.json({
                code: 200,
                message: "Món " + food.nameFood + " đã được thêm vào thức đơn ",
            });
        }
        else {
            res.json({ code: 500 });
        }
    }
    async findByIdFood(id, res) {
        const food = await this.foodService.findOneById(id);
        return res.render("foods/updateFood", { food, Category: food_entity_1.Category });
    }
    async deleteOneFood(id) {
        this.foodService.deleteOne(id);
    }
    async updateFood(id, food, res) {
        const result = await this.foodService.updateFood(id, food);
        if (result) {
            res.json({
                code: 200,
                message: "Cập nhật món " + food.nameFood + " thành công",
            });
        }
        else {
            res.json({
                code: 500,
                message: "Cập nhật món " + food.nameFood + " không thành công",
            });
        }
    }
    async checkNameFood(food, res) {
        const checkName = await this.foodService.checkNameFood(food.nameFood);
        if (checkName === true) {
            res.json({
                code: 500,
                message: "Món " + food.nameFood + " đã tồn tại trong thực đơn của nhà hàng ",
            });
        }
        else {
            res.json({ code: 200 });
        }
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
    (0, common_1.Post)("deleteCloud"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_dto_1.ImgCloud, Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "deleteImage", null);
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
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_dto_1.FoodDTO, Object]),
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
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, food_dto_1.FoodDTOUpdate, Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "updateFood", null);
__decorate([
    (0, common_1.Post)("checkName"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [food_dto_1.FoodDTO, Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "checkNameFood", null);
exports.FoodController = FoodController = __decorate([
    (0, common_1.Controller)("foods"),
    __metadata("design:paramtypes", [food_service_1.FoodService,
        cloudinary_service_1.CloudinaryService])
], FoodController);
//# sourceMappingURL=food.controller.js.map