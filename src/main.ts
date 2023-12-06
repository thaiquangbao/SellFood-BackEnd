import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express/interfaces";
import handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";
//import hbs from "hbs";
import * as chokidar from "chokidar";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
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
  // hbsUtils(hbs).registerWatchedPartials(
  //   join(__dirname, "..", "views/partials"),
  // );
  const partialsDir1 = join(__dirname, "..", "views/partials");
  const watcher = chokidar.watch(partialsDir1);

  watcher.on("change", (partialPath: string) => {
    const partialName = path.parse(partialPath).name;
    const partialContent = fs.readFileSync(partialPath, "utf8");
    handlebars.registerPartial(partialName, handlebars.compile(partialContent));
    console.log(`Partial ${partialName} updated.`);
  });
  app.setViewEngine("hbs");
  app.set("view options", {
    layout: "layouts/main",
  });
  await app.listen(3000);
}
bootstrap();
