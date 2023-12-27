"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const handlebars_1 = require("handlebars");
const fs = require("fs");
const path = require("path");
const hbs = require("hbs");
const hbsUtils = require("hbs-utils");
const cookieParser = require("cookie-parser");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "public"));
    app.setBaseViewsDir((0, path_1.join)(__dirname, "..", "views"));
    const partialsDir = path.join(__dirname, "..", "views/layouts");
    const partialFiles = fs.readdirSync(partialsDir);
    partialFiles.forEach((file) => {
        const partialName = path.parse(file).name;
        const partialPath = path.join(partialsDir, file);
        const partialContent = fs.readFileSync(partialPath, "utf8");
        handlebars_1.default.registerPartial(partialName, handlebars_1.default.compile(partialContent));
    });
    hbsUtils(hbs).registerWatchedPartials((0, path_1.join)(__dirname, "..", "views/partials"));
    app.setViewEngine("hbs");
    app.set("view options", {
        layout: "layouts/main",
    });
    app.use(session({
        name: "Session_JS",
        secret: process.env.SESSION_SECURITY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000,
        },
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map