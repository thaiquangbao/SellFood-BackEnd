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
const food_entity_1 = require("../food/entity/food.entity");
const google_spreadsheet_1 = require("google-spreadsheet");
const google_auth_library_1 = require("google-auth-library");
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0Tc+cxdGdNgRO\nU0waAvz+sTLK96yxv8/USgyihSbJmJ63HjxNuNSwco9Pb9WDpNsbn0+pdqVEmWMS\n9fV18OPVgQBtAvR0VRbphaNyJNIelvUNVqZXxSux6tnI3/m0keqe121mnW6I8lkX\nHbkuAEsCPGmF7/spsVABSQoVMIU/NskcTAOWLRKFMdEZ6tJHwEqPD9iBfB3aWgKu\n0CJsSt+UmsbtUULHkwxQMrEiTWaXbpHj4UB+BuNWzTW4kxYsF4V3SCKpTh0dZ83T\nUocYJY3Vac6UDWHZy6kwwlcMjP4Ezgj0uxzG6P7ypPr9t0jkJK07ptGEH51gOB4O\nBcZ3a3RrAgMBAAECggEALtgkf4O5wRGersbfd8ac+oMJQkh0+r1t/qa6f6L+f9QC\nMGtPmZXS1ID/ENFqdMhpENUkOlAUAi2j2vJCMsFCQF9CwA/LeUn+KO/KlkZQvRfV\nVQDVOOqGPrRYnuLqGmrqvRgVWVq/tB7a3LGhQf1bf5o4hE7kP2HM+niCgRzZEaH3\njxZRhuW5pwQhyABQoQN3OmbHLZcmIupbRzNgTWQGV26usfuPzp9AunoKxXakSZV7\neFDxJQWb1Kz5mlRXhYq/n1OraIwynw5rGuamm4ul7IlboURvC+2wqFjomDvnVJn0\nkMhjIMWCB0sTYSQ2ItH/AvNUwEQHCL+ohlbzz0s0sQKBgQDdpsQRW9Z3rb6PAaNB\n7JjzxlmhU26b6t4z+gJy3rvj9NqAPTLbudIYEYMB0FcShtRiKrW1UiHm1YNshoWe\nny2YpEQJFQzghOBWVFcHzuJX2zKGOlIx0yT+lvkYn2azQZ5i7e7sQsyfU0oLIO8Z\nWIJ1N0FnFvBg7K0VuzmbhShjiQKBgQDQPrsCu6Zqx123VdigaJA78trJby3hxGqH\nhb/Q45GK+bCT5b6aYVjcpOHaTCcLm6n46LB5xs2fz3FajH0WsnOz7lCpbiHTf2uT\nFJGZNBbpLRcHuI4+UZqsvDFNNB1Snj2wTKK5d4wOXJGEy5pqSVe1SgSQqpsIPQQW\n+4cMxHr3UwKBgQCcbm8gRS2W53N+4EwFYeMM4Scu2YBN4DQUgNUrlxEKMCvpp8d2\nFa42OF26cPyS4b+QzM3Te3TbwkLv2/z/1x3KBdzSgB3Hc2AU7Y9Cvns2QEhnPU/3\nRCpu18RT4WQNDTmoXn5qFjbuF01Bj2vP+oyQB4BMLn9WGJOLq8hbf13i6QKBgB27\nZx37xsXmExZS9mvoofc9NEmgSw+56G/TA9ECPMx32+Mx4SXPkk1maSyuxMBeiEUW\ni+PHI6KWjpucBVwRPH3LH88g/0lgHu7P9/3EtySxoGEk04JISmoxMGTSdQFPwIUE\nXBNY4zFFvC0WmMRmFlS27bHt+daSR5w0a1LCVsArAoGAVx/ptFjvi1MqPrWIei3C\nDGdMrLPd+hyYzJrC4ccqZ8B5OXRT++TVXCNkZsbwC/RXBaH0ycucE8Lx2Qu0j0cM\nAHmEnm0P3jjR239xnuesiY7XZZAsYeCwAIDx74dg7it0ozB0AWlTDVc2CELCP4cb\nTLnO8vGczEneIwdEzrEvjZE=\n-----END PRIVATE KEY-----\n";
let LienheController = class LienheController {
    constructor(appService, footerService, lienheService) {
        this.appService = appService;
        this.footerService = footerService;
        this.lienheService = lienheService;
    }
    async lienhePage(res) {
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        res.render("lienhe/lien-he", { slideOne, footers, Category: food_entity_1.Category });
    }
    async upReply(res, reply) {
        const result = writeDataGoogleSheet(reply);
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
const writeDataGoogleSheet = async (data) => {
    const serviceAccountAuth = new google_auth_library_1.JWT({
        email: process.env.CLIENT_EMAIL,
        key: PRIVATE_KEY,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new google_spreadsheet_1.GoogleSpreadsheet(process.env.SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
        "Họ tên": data.hoTen,
        "Số điện thoại": data.sdt,
        "Địa chỉ": data.address,
        Email: data.email,
        "Tiêu đề": data.title,
        "Nội dung": data.noiDung,
    });
};
//# sourceMappingURL=lienhe.controller.js.map