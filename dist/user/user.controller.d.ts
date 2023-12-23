import { UserService } from "./user.service";
import { LoginDTO, UpdateEmail, UpdatePassWord, UserCheck, UserDTO } from "./entity/user.dto";
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
    xacNhanPage(res: Response, session: Record<string, any>, userName: string): Promise<void>;
    sendMa(res: Response, session: Record<string, any>, user: UserDTO): Promise<void>;
    checkMaXacNhan(res: Response, ma: UserCheck, userName: string, session: Record<string, any>): Promise<void>;
    account(res: Response, req: Request): Promise<void>;
    passWordPage(res: Response, req: Request): Promise<void>;
    email(res: Response, req: Request, user: UpdateEmail): Promise<void>;
    password(res: Response, req: Request, user: UpdatePassWord): Promise<void>;
    checkPass(res: Response, req: Request, user: UpdatePassWord): Promise<void>;
}
