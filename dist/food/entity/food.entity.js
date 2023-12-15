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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = exports.FoodSchema = exports.Food = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Category;
(function (Category) {
    Category["STARTERS"] = "Khai V\u1ECB";
    Category["FISH"] = "M\u00F3n C\u00E1";
    Category["SEEFOOD"] = "M\u00F3n H\u1EA3i S\u1EA3n";
    Category["CHIEN"] = "M\u00F3n C\u01A1m Chi\u00EAn";
    Category["PHO"] = "M\u00F3n Ph\u1EDF";
    Category["CHICKEN"] = "M\u00F3n G\u00E0";
    Category["BEEF"] = "M\u00F3n B\u00F2";
    Category["PORK"] = "M\u00F3n L\u1EE3n";
    Category["MI"] = "M\u00F3n M\u00EC";
    Category["SALAD"] = "M\u00F3n Salad";
    Category["DESSERT"] = "M\u00F3n Tr\u00E1ng Mi\u1EC7ng";
    Category["SANDWICH"] = "M\u00F3n SandWich";
    Category["SPAGHETTIS"] = "M\u00F3n M\u00EC SPAGHETTIS";
    Category["DRINKING"] = "Th\u1EE9c U\u1ED1ng";
})(Category || (exports.Category = Category = {}));
let Food = class Food {
};
exports.Food = Food;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "nameFood", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Food.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "describe", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "img", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "noiBat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "deXuat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Food.prototype, "ngonNgu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Food.prototype, "deleted", void 0);
exports.Food = Food = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Food);
exports.FoodSchema = mongoose_1.SchemaFactory.createForClass(Food);
exports.Categories = { Category };
//# sourceMappingURL=food.entity.js.map