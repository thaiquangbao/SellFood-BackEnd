import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDTO, UserCheck, UserDTO } from "./entity/user.dto";
import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { Category } from "src/food/entity/food.entity";

@Controller("user")
export class UserController {
  constructor(
    private userService: UserService,
    private readonly appService: AppService,
    private readonly footerService: FooterService,
  ) {}
  @Post("signup")
  signup(@Body() userDTO: UserDTO): Promise<{ token: string }> {
    return this.userService.signUp(userDTO);
  }
  @Post("login/accept")
  login(@Body() loginDTO: LoginDTO, @Res() res: Response) {
    const result = this.userService.loGin(loginDTO);
    result
      .then((e) => {
        if (e) {
          res.json({ code: 200 });
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
  @Get("login/xacnhan/:userName")
  async xacNhanPage(@Res() res: Response, @Param("userName") userName: string) {
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
    const result = await this.userService.xacThuc(ma, userName);
    if (result.token) {
      res.json({ code: 200, token: result.token });
    } else {
      res.json({ code: 500 });
    }
  }
}
//Tp0964587504
