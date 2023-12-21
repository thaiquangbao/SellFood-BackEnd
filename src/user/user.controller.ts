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
  async login(
    @Body() loginDTO: LoginDTO,
    @Res() res: Response,
    @Session() session: Record<string, any>,
  ) {
    const result = this.userService.loGin(loginDTO);
    result
      .then(async (e) => {
        if (e) {
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
    const sessionId = session.id;
    res.render("users/formXacNhan", {
      user,
      slides,
      slideOne,
      footers,
      Category,
      sessionId,
    });
  }
  @Post("sendEmail")
  async sendMa(
    @Res() res: Response,
    @Session() session: Record<string, any>,
    @Body() user: UserDTO,
  ) {
    //session.maHOA = generateRandomString(6);
    const findUser = this.userService.findOneUserName(user.userName);
    const result = await this.mailService.sendMail({
      to: (await findUser).email,
      from: "haisancomnieuphanthiet@gmail.com",
      subject: "Welcome to BOMRESTAURANT",
      html: `<b>BOM RESTAURANT: Mã xác nhận của bạn là ${session.maHOA}</b>`,
      context: {
        name: user.userName,
      },
    });
    if (result) {
      res.json({
        code: 200,
        message: "Kiểm tra hộp thư gmail để nhận mã xác nhận",
      });
    } else {
      res.json({ code: 500 });
    }
  }
  @Post("checkMa/:userName")
  async checkMaXacNhan(
    @Res() res: Response,
    @Body() ma: UserCheck,
    @Param("userName") userName: string,
    @Session() session: Record<string, any>,
  ) {
    if (ma.vertical === session.maHOA) {
      const result = await this.userService.xacThuc(userName);
      res.json({
        code: 200,
        token: result.token,
        session: session.maHOA,
      });
    } else {
      res.json({
        code: 500,
        session: session.maHOA,
      });
    }
  }
}
//Tp0964587504
// function generateRandomString(length: number): string {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters.charAt(randomIndex);
//   }

//   return result;
// }
