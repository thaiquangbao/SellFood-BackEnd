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
  hbs.registerPartials(join(__dirname, "..", "views/layouts"));
  hbsUtils(hbs).registerWatchedPartials(
    join(__dirname, "..", "views/partials"),
  );

  app.setViewEngine("hbs");
  app.set("view options", {
    layout: "layouts/main",
  });
  await app.listen(3000);
}
bootstrap();
