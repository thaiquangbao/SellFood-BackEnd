import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express/interfaces";
import * as hbs from "hbs";
import * as hbsUtils from "hbs-utils";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));

  // Loại bỏ dòng này: hbs.registerPartials(join(__dirname, "..", "views/layouts"));

  const partialsDir = join(__dirname, "..", "views/layouts");
  const helpers = hbsUtils(hbs);
  helpers.registerPartials(partialsDir);
  helpers.registerWatchedPartials(join(__dirname, "..", "views/partials"));

  app.setViewEngine("hbs");
  app.set("view options", {
    layout: "layouts/main",
  });
  await app.listen(3000);
}

bootstrap();
