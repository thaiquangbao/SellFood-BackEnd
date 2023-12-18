import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserService } from "src/user/user.service";

@Injectable()
export class SessionmiddlewareService implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const ses = req.params.sessionId;

    // Chuyển tham số session vào hàm checkSession
    const newSession = await this.userService.checkSession({
      session: req.session,
    });
    if (newSession.token === ses) {
      next();
    } else {
      res.redirect("/user/login");
    }
  }
}
