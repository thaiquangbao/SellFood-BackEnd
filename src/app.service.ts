import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Slide } from "./trangchu.entity/slide";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Slide.name)
    private slideEntity: mongoose.Model<Slide>,
  ) {}
  async findAllSlide(): Promise<Slide[]> {
    const slides = await this.slideEntity.find();
    return slides;
  }
  async insertSlide(slide: Slide): Promise<Slide> {
    const newslide = await this.slideEntity.create(slide);
    return newslide;
  }
  async findOneSlide(id: string): Promise<Slide> {
    const slide = await this.slideEntity.findById(id);
    return slide;
  }
  async updateSlide(id: string, slide: Slide): Promise<Slide> {
    const result = await this.slideEntity.findByIdAndUpdate(id, slide, {
      new: true,
      runValidators: true,
    });
    return result;
  }
}
