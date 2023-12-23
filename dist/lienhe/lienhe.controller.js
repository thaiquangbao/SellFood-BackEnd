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
exports.LienheController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const footer_service_1 = require("../footer/footer.service");
const lienhe_dto_1 = require("./entity/lienhe.dto");
const lienhe_service_1 = require("./lienhe.service");
let LienheController = class LienheController {
    constructor(appService, footerService, linheService) {
        this.appService = appService;
        this.footerService = footerService;
        this.linheService = linheService;
    }
    async lienhePage(res) {
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        res.render("lienhe/lien-he", { slideOne, footers });
    }
    async upReply(res, reply) {
        const result = await this.linheService.insertLH(reply);
        if (result) {
            res.json({ code: 200 });
        }
        else {
            res.json({ code: 500 });
        }
    }
};
exports.LienheController = LienheController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LienheController.prototype, "lienhePage", null);
__decorate([
    (0, common_1.Post)("up-reply"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, lienhe_dto_1.ReplyDTO]),
    __metadata("design:returntype", Promise)
], LienheController.prototype, "upReply", null);
exports.LienheController = LienheController = __decorate([
    (0, common_1.Controller)("lien-he"),
    __metadata("design:paramtypes", [app_service_1.AppService,
        footer_service_1.FooterService,
        lienhe_service_1.LienheService])
], LienheController);
//# sourceMappingURL=lienhe.controller.js.map