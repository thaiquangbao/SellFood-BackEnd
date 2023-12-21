import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express/interfaces";
import handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
import * as hbs from "hbs";
import hbsUtils from "hbs-utils";
import cookieParser from "cookie-parser";
//import session from "express-session";
// import * as hbsUtils from "hbs-utils";
// import * as cookieParser from "cookie-parser";
import * as session from "express-session";
//import * as passport from "passport";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));

  const partialsDir = path.join(__dirname, "..", "views/layouts");

  // Đọc danh sách các tệp trong thư mục
  const partialFiles = fs.readdirSync(partialsDir);

  // Đăng ký từng partial
  partialFiles.forEach((file) => {
    const partialName = path.parse(file).name;
    const partialPath = path.join(partialsDir, file);
    const partialContent = fs.readFileSync(partialPath, "utf8");
    handlebars.registerPartial(partialName, handlebars.compile(partialContent));
  });
  hbsUtils(hbs).registerWatchedPartials(
    join(__dirname, "..", "views/partials"),
  );
  app.setViewEngine("hbs");
  app.set("view options", {
    layout: "layouts/main",
  });
  app.use(
    session({
      name: "Session_JS",
      secret: process.env.SESSION_SECURITY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
