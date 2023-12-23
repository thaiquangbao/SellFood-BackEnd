"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const food_module_1 = require("./food/food.module");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const food_entity_1 = require("./food/entity/food.entity");
const food_controller_1 = require("./food/food.controller");
const food_service_1 = require("./food/food.service");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const cloudinary_provider_1 = require("./cloudinary/cloudinary.provider");
const cloudinary_service_1 = require("./cloudinary/cloudinary.service");
const slide_1 = require("./trangchu.entity/slide");
const kyNiemKH_1 = require("./trangchu.entity/kyNiemKH");
const memory_service_1 = require("./memory.service");
const infoRes_1 = require("./trangchu.entity/infoRes");
const thucdon_controller_1 = require("./thucdon/thucdon.controller");
const footer_service_1 = require("./footer/footer.service");
const footer_1 = require("./trangchu.entity/footer");
const user_module_1 = require("./user/user.module");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const user_entity_1 = require("./user/entity/user.entity");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const middleware_service_1 = require("./middleware/middleware.service");
const icons_1 = require("./trangchu.entity/icons");
const mailer_service_1 = require("./mailer/mailer.service");
const mailer_1 = require("@nestjs-modules/mailer");
const sessionmiddleware_service_1 = require("./sessionmiddleware/sessionmiddleware.service");
const lienhe_service_1 = require("./lienhe/lienhe.service");
const lienhe_controller_1 = require("./lienhe/lienhe.controller");
const lienhe_entity_1 = require("./lienhe/entity/lienhe.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(middleware_service_1.MiddlewareService)
            .exclude({ path: "/", method: common_1.RequestMethod.GET })
            .forRoutes(food_controller_1.FoodController, app_controller_1.AppController, {
            path: "/user/signup",
            method: common_1.RequestMethod.POST,
        }, {
            path: "/user/account/general",
            method: common_1.RequestMethod.GET,
        }, {
            path: "/user/account/password",
            method: common_1.RequestMethod.GET,
        }, {
            path: "/user/updateEmail",
            method: common_1.RequestMethod.PUT,
        }, {
            path: "/user/checkPassWord",
            method: common_1.RequestMethod.POST,
        }, {
            path: "/user/updatePassword",
            method: common_1.RequestMethod.PUT,
        });
        consumer.apply(sessionmiddleware_service_1.SessionmiddlewareService).forRoutes({
            path: "/user/login/xacnhan/:userName/:sessionId",
            method: common_1.RequestMethod.GET,
        });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ".env",
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_DB),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.MAIL_HOST,
                    secure: false,
                    auth: {
                        user: process.env.USERMAILER,
                        pass: process.env.PASSWORDMAILER,
                    },
                },
            }),
            food_module_1.FoodModule,
            mongoose_1.MongooseModule.forFeature([{ name: "Memory", schema: kyNiemKH_1.MemorySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Slide", schema: slide_1.SlideSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Food", schema: food_entity_1.FoodSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Footer", schema: footer_1.FooterSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "User", schema: user_entity_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Icons", schema: icons_1.IconsSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Reply", schema: lienhe_entity_1.ReplySchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: "Information", schema: infoRes_1.InformationSchema },
            ]),
            cloudinary_module_1.CloudinaryModule,
            user_module_1.UserModule,
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
        ],
        controllers: [
            app_controller_1.AppController,
            food_controller_1.FoodController,
            thucdon_controller_1.ThucdonController,
            user_controller_1.UserController,
            lienhe_controller_1.LienheController,
        ],
        providers: [
            app_service_1.AppService,
            food_service_1.FoodService,
            memory_service_1.MemoryService,
            cloudinary_provider_1.CloudinaryProvider,
            cloudinary_service_1.CloudinaryService,
            footer_service_1.FooterService,
            user_service_1.UserService,
            middleware_service_1.MiddlewareService,
            mailer_service_1.MailerService,
            sessionmiddleware_service_1.SessionmiddlewareService,
            lienhe_service_1.LienheService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map