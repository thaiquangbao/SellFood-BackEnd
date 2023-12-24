import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { ReplyDTO } from "./entity/lienhe.dto";
import { LienheService } from "./lienhe.service";
export declare class LienheController {
    private appService;
    private footerService;
    private lienheService;
    constructor(appService: AppService, footerService: FooterService, lienheService: LienheService);
    lienhePage(res: Response): Promise<void>;
    upReply(res: Response, reply: ReplyDTO): Promise<void>;
}
