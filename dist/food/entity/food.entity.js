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
    Category["KHO"] = "Kho";
    Category["XAO"] = "X\u00E0o";
    Category["CHIEN"] = "Chi\u00EAn";
    Category["CANH"] = "Canh";
    Category["Nuong"] = "Nu\u1EDBng";
    Category["Lau"] = "L\u1EA9u";
    Category["Hap"] = "H\u1EA5p";
    Category["Luoc"] = "Lu\u1ED9c";
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
exports.Food = Food = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Food);
exports.FoodSchema = mongoose_1.SchemaFactory.createForClass(Food);
exports.Categories = { Category };
//# sourceMappingURL=food.entity.js.map