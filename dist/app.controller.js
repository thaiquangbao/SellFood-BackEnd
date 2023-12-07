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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const food_service_1 = require("./food/food.service");
const slideDTO_1 = require("./trangchu.entity/dto/slideDTO");
let AppController = class AppController {
    constructor(foodService, appService) {
        this.foodService = foodService;
        this.appService = appService;
    }
    async getAllFood(res) {
        const foods = await this.foodService.findAllFood();
        const slides = await this.appService.findAllSlide();
        return res.render("index", { foods, slides });
    }
    async getListSlide(res) {
        const slides = await this.appService.findAllSlide();
        return res.render("trang-chu/slider", { slides });
    }
    async insert(slide) {
        const result = await this.appService.insertSlide(slide);
        return result;
    }
    async findOne(id, res) {
        const slide = await this.appService.findOneSlide(id);
        const slides = await this.appService.findAllSlide();
        return res.render("trang-chu/updateslider", { slide, slides });
    }
    async update(id, slide, res) {
        const result = await this.appService.updateSlide(id, slide);
        if (result) {
            res.json({
                code: 200,
            });
        }
        else {
            res.json({
                code: 500,
            });
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllFood", null);
__decorate([
    (0, common_1.Get)("slide"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getListSlide", null);
__decorate([
    (0, common_1.Post)("slide/insert"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [slideDTO_1.SlideDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "insert", null);
__decorate([
    (0, common_1.Get)("slide/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)("slide/update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, slideDTO_1.UpdateSlideDTO, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "update", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [food_service_1.FoodService,
        app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map