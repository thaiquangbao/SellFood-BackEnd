"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
const hbsUtils = require("hbs-utils");
const handlebars = require("handlebars");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "public"));
    app.setBaseViewsDir((0, path_1.join)(__dirname, "..", "views"));
    const layoutsDir = (0, path_1.join)(__dirname, "..", "views/layouts");
    const layouts = fs.readdirSync(layoutsDir);
    layouts.forEach((layout) => {
        const layoutPath = (0, path_1.join)(layoutsDir, layout);
        const layoutContent = fs.readFileSync(layoutPath, "utf-8");
        handlebars.registerPartial(layout, layoutContent);
    });
    hbsUtils(hbs).registerWatchedPartials((0, path_1.join)(__dirname, "..", "views/partials"));
    app.setViewEngine("hbs");
    app.set("view options", {
        layout: "layouts/main",
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map