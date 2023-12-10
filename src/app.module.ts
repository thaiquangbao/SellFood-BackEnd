import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FoodModule } from "./food/food.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { FoodSchema } from "./food/entity/food.entity";
import { FoodController } from "./food/food.controller";
import { FoodService } from "./food/food.service";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { CloudinaryProvider } from "./cloudinary/cloudinary.provider";
import { CloudinaryService } from "./cloudinary/cloudinary.service";
import { SlideSchema } from "./trangchu.entity/slide";
import { MemorySchema } from "./trangchu.entity/kyNiemKH";
import { MemoryService } from "./memory.service";
import { InformationSchema } from "./trangchu.entity/infoRes";
import { ThucdonController } from "./thucdon/thucdon.controller";
import { FooterService } from "./footer/footer.service";
import { FooterSchema } from "./trangchu.entity/footer";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    FoodModule,
    MongooseModule.forFeature([{ name: "Memory", schema: MemorySchema }]),
    MongooseModule.forFeature([{ name: "Slide", schema: SlideSchema }]),
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    MongooseModule.forFeature([{ name: "Footer", schema: FooterSchema }]),
    MongooseModule.forFeature([
      { name: "Information", schema: InformationSchema },
    ]),
    CloudinaryModule,
  ],
  controllers: [AppController, FoodController, ThucdonController],
  providers: [
    AppService,
    FoodService,
    MemoryService,
    CloudinaryProvider,
    CloudinaryService,
    FooterService,
  ],
})
export class AppModule {}
