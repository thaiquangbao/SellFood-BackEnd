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

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    MongooseModule.forFeature([{ name: "Slide", schema: SlideSchema }]),
    MongooseModule.forFeature([{ name: "Memory", schema: MemorySchema }]),
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
  ],
})
export class FoodModule {}
