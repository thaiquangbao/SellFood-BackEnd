import { Body, Controller, Get, Param, Post, Put, Res } from "@nestjs/common";
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
    const foods = await this.foodService.findAllFood();
    const slides = await this.appService.findAllSlide();
    const memories = await this.memoryService.findAllMemory();
    const informations = await this.appService.findAllInformation();
    return res.render("index", { foods, slides, memories, informations });
  }
  @Get("slide")
  async getListSlide(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    return res.render("trang-chu/slider", { slides });
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
    return res.render("trang-chu/updateslider", { slide, slides });
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
    return res.render("trang-chu/memory/listmemory", { memories, slides });
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
    return res.render("trang-chu/memory/updateMemory", { slides, memory });
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
    return res.render("trang-chu/gioithieu/listGioiThieu", {
      informations,
      slides,
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
    return res.render("trang-chu/gioithieu/updateGioiThieu", {
      information,
      slides,
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
    return res.render("trang-chu/footer/listFooter", { footers, slides });
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
    return res.render("trang-chu/gioithieu/updateGioiThieu", {
      footer,
      slides,
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
}
