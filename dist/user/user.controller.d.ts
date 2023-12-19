import { UserService } from "./user.service";
import { LoginDTO, UserCheck, UserDTO } from "./entity/user.dto";
import { Response, Request } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
import { MailerService } from "@nestjs-modules/mailer";
export declare class UserController {
    private userService;
    private readonly appService;
    private readonly footerService;
    private mailService;
    constructor(userService: UserService, appService: AppService, footerService: FooterService, mailService: MailerService);
    signup(userDTO: UserDTO): Promise<{
        token: string;
    }>;
    login(loginDTO: LoginDTO, res: Response, session: Record<string, any>): Promise<void>;
    loginPage(res: Response): Promise<void>;
    xacNhanPage(res: Response, session: Record<string, any>, userName: string, req: Request): Promise<void>;
    checkMaXacNhan(res: Response, ma: UserCheck, userName: string, session: Record<string, any>): Promise<void>;
}
