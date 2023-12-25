import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FoodModule } from "./food/food.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
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
import { UserModule } from "./user/user.module";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { UserSchema } from "./user/entity/user.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { MiddlewareService } from "./middleware/middleware.service";
import { IconsSchema } from "./trangchu.entity/icons";
import { MailerService } from "./mailer/mailer.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { SessionmiddlewareService } from "./sessionmiddleware/sessionmiddleware.service";
import { LienheService } from "./lienhe/lienhe.service";
import { LienheController } from "./lienhe/lienhe.controller";
import { ReplySchema } from "./lienhe/entity/lienhe.entity";
import { GioiThieuService } from "./gioi-thieu/gioi-thieu.service";
import { GioiThieuController } from "./gioi-thieu/gioi-thieu.controller";
import { IntroductionSchema } from "./gioi-thieu/entity/gioi-thieu.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        secure: false,
        auth: {
          user: process.env.USERMAILER,
          pass: process.env.PASSWORDMAILER,
        },
      },
    }),
    FoodModule,
    MongooseModule.forFeature([{ name: "Memory", schema: MemorySchema }]),
    MongooseModule.forFeature([{ name: "Slide", schema: SlideSchema }]),
    MongooseModule.forFeature([{ name: "Food", schema: FoodSchema }]),
    MongooseModule.forFeature([{ name: "Footer", schema: FooterSchema }]),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    MongooseModule.forFeature([{ name: "Icons", schema: IconsSchema }]),
    MongooseModule.forFeature([{ name: "Reply", schema: ReplySchema }]),
    MongooseModule.forFeature([
      { name: "Introduction", schema: IntroductionSchema },
    ]),
    MongooseModule.forFeature([
      { name: "Information", schema: InformationSchema },
    ]),
    CloudinaryModule,
    UserModule,
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
  ],
  controllers: [
    AppController,
    FoodController,
    ThucdonController,
    UserController,
    LienheController,
    GioiThieuController,
  ],
  providers: [
    AppService,
    FoodService,
    MemoryService,
    CloudinaryProvider,
    CloudinaryService,
    FooterService,
    UserService,
    MiddlewareService,
    MailerService,
    SessionmiddlewareService,
    LienheService,
    GioiThieuService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MiddlewareService)
      .exclude(
        { path: "/", method: RequestMethod.GET },
        { path: "/lien-he", method: RequestMethod.GET },
        { path: "/lien-he/up-reply", method: RequestMethod.POST },
      )
      .forRoutes(
        FoodController,
        LienheController,
        AppController,
        {
          path: "/user/signup",
          method: RequestMethod.POST,
        },
        {
          path: "/user/account/general",
          method: RequestMethod.GET,
        },
        {
          path: "/user/account/password",
          method: RequestMethod.GET,
        },
        {
          path: "/user/updateEmail",
          method: RequestMethod.PUT,
        },
        {
          path: "/user/checkPassWord",
          method: RequestMethod.POST,
        },
        {
          path: "/user/updatePassword",
          method: RequestMethod.PUT,
        },
        {
          path: "/gioi-thieu/insert",
          method: RequestMethod.POST,
        },
        {
          path: "/gioi-thieu/introductions",
          method: RequestMethod.GET,
        },
      );
    consumer.apply(SessionmiddlewareService).forRoutes({
      path: "/user/login/xacnhan/:userName/:sessionId",
      method: RequestMethod.GET,
    });
  }
}
