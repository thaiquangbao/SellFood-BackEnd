import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Slide } from "./trangchu.entity/slide";
import { Information } from "./trangchu.entity/infoRes";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Slide.name)
    private slideEntity: mongoose.Model<Slide>,
    @InjectModel(Information.name)
    private informationEntity: mongoose.Model<Information>,
  ) {}
  // Slider
  async findAllSlide(): Promise<Slide[]> {
    const slides = await this.slideEntity.find({ sttSlide: { $ne: 0 } });
    return slides;
  }
  async findSlideOne(): Promise<Slide> {
    const slide = await this.slideEntity.findOne({ sttSlide: 0 });
    return slide;
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
  // Info
  async findAllInformation(): Promise<Information[]> {
    const informations = await this.informationEntity.find();
    return informations;
  }
  async insertInformation(information: Information): Promise<Information> {
    const newinformation = await this.informationEntity.create(information);
    return newinformation;
  }
  async findOneInformation(id: string): Promise<Information> {
    const information = await this.informationEntity.findById(id);
    return information;
  }
  async updateInformation(
    id: string,
    information: Information,
  ): Promise<Information> {
    const result = await this.informationEntity.findByIdAndUpdate(
      id,
      information,
      {
        new: true,
        runValidators: true,
      },
    );
    return result;
  }
}
