import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { FoodService } from "./food/food.service";
import { SlideDTO, UpdateSlideDTO } from "./trangchu.entity/dto/slideDTO";
//import { Request } from 'express';
import { MemoryDTO, UpdateMemoryDTO } from "./trangchu.entity/dto/memoryDTO";
import { MemoryService } from "./memory.service";
import { InfoResDTO, UpdateInfoResDTO } from "./trangchu.entity/dto/infoResDTO";
import { FooterService } from "./footer/footer.service";
import { FooterDTO, NewFooterDTO } from "./trangchu.entity/dto/footerDTO";
import { Category } from "./food/entity/food.entity";
import { IconDTO, IconUpdate } from "./trangchu.entity/dto/iconsDTO";
@Controller()
export class AppController {
  constructor(
    private readonly foodService: FoodService,
    private readonly appService: AppService,
    private readonly memoryService: MemoryService,
    private readonly footerService: FooterService,
  ) {}
  @Get()
  async getAllFood(@Res() res: Response) {
    const foods = await this.foodService.findAllFoodNB();
    const slides = await this.appService.findAllSlide();
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    const memories = await this.memoryService.findAllMemory();
    const informations = await this.appService.findAllInformation();
    const icons = await this.footerService.findAllIcons();
    return res.render("index", {
      foods,
      slides,
      memories,
      informations,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Get("slide")
  async getListSlide(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/slider", {
      slides,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Post("slide/insert")
  async insert(@Body() slide: SlideDTO) {
    const result = await this.appService.insertSlide(slide);
    return result;
  }
  @Get("slide/:id")
  async findOne(@Param("id") id: string, @Res() res: Response) {
    const slide = await this.appService.findOneSlide(id);
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/updateslider", {
      slide,
      slides,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Put("slide/update/:id")
  async update(
    @Param("id") id: string,
    @Body() slide: UpdateSlideDTO,
    @Res() res: Response,
  ) {
    const result = await this.appService.updateSlide(id, slide);
    if (result) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 500,
      });
    }
  }
  // Memory
  @Get("memory")
  async getListMemory(@Res() res: Response) {
    const memories = await this.memoryService.findAllMemory();
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/memory/listmemory", {
      memories,
      slides,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Post("memory/insert")
  async insertMem(@Body() memory: MemoryDTO) {
    const result = await this.memoryService.insertMemory(memory);
    return result;
  }
  @Get("memory/:id")
  async findOneMem(@Param("id") id: string, @Res() res: Response) {
    const memory = await this.memoryService.findOneMemory(id);
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/memory/updateMemory", {
      slides,
      memory,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Put("memory/update/:id")
  async updateMem(
    @Param("id") id: string,
    @Body() memory: UpdateMemoryDTO,
    @Res() res: Response,
  ) {
    const result = await this.memoryService.updateMemory(id, memory);
    if (result) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 500,
      });
    }
  }
  // Info
  @Get("information")
  async getListInformation(@Res() res: Response) {
    const informations = await this.appService.findAllInformation();
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/gioithieu/listGioiThieu", {
      informations,
      slides,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Post("information/insert")
  async insertInformation(@Body() information: InfoResDTO) {
    const result = await this.appService.insertInformation(information);
    return result;
  }
  @Get("information/:id")
  async findOneInfoResDTO(@Param("id") id: string, @Res() res: Response) {
    const information = await this.appService.findOneInformation(id);
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/gioithieu/updateGioiThieu", {
      information,
      slides,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Put("information/update/:id")
  async updateInfoResDTO(
    @Param("id") id: string,
    @Body() information: UpdateInfoResDTO,
    @Res() res: Response,
  ) {
    const result = await this.appService.updateInformation(id, information);
    if (result) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 500,
      });
    }
  }
  // Footer
  @Get("footer")
  async getListFooter(@Res() res: Response) {
    const footers = await this.footerService.findAllFooter();
    const slides = await this.appService.findAllSlide();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/footer/listFooter", {
      footers,
      slides,
      Category,
      slideOne,
      icons,
    });
  }
  @Post("footer/insert")
  async insertFooter(@Body() footer: FooterDTO) {
    const result = await this.footerService.insertFooter(footer);
    return result;
  }
  @Get("footer/:id")
  async findOneFooterDTO(@Param("id") id: string, @Res() res: Response) {
    const footer = await this.footerService.findOneFooter(id);
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    const slideOne = await this.appService.findSlideOne();
    const icons = await this.footerService.findAllIcons();
    return res.render("trang-chu/footer/formUpdateFooter", {
      footer,
      slides,
      footers,
      Category,
      slideOne,
      icons,
    });
  }
  @Put("footer/update/:id")
  async updateFooterDTO(
    @Param("id") id: string,
    @Body() footer: NewFooterDTO,
    @Res() res: Response,
  ) {
    const result = await this.footerService.updateFooter(id, footer);
    if (result) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 500,
      });
    }
  }
  //Icons
  @Get("footer/icons/formAdd")
  async formAdd(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    const slideOne = await this.appService.findSlideOne();
    const footers = await this.footerService.findAllFooter();
    const icons = await this.footerService.findAllIcons();
    res.render("trang-chu/Icons/createIcon", {
      slides,
      slideOne,
      footers,
      icons,
    });
  }
  @Post("footer/icons/insert")
  async addIcons(@Res() res: Response, @Body() icons: IconDTO) {
    const result = this.footerService.insertIcons(icons);
    if (result) {
      res.json({ code: 200 });
    } else {
      res.json({ code: 500 });
    }
  }
  @Get("footer/icons/:id")
  async formUpdate(@Res() res: Response, @Param("id") id: string) {
    const icon = this.footerService.findOneIcons(id);
    res.render("", { icon });
  }
  @Put("footer/icons/:id/update")
  async updateIcons(
    @Res() res: Response,
    @Param("id") id: string,
    @Body() icon: IconUpdate,
  ) {
    const icons = this.footerService.updateIcons(id, icon);
    if (icons) {
      res.json({ code: 200 });
    } else {
      res.json({ code: 500 });
    }
  }
  @Delete("footer/icons/delete/:id")
  async deleteIcons(@Res() res: Response, @Param("id") id: string) {
    const result = await this.footerService.deleteIcons(id);
    if (result === true) {
      res.json({ code: 200 });
    } else {
      res.json({ code: 500 });
    }
  }
}
