import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { ReplyDTO } from "./entity/lienhe.dto";
import { MailerService } from "@nestjs-modules/mailer";
export declare class LienheController {
    private appService;
    private footerService;
    private mailService;
    constructor(appService: AppService, footerService: FooterService, mailService: MailerService);
    lienhePage(res: Response): Promise<void>;
    upReply(res: Response, reply: ReplyDTO): Promise<void>;
}
