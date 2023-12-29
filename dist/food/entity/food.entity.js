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
    Category["BREAKFAST"] = "\u0102N S\u00C1NG";
    Category["STARTERS"] = "KHAI V\u1ECA";
    Category["RICE"] = "C\u01A0M";
    Category["SPRINGROLLS"] = "SPRING ROLLS";
    Category["PANCAKE"] = "B\u00C1NH X\u00C8O";
    Category["PORRIDGE"] = "CH\u00C1O";
    Category["SOUP"] = "SOUP";
    Category["SOUPV"] = "SOUP VI\u1EC6T NAM";
    Category["LOBSTER"] = "CRAB-LOBSTER";
    Category["HOTPOT"] = "L\u1EA8U";
    Category["CLAM"] = "CLAM-NAIL";
    Category["THAIFOOD"] = "M\u00D3N TH\u00C1I";
    Category["VEGETABLE"] = "RAU";
    Category["VEGAN"] = "M\u00D3N CHAY";
    Category["CHIEN"] = "C\u01A0M CHI\u00CAN";
    Category["PHO"] = "PH\u1EDE";
    Category["FISH"] = "C\u00C1C M\u00D3N C\u00C1";
    Category["CHICKEN"] = "C\u00C1C M\u00D3N G\u00C0";
    Category["BEEF"] = "C\u00C1C M\u00D3N B\u00D2";
    Category["TOM"] = "C\u00C1C M\u00D3N T\u00D4M";
    Category["MUC"] = "C\u00C1C M\u00D3N M\u1EF0C";
    Category["PORK"] = "C\u00C1C M\u00D3N HEO";
    Category["MI"] = "M\u00CC";
    Category["SALAD"] = "SALAD";
    Category["SANDWICH"] = "SANDWICH";
    Category["SPAGHETTIS"] = "SPAGHETTI";
    Category["DESSERT"] = "TR\u00C1NG MI\u1EC6NG";
    Category["DRINKING"] = "TH\u1EE8C U\u1ED0NG";
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