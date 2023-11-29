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
exports.FoodSchema = exports.Food = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Category;
(function (Category) {
    Category["KHO"] = "Kho";
    Category["XAO"] = "Xao";
    Category["CHIEN"] = "Chien";
    Category["CANH"] = "Canh";
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
exports.Food = Food = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Food);
exports.FoodSchema = mongoose_1.SchemaFactory.createForClass(Food);
//# sourceMappingURL=food.entity.js.map