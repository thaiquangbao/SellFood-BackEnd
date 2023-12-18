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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entity/user.entity");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const mailer_1 = require("@nestjs-modules/mailer");
let vertical = generateRandomString(6);
let UserService = class UserService {
    constructor(userEntity, jwtService, mailService) {
        this.userEntity = userEntity;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async signUp(user) {
        const { userName, passWord, email } = user;
        const hashedPassword = await bcrypt.hash(passWord, 10);
        const insert = this.userEntity.create({
            userName,
            passWord: hashedPassword,
            email,
        });
        const token = this.jwtService.sign({ id: (await insert)._id });
        return { token };
    }
    async loGin(loginDTO) {
        const { userName, passWord } = loginDTO;
        const findUserName = await this.userEntity.findOne({
            userName,
        });
        if (!findUserName) {
            throw new common_1.UnauthorizedException("Tài khoản or mật khẩu không đúng");
        }
        const checkPassword = await bcrypt.compare(passWord, (await findUserName).passWord);
        if (!checkPassword) {
            throw new common_1.UnauthorizedException("Tài khoản or mật khẩu không đúng");
        }
        console.log(vertical);
        if (vertical !== "" || vertical === "") {
            const reset = generateRandomString(6);
            vertical = reset;
        }
        await this.mailService.sendMail({
            to: findUserName.email,
            from: "haisancomnieuphanthiet@gmail.com",
            subject: "Welcome to BOMRESTAURANT",
            html: `<b>BOM RESTAURANT: Mã xác nhận của bạn là ${vertical}</b>`,
            context: {
                name: findUserName.userName,
            },
        });
        console.log(vertical);
        return findUserName;
    }
    async xacThuc(ma, userName) {
        const userId = this.userEntity.findOne({ userName: userName });
        if (ma.vertical === vertical) {
            const token = this.jwtService.sign({ id: (await userId).id });
            console.log(vertical);
            vertical = "";
            console.log(vertical);
            return { token, vertical };
        }
        else {
            throw new common_1.UnauthorizedException("Mã xác nhận không đúng");
        }
    }
    async findOneUserName(userName) {
        const user = this.userEntity.findOne({ userName: userName });
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        mailer_1.MailerService])
], UserService);
function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
//# sourceMappingURL=user.service.js.map