import { UserService } from "./user.service";
import { LoginDTO, UserDTO } from "./entity/user.dto";
import { Response } from "express";
import { AppService } from "src/app.service";
import { FooterService } from "src/footer/footer.service";
export declare class UserController {
    private userService;
    private readonly appService;
    private readonly footerService;
    constructor(userService: UserService, appService: AppService, footerService: FooterService);
    signup(userDTO: UserDTO): Promise<{
        token: string;
    }>;
    login(loginDTO: LoginDTO, res: Response): void;
    loginPage(res: Response): Promise<void>;
}
