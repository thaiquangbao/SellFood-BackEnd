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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    FoodModule,
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    CloudinaryModule,
  ],
  controllers: [AppController, FoodController],
  providers: [AppService, FoodService, CloudinaryProvider, CloudinaryService],
})
export class AppModule {}
