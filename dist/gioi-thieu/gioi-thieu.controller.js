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
exports.GioiThieuController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
const footer_service_1 = require("../footer/footer.service");
const gioi_thieu_service_1 = require("./gioi-thieu.service");
const food_entity_1 = require("../food/entity/food.entity");
const gioi_thieu_dto_1 = require("./dto/gioi-thieu.dto");
let GioiThieuController = class GioiThieuController {
    constructor(appService, footerService, introductionService) {
        this.appService = appService;
        this.footerService = footerService;
        this.introductionService = introductionService;
    }
    async gioiThieuPage(res) {
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        const introduction = await this.introductionService.findOne(process.env.ID_INTRODUCTION);
        res.render("gioiThieu/gioiThieu", {
            slideOne,
            footers,
            Category: food_entity_1.Category,
            introduction,
        });
    }
    async insertPage(res, introduction) {
        const result = this.introductionService.insert(introduction);
        result
            .then((e) => {
            if (e) {
                res.json({ code: 200, data: e });
            }
            else {
                res.json({ code: 500 });
            }
        })
            .catch((error) => {
            res.json({ code: 400, err: error });
        });
    }
    async gioiThieuQLPage(res) {
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        const introduction = await this.introductionService.findOne(process.env.ID_INTRODUCTION);
        res.render("gioiThieu/qlIntroduction", {
            slideOne,
            footers,
            Category: food_entity_1.Category,
            introduction,
        });
    }
    async updateQLPage(res) {
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        const introduction = await this.introductionService.findOne(process.env.ID_INTRODUCTION);
        res.render("gioiThieu/updateIntroduction", {
            slideOne,
            footers,
            Category: food_entity_1.Category,
            introduction,
        });
    }
    async update(res, nameCate, nameFood, name) {
        const result = await this.introductionService.updateName(process.env.ID_INTRODUCTION, nameCate, nameFood, name.newName);
        if (result === null) {
            res.json({ code: 500 });
        }
        else {
            res.json({ code: 200 });
        }
    }
    async updateCate(res, nameCate, name) {
        const result = await this.introductionService.updateCate(process.env.ID_INTRODUCTION, nameCate, name.newName);
        if (result === null) {
            res.json({ code: 500 });
        }
        else {
            res.json({ code: 200 });
        }
    }
    async updateBody(res, id, introduction) {
        const result = await this.introductionService.update(id, introduction);
        if (result === null) {
            res.json({ code: 500 });
        }
        else {
            res.json({ code: 200 });
        }
    }
};
exports.GioiThieuController = GioiThieuController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "gioiThieuPage", null);
__decorate([
    (0, common_1.Post)("insert"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, gioi_thieu_dto_1.IntroductionDTO]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "insertPage", null);
__decorate([
    (0, common_1.Get)("introductions"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "gioiThieuQLPage", null);
__decorate([
    (0, common_1.Get)("introductions/update"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "updateQLPage", null);
__decorate([
    (0, common_1.Patch)("introductions/update/:nameCate/:name"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("nameCate")),
    __param(2, (0, common_1.Param)("name")),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)("introductions/update/:nameCate"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("nameCate")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "updateCate", null);
__decorate([
    (0, common_1.Put)("introductions/update/:id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, gioi_thieu_dto_1.IntroductionBody]),
    __metadata("design:returntype", Promise)
], GioiThieuController.prototype, "updateBody", null);
exports.GioiThieuController = GioiThieuController = __decorate([
    (0, common_1.Controller)("gioi-thieu"),
    __metadata("design:paramtypes", [app_service_1.AppService,
        footer_service_1.FooterService,
        gioi_thieu_service_1.GioiThieuService])
], GioiThieuController);
//# sourceMappingURL=gioi-thieu.controller.js.map