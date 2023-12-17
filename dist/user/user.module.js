"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entity/user.entity");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const footer_service_1 = require("../footer/footer.service");
const footer_1 = require("../trangchu.entity/footer");
const app_controller_1 = require("../app.controller");
const app_service_1 = require("../app.service");
const slide_1 = require("../trangchu.entity/slide");
const infoRes_1 = require("../trangchu.entity/infoRes");
const food_service_1 = require("../food/food.service");
const food_controller_1 = require("../food/food.controller");
const food_entity_1 = require("../food/entity/food.entity");
const kyNiemKH_1 = require("../trangchu.entity/kyNiemKH");
const memory_service_1 = require("../memory.service");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const icons_1 = require("../trangchu.entity/icons");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        secret: config.get("JWT_SECRET"),
                        signOptions: {
                            expiresIn: config.get("JWT_EXPIRES"),
                        },
                    };
                },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: "Food", schema: food_entity_1.FoodSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Memory", schema: kyNiemKH_1.MemorySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Slide", schema: slide_1.SlideSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Footer", schema: footer_1.FooterSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "User", schema: user_entity_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Icons", schema: icons_1.IconsSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: "Information", schema: infoRes_1.InformationSchema },
            ]),
        ],
        controllers: [user_controller_1.UserController, app_controller_1.AppController, food_controller_1.FoodController],
        providers: [
            user_service_1.UserService,
            footer_service_1.FooterService,
            app_service_1.AppService,
            food_service_1.FoodService,
            memory_service_1.MemoryService,
            cloudinary_service_1.CloudinaryService,
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map