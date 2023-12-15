import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./entity/user.entity";
import { Model } from "mongoose";
import { LoginDTO, UserDTO } from "./entity/user.dto";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userEntity: Model<User>,
    private jwtService: JwtService,
  ) {}
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
  async loGin(loginDTO: LoginDTO): Promise<{ token: string }> {
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
    const token = this.jwtService.sign({ id: (await findUserName).id });
    return { token };
  }
}
