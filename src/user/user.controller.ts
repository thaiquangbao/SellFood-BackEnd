import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  Session,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDTO, UserCheck, UserDTO } from "./entity/user.dto";
import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { Category } from "src/food/entity/food.entity";
import { MailerService } from "@nestjs-modules/mailer";
let randomMa = "";
@Controller("user")
export class UserController {
  constructor(
    private userService: UserService,
    private readonly appService: AppService,
    private readonly footerService: FooterService,
    private mailService: MailerService,
  ) {}
  @Post("signup")
  signup(@Body() userDTO: UserDTO): Promise<{ token: string }> {
    return this.userService.signUp(userDTO);
  }
  @Post("login/accept")
  login(
    @Body() loginDTO: LoginDTO,
    @Res() res: Response,
    @Session() session: Record<string, any>,
  ) {
    const result = this.userService.loGin(loginDTO);
    result
      .then(async (e) => {
        if (e) {
          if (randomMa.trim() !== "" || randomMa.trim() === "") {
            const reset = generateRandomString(6);
            randomMa = reset;
          }
          await this.mailService.sendMail({
            to: e.email,
            from: "haisancomnieuphanthiet@gmail.com",
            subject: "Welcome to BOMRESTAURANT",
            html: `<b>BOM RESTAURANT: Mã xác nhận của bạn là ${randomMa}</b>`,
            context: {
              name: e.userName,
            },
          });
          session.authenticated = true;
          session.userName = e.userName;
          res.json({
            code: 200,
            session: session.id,
            sessionN: session.userName,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
  @Get("login")
  async loginPage(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    return res.render("users/login", { slides, slideOne, footers, Category });
  }
  @Get("login/xacnhan/:userName/:sessionId")
  async xacNhanPage(
    @Res() res: Response,
    @Session() session: Record<string, any>,
    @Param("userName") userName: string,
  ) {
    const slides = await this.appService.findAllSlide();
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    const user = await this.userService.findOneUserName(userName);
    res.render("users/formXacNhan", {
      user,
      slides,
      slideOne,
      footers,
      Category,
    });
  }

  @Post("checkMa/:userName")
  async checkMaXacNhan(
    @Res() res: Response,
    @Body() ma: UserCheck,
    @Param("userName") userName: string,
  ) {
    if (ma.vertical === randomMa) {
      const result = await this.userService.xacThuc(userName);
      res.json({ code: 200, token: result.token, ver: randomMa });
      randomMa = "";
    } else {
      res.json({ code: 500, ver: randomMa });
    }
  }
}
//Tp0964587504
function generateRandomString(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
