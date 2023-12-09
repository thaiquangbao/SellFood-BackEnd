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
let AppModule = class AppModule {
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
            food_module_1.FoodModule,
            mongoose_1.MongooseModule.forFeature([{ name: "Memory", schema: kyNiemKH_1.MemorySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Slide", schema: slide_1.SlideSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Food", schema: food_entity_1.FoodSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: "Information", schema: infoRes_1.InformationSchema },
            ]),
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [app_controller_1.AppController, food_controller_1.FoodController, thucdon_controller_1.ThucdonController],
        providers: [
            app_service_1.AppService,
            food_service_1.FoodService,
            memory_service_1.MemoryService,
            cloudinary_provider_1.CloudinaryProvider,
            cloudinary_service_1.CloudinaryService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map