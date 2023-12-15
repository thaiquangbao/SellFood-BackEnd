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
let UserService = class UserService {
    constructor(userEntity, jwtService) {
        this.userEntity = userEntity;
        this.jwtService = jwtService;
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
        const token = this.jwtService.sign({ id: (await findUserName).id });
        return { token };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map