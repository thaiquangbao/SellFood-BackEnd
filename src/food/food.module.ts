import { Module } from "@nestjs/common";
import { FoodController } from "./food.controller";
import { FoodService } from "./food.service";
import { MongooseModule } from "@nestjs/mongoose";
import { FoodSchema } from "./entity/food.entity";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { CloudinaryProvider } from "src/cloudinary/cloudinary.provider";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    CloudinaryModule,
  ],
  controllers: [FoodController],
  providers: [FoodService, CloudinaryService, CloudinaryProvider],
})
export class FoodModule {}
