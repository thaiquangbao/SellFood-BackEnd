import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./entity/user.entity";
import { Model } from "mongoose";
import { LoginDTO, UserCheck, UserDTO } from "./entity/user.dto";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { MailerService } from "@nestjs-modules/mailer";
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userEntity: Model<User>,
    private jwtService: JwtService,
    private mailService: MailerService,
  ) {}
  vertical = generateRandomString(6);
  async signUp(user: UserDTO): Promise<{ token: string }> {
    const { userName, passWord, email } = user;
    const hashedPassword = await bcrypt.hash(passWord, 10);
    const insert = this.userEntity.create({
      userName,
      passWord: hashedPassword,
      email,
    });
    const token = this.jwtService.sign({ id: (await insert)._id });
    return { token };
  }
  async loGin(loginDTO: LoginDTO): Promise<User> {
    const { userName, passWord } = loginDTO;
    const findUserName = await this.userEntity.findOne({
      userName,
    });
    if (!findUserName) {
      throw new UnauthorizedException("Tài khoản or mật khẩu không đúng");
    }
    const checkPassword = await bcrypt.compare(
      passWord,
      (await findUserName).passWord,
    );
    if (!checkPassword) {
      throw new UnauthorizedException("Tài khoản or mật khẩu không đúng");
    }
    if (this.vertical !== "") {
      const reset = generateRandomString(6);
      this.vertical = reset;
    }
    await this.mailService.sendMail({
      to: findUserName.email,
      from: "haisancomnieuphanthiet@gmail.com",
      subject: "Welcome to BOMRESTAURANT",
      html: `<b>BOM RESTAURANT: Mã xác nhận của bạn là: ${this.vertical}</b>`,
      context: {
        name: findUserName.userName,
      },
    });
    return findUserName;
  }
  async xacThuc(ma: UserCheck, userName: string): Promise<{ token: string }> {
    const userId = this.userEntity.findOne({ userName: userName });
    if (ma.vertical === this.vertical) {
      const token = this.jwtService.sign({ id: (await userId).id });
      this.vertical = "";
      return { token };
    } else {
      throw new UnauthorizedException("Mã xác nhận không đúng");
    }
  }
  async findOneUserName(userName: string): Promise<User> {
    const user = this.userEntity.findOne({ userName: userName });
    return user;
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
