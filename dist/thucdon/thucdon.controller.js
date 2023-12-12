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
exports.ThucdonController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const footer_service_1 = require("../footer/footer.service");
const food_service_1 = require("../food/food.service");
const food_entity_1 = require("../food/entity/food.entity");
let ThucdonController = class ThucdonController {
    constructor(foodService, appService, footerService) {
        this.foodService = foodService;
        this.appService = appService;
        this.footerService = footerService;
    }
    async thucDon(res) {
        const slides = await this.appService.findAllSlide();
        const foods = await this.foodService.findAllFood();
        const footers = await this.footerService.findAllFooter();
        const categories = [
            food_entity_1.Category.Lau,
            food_entity_1.Category.CANH,
            food_entity_1.Category.CHIEN,
            food_entity_1.Category.XAO,
            food_entity_1.Category.Hap,
            food_entity_1.Category.KHO,
            food_entity_1.Category.Luoc,
            food_entity_1.Category.Nuong,
        ];
        const listFoodArrays = {};
        for (const category of categories) {
            const foods = await this.foodService.findAllFoodC(category);
            listFoodArrays[category] = foods;
        }
        return res.render("thucdons/thucdon", {
            Category: food_entity_1.Category,
            slides,
            foods,
            footers,
            listFoodArrays,
        });
    }
    async test() {
        try {
            const categories = [food_entity_1.Category.CANH, food_entity_1.Category.Lau, food_entity_1.Category.CHIEN];
            const result = {};
            for (const category of categories) {
                const foods = await this.foodService.findAllFoodC(category);
                result[category] = foods;
            }
            console.log(result);
            return result;
        }
        catch (error) {
            console.error("Error fetching foods:", error);
            throw new Error("Unable to fetch foods.");
        }
    }
};
exports.ThucdonController = ThucdonController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ThucdonController.prototype, "thucDon", null);
__decorate([
    (0, common_1.Get)("test"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThucdonController.prototype, "test", null);
exports.ThucdonController = ThucdonController = __decorate([
    (0, common_1.Controller)("thucdon"),
    __metadata("design:paramtypes", [food_service_1.FoodService,
        app_service_1.AppService,
        footer_service_1.FooterService])
], ThucdonController);
//# sourceMappingURL=thucdon.controller.js.map