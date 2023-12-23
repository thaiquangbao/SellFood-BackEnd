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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./entity/user.dto");
const app_service_1 = require("../app.service");
const footer_service_1 = require("../footer/footer.service");
const food_entity_1 = require("../food/entity/food.entity");
const mailer_1 = require("@nestjs-modules/mailer");
let UserController = class UserController {
    constructor(userService, appService, footerService, mailService) {
        this.userService = userService;
        this.appService = appService;
        this.footerService = footerService;
        this.mailService = mailService;
    }
    signup(userDTO) {
        return this.userService.signUp(userDTO);
    }
    async login(loginDTO, res, session) {
        const result = this.userService.loGin(loginDTO);
        result
            .then(async (e) => {
            if (e) {
                session.authenticated = true;
                session.userName = e.userName;
                res.json({
                    code: 200,
                    session: session.id,
                    sessionN: session.userName,
                });
            }
        })
            .catch((error) => {
            res.status(500).json({ error: error.message });
        });
    }
    async loginPage(res) {
        const slides = await this.appService.findAllSlide();
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        return res.render("users/login", { slides, slideOne, footers, Category: food_entity_1.Category });
    }
    async xacNhanPage(res, session, userName) {
        const slides = await this.appService.findAllSlide();
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        const user = await this.userService.findOneUserName(userName);
        const sessionId = session.id;
        res.render("users/formXacNhan", {
            user,
            slides,
            slideOne,
            footers,
            Category: food_entity_1.Category,
            sessionId,
        });
    }
    async sendMa(res, session, user) {
        session.maHOA = generateRandomString(6);
        const findUser = this.userService.findOneUserName(user.userName);
        const result = await this.mailService.sendMail({
            to: (await findUser).email,
            from: "haisancomnieuphanthiet@gmail.com",
            subject: "Welcome to BOMRESTAURANT",
            html: `<b>BOM RESTAURANT: Mã xác nhận của bạn là ${session.maHOA}</b>`,
            context: {
                name: user.userName,
            },
        });
        if (result) {
            res.json({
                code: 200,
                message: "Kiểm tra hộp thư gmail để nhận mã xác nhận",
            });
        }
        else {
            res.json({ code: 500 });
        }
    }
    async checkMaXacNhan(res, ma, userName, session) {
        if (ma.vertical === session.maHOA) {
            const result = await this.userService.xacThuc(userName);
            res.json({
                code: 200,
                token: result.token,
                session: session.maHOA,
            });
        }
        else {
            res.json({
                code: 500,
                session: session.maHOA,
            });
        }
    }
    async account(res, req) {
        const slides = await this.appService.findAllSlide();
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        const ma = String(req.user);
        const users = await this.userService.findOneByIdU(ma);
        res.render("users/account", { users, slides, slideOne, footers });
    }
    async passWordPage(res, req) {
        const slides = await this.appService.findAllSlide();
        const slideOne = await this.appService.findSlideOne();
        const footers = await this.footerService.findAllFooter();
        const ma = String(req.user);
        const users = await this.userService.findOneByIdU(ma);
        res.render("users/password", { users, slides, slideOne, footers });
    }
    async email(res, req, user) {
        const ma = String(req.user);
        const update = this.userService.updateUser(ma, user);
        if (update) {
            res.json({ code: 200, message: "Cập nhật email thành công" });
        }
        else {
            res.json({ code: 500, message: "Cập nhật email không thành công" });
        }
    }
    async password(res, req, user) {
        const ma = String(req.user);
        const update = this.userService.updatePassWord(ma, user.passWord);
        if (update) {
            res.json({ code: 200, message: "Cập nhật mật khẩu thành công" });
        }
        else {
            res.json({ code: 500 });
        }
    }
    async checkPass(res, req, user) {
        const ma = String(req.user);
        const check = this.userService.checkPassword(ma, user);
        if ((await check) === true) {
            res.json({ code: 200 });
        }
        else {
            res.json({ code: 500, message: "Mật khẩu hiện tại không đúng" });
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("login/accept"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("login"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginPage", null);
__decorate([
    (0, common_1.Get)("login/xacnhan/:userName/:sessionId"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Param)("userName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "xacNhanPage", null);
__decorate([
    (0, common_1.Post)("sendEmail"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.UserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "sendMa", null);
__decorate([
    (0, common_1.Post)("checkMa/:userName"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)("userName")),
    __param(3, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserCheck, String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkMaXacNhan", null);
__decorate([
    (0, common_1.Get)("account/general"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "account", null);
__decorate([
    (0, common_1.Get)("account/password"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "passWordPage", null);
__decorate([
    (0, common_1.Put)("updateEmail"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.UpdateEmail]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "email", null);
__decorate([
    (0, common_1.Put)("updatePassword"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.UpdatePassWord]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "password", null);
__decorate([
    (0, common_1.Post)("checkPassWord"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.UpdatePassWord]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkPass", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService,
        app_service_1.AppService,
        footer_service_1.FooterService,
        mailer_1.MailerService])
], UserController);
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
//# sourceMappingURL=user.controller.js.map