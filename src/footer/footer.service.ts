import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Footer } from "src/trangchu.entity/footer";

@Injectable()
export class FooterService {
  constructor(
    @InjectModel(Footer.name)
    private footerEntity: mongoose.Model<Footer>,
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
}
