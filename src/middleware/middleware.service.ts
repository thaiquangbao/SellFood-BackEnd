import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class MiddlewareService implements NestMiddleware {
  //  constructor(private readonly userService: UserService)
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies;
    console.log(token);
    next();
  }
}
