import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { GioiThieuService } from "./gioi-thieu.service";
import { Response } from "express";
import { Category } from "src/food/entity/food.entity";
import { IntroductionBody, IntroductionDTO } from "./dto/gioi-thieu.dto";
@Controller("gioi-thieu")
export class GioiThieuController {
  constructor(
    private appService: AppService,
    private footerService: FooterService,
    private introductionService: GioiThieuService,
  ) {}
  @Get()
  async gioiThieuPage(@Res() res: Response) {
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    const introduction = await this.introductionService.findOne(
      process.env.ID_INTRODUCTION,
    );
    res.render("gioiThieu/gioiThieu", {
      slideOne,
      footers,
      Category,
      introduction,
    });
  }
  @Post("insert")
  async insertPage(
    @Res() res: Response,
    @Body() introduction: IntroductionDTO,
  ) {
    const result = this.introductionService.insert(introduction);
    result
      .then((e) => {
        if (e) {
          res.json({ code: 200, data: e });
        } else {
          res.json({ code: 500 });
        }
      })
      .catch((error) => {
        res.json({ code: 400, err: error });
      });
  }
  @Get("introductions")
  async gioiThieuQLPage(@Res() res: Response) {
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    const introduction = await this.introductionService.findOne(
      process.env.ID_INTRODUCTION,
    );
    res.render("gioiThieu/qlIntroduction", {
      slideOne,
      footers,
      Category,
      introduction,
    });
  }
  @Get("introductions/update")
  async updateQLPage(@Res() res: Response) {
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    const introduction = await this.introductionService.findOne(
      process.env.ID_INTRODUCTION,
    );
    res.render("gioiThieu/updateIntroduction", {
      slideOne,
      footers,
      Category,
      introduction,
    });
  }
  // Trong controller
  @Patch("introductions/update/name")
  async update(
    @Res() res: Response,
    @Body("nameCate") nameCate: string,
    @Body("nameFood") nameFood: string,
    @Body() name: { newName: string }, // Sửa thành truyền một đối tượng chứa newName
  ) {
    const result = await this.introductionService.updateName(
      "65890fb52118b837792c9de0",
      nameCate,
      nameFood,
      name.newName, // Truyền newName từ đối tượng name
    );
    if (result === null) {
      res.json({ code: 500 });
    } else {
      res.json({ code: 200 });
    }
  }
  @Patch("introductions/update/nameCate")
  async updateCate(
    @Res() res: Response,
    @Body("nameCate") nameCate: string,
    @Body() name: { newName: string }, // Sửa thành truyền một đối tượng chứa newName
  ) {
    const result = await this.introductionService.updateCate(
      "65890fb52118b837792c9de0",
      nameCate,
      name.newName, // Truyền newName từ đối tượng name
    );
    if (result === null) {
      res.json({ code: 500 });
    } else {
      res.json({ code: 200 });
    }
  }
  @Put("introductions/update/:id")
  async updateBody(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() introduction: IntroductionBody, // Sửa thành truyền một đối tượng chứa newName
  ) {
    const result = await this.introductionService.update(id, introduction);
    if (result === null) {
      res.json({ code: 500 });
    } else {
      res.json({ code: 200 });
    }
  }
}
