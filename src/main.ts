import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express/interfaces";
//import * as hbs from "hbs";
//import * as hbsUtils from "hbs-utils";
import * as handlebars from "handlebars";
import * as fs from "fs";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  const layoutsDir = join(__dirname, "..", "views/layouts");
  const layouts = fs.readdirSync(layoutsDir);

  layouts.forEach((layout) => {
    const layoutPath = join(layoutsDir, layout);
    const layoutContent = fs.readFileSync(layoutPath, "utf-8");
    handlebars.registerPartial(layout, layoutContent);
  });
  //hbsUtils(hbs).registerPartials(join(__dirname, "..", "views/layouts"));
  // hbsUtils(handlebars).registerWatchedPartials(
  //   join(__dirname, "..", "views/partials"),
  // );
  app.setViewEngine("hbs");
  app.set("view options", {
    layout: "layouts/main",
  });
  await app.listen(3000);
}
bootstrap();
