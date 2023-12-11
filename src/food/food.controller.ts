import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FoodService } from "./food.service";
import { Category } from "./entity/food.entity";
import { FoodDTO, FoodDTOUpdate, ImgCloud } from "./dto/food.dto";
import { Response } from "express";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";

@Controller("foods")
export class FoodController {
  constructor(
    private foodService: FoodService,
    private cloudinaryService: CloudinaryService,
    private appService: AppService,
    private footerService: FooterService,
  ) {}

  @Post("uploads")
  @UseInterceptors(FileInterceptor("file"))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    try {
      const result = await this.cloudinaryService.uploadFileFromBuffer(
        file.buffer,
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  @Post("deleteCloud")
  async deleteImage(@Body() deleteImageDto: ImgCloud, @Res() res: Response) {
    try {
      const { imgDTO } = deleteImageDto;
      const result = await this.cloudinaryService.deleteImage(imgDTO);
      if (result.result === "ok") {
        res.json({ code: 200 });
      } else {
        res.json({ code: 500 });
      }
    } catch (error) {
      throw new Error("Error deleting image from Cloudinary");
    }
  }
  @Get()
  async getAllFood(@Res() res: Response) {
    const foods = await this.foodService.findAllFood();
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    return res.render("foods/listFoods", { foods, slides, footers });
  }
  @Get("formAddFoods")
  async getFormFood(@Res() res: Response) {
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    return res.render("foods/createFoods", { Category, slides, footers });
  }
  @Post("insertFood")
  async addFood(@Body() food: FoodDTO, @Res() res: Response) {
    const result = await this.foodService.insertFood(food);
    if (result) {
      res.json({
        code: 200,
        message: "Món " + food.nameFood + " đã được thêm vào thức đơn ",
      });
    } else {
      res.json({ code: 500 });
    }
  }
  @Get(":id")
  async findByIdFood(@Param("id") id: string, @Res() res: Response) {
    const food = await this.foodService.findOneById(id);
    const slides = await this.appService.findAllSlide();
    const footers = await this.footerService.findAllFooter();
    return res.render("foods/updateFood", { food, Category, slides, footers });
  }
  @Delete("deleteFood/:id")
  async deleteOneFood(@Param("id") id: string): Promise<void> {
    this.foodService.deleteOne(id);
  }
  @Put("updateFood/:id")
  async updateFood(
    @Param("id") id: string,
    @Body() food: FoodDTOUpdate,
    @Res() res: Response,
  ) {
    const result = await this.foodService.updateFood(id, food);
    if (result) {
      res.json({
        code: 200,
        message: "Cập nhật món " + food.nameFood + " thành công",
      });
    } else {
      res.json({
        code: 500,
        message: "Cập nhật món " + food.nameFood + " không thành công",
      });
    }
  }
  @Post("checkName")
  async checkNameFood(@Body() food: FoodDTO, @Res() res: Response) {
    const checkName = await this.foodService.checkNameFood(food.nameFood);
    if (checkName === true) {
      res.json({
        code: 500,
        message:
          "Món " + food.nameFood + " đã tồn tại trong thực đơn của nhà hàng ",
      });
    } else {
      res.json({ code: 200 });
    }
  }
  @Delete("deleteCheckBox")
  async deleteAllFood(@Body() food: FoodDTO, @Res() res: Response) {
    const result = await this.foodService.deleteAll(food.ids);
    if (result.deletedCount > 0) {
      res.json({ code: 200 });
    } else {
      res.json({ code: 500 });
    }
  }
  @Post("deleteAllImg")
  async deleteAllI(@Body() food: FoodDTO) {
    food.imgs.forEach(async (e) => {
      const imageUrl = e;
      const parts = imageUrl.split("/");
      const result = parts.slice(-2).join("/"); // Lấy hai phần tử cuối cùng và nối lại
      const cut = result.split(".");
      const deleteImageDto = cut[0];
      await this.cloudinaryService.deleteImage(deleteImageDto);
    });
  }
}
