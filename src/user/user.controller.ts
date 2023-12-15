import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDTO, UserDTO } from "./entity/user.dto";
import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";

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
          res.status(200).json({ token: e.token });
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
    return res.render("users/login", { slides, slideOne, footers });
  }
}
