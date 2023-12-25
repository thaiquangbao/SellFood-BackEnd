import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { GioiThieuService } from "./gioi-thieu.service";
import { Response } from "express";
import { IntroductionDTO } from "./dto/gioi-thieu.dto";
export declare class GioiThieuController {
    private appService;
    private footerService;
    private introductionService;
    constructor(appService: AppService, footerService: FooterService, introductionService: GioiThieuService);
    gioiThieuPage(res: Response): Promise<void>;
    insertPage(res: Response, introduction: IntroductionDTO): Promise<void>;
    gioiThieuQLPage(res: Response): Promise<void>;
    updateQLPage(res: Response): Promise<void>;
}
