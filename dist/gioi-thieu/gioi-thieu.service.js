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
exports.GioiThieuService = void 0;
const common_1 = require("@nestjs/common");
const gioi_thieu_entity_1 = require("./entity/gioi-thieu.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let GioiThieuService = class GioiThieuService {
    constructor(introducEntity) {
        this.introducEntity = introducEntity;
    }
    async insert(gioiThieu) {
        const result = await this.introducEntity.create(gioiThieu);
        return result;
    }
    async update(id, gioiThieu) {
        const result = await this.introducEntity.findByIdAndUpdate(id, gioiThieu);
        return result;
    }
    async findOne(id) {
        const result = await this.introducEntity.findById(id);
        return result;
    }
    async findAll() {
        const result = await this.introducEntity.find();
        return result;
    }
    async updateName(id, nameCategory, foodName, newName) {
        return this.introducEntity.findOneAndUpdate({
            _id: id,
            "foods.nameCate": nameCategory,
            "foods.food.name": foodName,
        }, {
            $set: { "foods.$[category].food.$[food].name": newName },
        }, {
            new: true,
            arrayFilters: [
                { "category.nameCate": nameCategory },
                { "food.name": foodName },
            ],
        });
    }
    async updateCate(id, nameCategory, newCategory) {
        return this.introducEntity.findOneAndUpdate({
            _id: id,
            "foods.nameCate": nameCategory,
        }, {
            $set: { "foods.$[category].nameCate": newCategory },
        }, {
            new: true,
            arrayFilters: [{ "category.nameCate": nameCategory }],
        });
    }
};
exports.GioiThieuService = GioiThieuService;
exports.GioiThieuService = GioiThieuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(gioi_thieu_entity_1.Introduction.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], GioiThieuService);
//# sourceMappingURL=gioi-thieu.service.js.map