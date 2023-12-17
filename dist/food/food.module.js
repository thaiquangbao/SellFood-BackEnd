"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModule = void 0;
const common_1 = require("@nestjs/common");
const food_controller_1 = require("./food.controller");
const food_service_1 = require("./food.service");
const mongoose_1 = require("@nestjs/mongoose");
const food_entity_1 = require("./entity/food.entity");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const cloudinary_module_1 = require("../cloudinary/cloudinary.module");
const cloudinary_provider_1 = require("../cloudinary/cloudinary.provider");
const slide_1 = require("../trangchu.entity/slide");
const app_service_1 = require("../app.service");
const app_controller_1 = require("../app.controller");
const memory_service_1 = require("../memory.service");
const kyNiemKH_1 = require("../trangchu.entity/kyNiemKH");
const infoRes_1 = require("../trangchu.entity/infoRes");
const thucdon_controller_1 = require("../thucdon/thucdon.controller");
const footer_service_1 = require("../footer/footer.service");
const footer_1 = require("../trangchu.entity/footer");
const icons_1 = require("../trangchu.entity/icons");
let FoodModule = class FoodModule {
};
exports.FoodModule = FoodModule;
exports.FoodModule = FoodModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "Food", schema: food_entity_1.FoodSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Slide", schema: slide_1.SlideSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Memory", schema: kyNiemKH_1.MemorySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Footer", schema: footer_1.FooterSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "Icons", schema: icons_1.IconsSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: "Information", schema: infoRes_1.InformationSchema },
            ]),
            cloudinary_module_1.CloudinaryModule,
        ],
        controllers: [food_controller_1.FoodController, app_controller_1.AppController, thucdon_controller_1.ThucdonController],
        providers: [
            food_service_1.FoodService,
            app_service_1.AppService,
            memory_service_1.MemoryService,
            cloudinary_service_1.CloudinaryService,
            cloudinary_provider_1.CloudinaryProvider,
            footer_service_1.FooterService,
        ],
    })
], FoodModule);
//# sourceMappingURL=food.module.js.map