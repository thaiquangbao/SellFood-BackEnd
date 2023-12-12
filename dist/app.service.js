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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slide_1 = require("./trangchu.entity/slide");
const infoRes_1 = require("./trangchu.entity/infoRes");
let AppService = class AppService {
    constructor(slideEntity, informationEntity) {
        this.slideEntity = slideEntity;
        this.informationEntity = informationEntity;
    }
    async findAllSlide() {
        const slides = await this.slideEntity.find({ sttSlide: { $ne: 0 } });
        return slides;
    }
    async findSlideOne() {
        const slide = await this.slideEntity.findOne({ sttSlide: 0 });
        return slide;
    }
    async insertSlide(slide) {
        const newslide = await this.slideEntity.create(slide);
        return newslide;
    }
    async findOneSlide(id) {
        const slide = await this.slideEntity.findById(id);
        return slide;
    }
    async updateSlide(id, slide) {
        const result = await this.slideEntity.findByIdAndUpdate(id, slide, {
            new: true,
            runValidators: true,
        });
        return result;
    }
    async findAllInformation() {
        const informations = await this.informationEntity.find();
        return informations;
    }
    async insertInformation(information) {
        const newinformation = await this.informationEntity.create(information);
        return newinformation;
    }
    async findOneInformation(id) {
        const information = await this.informationEntity.findById(id);
        return information;
    }
    async updateInformation(id, information) {
        const result = await this.informationEntity.findByIdAndUpdate(id, information, {
            new: true,
            runValidators: true,
        });
        return result;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(slide_1.Slide.name)),
    __param(1, (0, mongoose_1.InjectModel)(infoRes_1.Information.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Model])
], AppService);
//# sourceMappingURL=app.service.js.map