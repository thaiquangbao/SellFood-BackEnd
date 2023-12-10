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
exports.FooterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const footer_1 = require("../trangchu.entity/footer");
let FooterService = class FooterService {
    constructor(footerEntity) {
        this.footerEntity = footerEntity;
    }
    async findAllFooter() {
        const footers = await this.footerEntity.find();
        return footers;
    }
    async insertFooter(footer) {
        const newfooter = await this.footerEntity.create(footer);
        return newfooter;
    }
    async findOneFooter(id) {
        const footer = await this.footerEntity.findById(id);
        return footer;
    }
    async updateFooter(id, footer) {
        const result = await this.footerEntity.findByIdAndUpdate(id, footer, {
            new: true,
            runValidators: true,
        });
        return result;
    }
};
exports.FooterService = FooterService;
exports.FooterService = FooterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(footer_1.Footer.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], FooterService);
//# sourceMappingURL=footer.service.js.map