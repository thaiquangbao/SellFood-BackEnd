import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Footer } from "src/trangchu.entity/footer";
import { Icons } from "src/trangchu.entity/icons";

@Injectable()
export class FooterService {
  constructor(
    @InjectModel(Footer.name)
    private footerEntity: mongoose.Model<Footer>,
    @InjectModel(Icons.name)
    private iconsEntity: mongoose.Model<Icons>,
  ) {}
  async findAllFooter(): Promise<Footer[]> {
    const footers = await this.footerEntity.find();
    return footers;
  }
  async insertFooter(footer: Footer): Promise<Footer> {
    const newfooter = await this.footerEntity.create(footer);
    return newfooter;
  }
  async findOneFooter(id: string): Promise<Footer> {
    const footer = await this.footerEntity.findById(id);
    return footer;
  }
  async updateFooter(id: string, footer: Footer): Promise<Footer> {
    const result = await this.footerEntity.findByIdAndUpdate(id, footer, {
      new: true,
      runValidators: true,
    });
    return result;
  }
  //Icons
  async findAllIcons(): Promise<Icons[]> {
    const icons = await this.iconsEntity.find();
    return icons;
  }
  async insertIcons(icons: Icons): Promise<Icons> {
    const newicons = await this.iconsEntity.create(icons);
    return newicons;
  }
  async findOneIcons(id: string): Promise<Icons> {
    const icons = await this.iconsEntity.findById(id);
    return icons;
  }
  async updateIcons(id: string, icons: Icons): Promise<Icons> {
    const result = await this.iconsEntity.findByIdAndUpdate(id, icons, {
      new: true,
      runValidators: true,
    });
    return result;
  }
  async deleteIcons(id: string): Promise<boolean> {
    this.iconsEntity.findByIdAndDelete(id);
    return true;
  }
}
