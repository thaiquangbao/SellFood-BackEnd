import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { UserCheck } from "src/user/entity/user.dto";
@Injectable()
export class MiddlewareService implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;

    if (token) {
      try {
        const user = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        }) as UserCheck;
        req.user = user.id;
        next();
      } catch (err) {
        return res.json({
          code: 403,
          message: "Bạn cần đăng nhập trước khi vào",
        });
      }
    } else {
      // Nếu không có token, chuyển hướng hoặc xử lý theo logic của bạn
      return res.redirect("/");
    }
  }
}
