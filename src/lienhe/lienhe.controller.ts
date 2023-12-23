import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { ReplyDTO } from "./entity/lienhe.dto";
import { LienheService } from "./lienhe.service";
@Controller("lien-he")
export class LienheController {
  constructor(
    private appService: AppService,
    private footerService: FooterService,
    private linheService: LienheService,
  ) {}
  @Get()
  async lienhePage(@Res() res: Response) {
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    res.render("lienhe/lien-he", { slideOne, footers });
  }
  @Post("up-reply")
  async upReply(@Res() res: Response, @Body() reply: ReplyDTO) {
    const result = await this.linheService.insertLH(reply);
    if (result) {
      res.json({ code: 200 });
    } else {
      res.json({ code: 500 });
    }
  }
}
