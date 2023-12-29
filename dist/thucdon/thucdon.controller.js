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
const randomMa = generateRandomString(6);
let ThucdonController = class ThucdonController {
    constructor(foodService, appService, footerService) {
        this.foodService = foodService;
        this.appService = appService;
        this.footerService = footerService;
    }
    async thucDon(res) {
        const footers = await this.footerService.findAllFooter();
        const slideOne = await this.appService.findSlideOne();
        const categories = [
            food_entity_1.Category.BREAKFAST,
            food_entity_1.Category.STARTERS,
            food_entity_1.Category.RICE,
            food_entity_1.Category.CHIEN,
            food_entity_1.Category.SPRINGROLLS,
            food_entity_1.Category.PANCAKE,
            food_entity_1.Category.PORRIDGE,
            food_entity_1.Category.SOUP,
            food_entity_1.Category.SOUPV,
            food_entity_1.Category.LOBSTER,
            food_entity_1.Category.HOTPOT,
            food_entity_1.Category.CLAM,
            food_entity_1.Category.THAIFOOD,
            food_entity_1.Category.VEGETABLE,
            food_entity_1.Category.VEGAN,
            food_entity_1.Category.BEEF,
            food_entity_1.Category.CHICKEN,
            food_entity_1.Category.FISH,
            food_entity_1.Category.MI,
            food_entity_1.Category.PHO,
            food_entity_1.Category.TOM,
            food_entity_1.Category.MUC,
            food_entity_1.Category.PORK,
            food_entity_1.Category.SALAD,
            food_entity_1.Category.SANDWICH,
            food_entity_1.Category.SPAGHETTIS,
            food_entity_1.Category.DESSERT,
            food_entity_1.Category.DRINKING,
        ];
        const listFoodArrays = {};
        for (const category of categories) {
            const foods = await this.foodService.findAllFoodC(category);
            listFoodArrays[category] = foods;
        }
        return res.render("thucdons/thucdon", {
            Category: food_entity_1.Category,
            footers,
            listFoodArrays,
            slideOne,
        });
    }
    async test(session) {
        session.authenticated = true;
        session.maHoa = randomMa;
        console.log(session.maHoa);
        console.log(session.id);
        console.log(session);
        return session;
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
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ThucdonController.prototype, "test", null);
exports.ThucdonController = ThucdonController = __decorate([
    (0, common_1.Controller)("thucdon"),
    __metadata("design:paramtypes", [food_service_1.FoodService,
        app_service_1.AppService,
        footer_service_1.FooterService])
], ThucdonController);
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
//# sourceMappingURL=thucdon.controller.js.map