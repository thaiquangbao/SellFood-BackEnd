import { AppService } from "src/app.service";
import { Response } from "express";
export declare class ThucdonController {
    private appService;
    constructor(appService: AppService);
    thucDon(res: Response): Promise<void>;
}
