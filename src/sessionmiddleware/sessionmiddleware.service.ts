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
      const cookirs = req.headers;
      cookirs.tk = generateRandomString(6);
      next();
    } else {
      res.redirect("/user/login");
    }
  }
}
function generateRandomString(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
