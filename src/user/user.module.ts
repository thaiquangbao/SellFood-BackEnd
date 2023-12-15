import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./entity/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { FooterService } from "src/footer/footer.service";
import { FooterSchema } from "src/trangchu.entity/footer";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { SlideSchema } from "src/trangchu.entity/slide";
import { InformationSchema } from "src/trangchu.entity/infoRes";
import { FoodService } from "src/food/food.service";
import { FoodController } from "src/food/food.controller";
import { FoodSchema } from "src/food/entity/food.entity";
import { MemorySchema } from "src/trangchu.entity/kyNiemKH";
import { MemoryService } from "src/memory.service";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>("JWT_SECRET"),
          signOptions: {
            expiresIn: config.get<string | number>("JWT_EXPIRES"),
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    MongooseModule.forFeature([{ name: "Memory", schema: MemorySchema }]),
    MongooseModule.forFeature([{ name: "Slide", schema: SlideSchema }]),
    MongooseModule.forFeature([{ name: "Footer", schema: FooterSchema }]),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: "Information", schema: InformationSchema },
    ]),
  ],
  controllers: [UserController, AppController, FoodController],
  providers: [
    UserService,
    FooterService,
    AppService,
    FoodService,
    MemoryService,
    CloudinaryService,
  ],
})
export class UserModule {}
