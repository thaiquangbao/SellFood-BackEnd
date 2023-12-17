import { Module } from "@nestjs/common";
import { FoodController } from "./food.controller";
import { FoodService } from "./food.service";
import { MongooseModule } from "@nestjs/mongoose";
import { FoodSchema } from "./entity/food.entity";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { CloudinaryProvider } from "src/cloudinary/cloudinary.provider";
import { SlideSchema } from "src/trangchu.entity/slide";
import { AppService } from "src/app.service";
import { AppController } from "src/app.controller";
import { MemoryService } from "src/memory.service";
import { MemorySchema } from "src/trangchu.entity/kyNiemKH";
import { InformationSchema } from "src/trangchu.entity/infoRes";
import { ThucdonController } from "src/thucdon/thucdon.controller";
import { FooterService } from "src/footer/footer.service";
import { FooterSchema } from "src/trangchu.entity/footer";
import { IconsSchema } from "src/trangchu.entity/icons";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    MongooseModule.forFeature([{ name: "Slide", schema: SlideSchema }]),
    MongooseModule.forFeature([{ name: "Memory", schema: MemorySchema }]),
    MongooseModule.forFeature([{ name: "Footer", schema: FooterSchema }]),
    MongooseModule.forFeature([{ name: "Icons", schema: IconsSchema }]),
    MongooseModule.forFeature([
      { name: "Information", schema: InformationSchema },
    ]),
    CloudinaryModule,
  ],
  controllers: [FoodController, AppController, ThucdonController],
  providers: [
    FoodService,
    AppService,
    MemoryService,
    CloudinaryService,
    CloudinaryProvider,
    FooterService,
  ],
})
export class FoodModule {}
