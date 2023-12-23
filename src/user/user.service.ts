import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./entity/user.entity";
import { Model } from "mongoose";
import {
  LoginDTO,
  UpdateEmail,
  UpdatePassWord,
  UserDTO,
} from "./entity/user.dto";
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

    return findUserName;
  }
  async xacThuc(userName: string): Promise<{ token: string }> {
    const userId = this.userEntity.findOne({ userName: userName });
    const token = this.jwtService.sign({ id: (await userId).id });
    return { token };
  }
  async findOneUserName(userName: string): Promise<User> {
    const user = this.userEntity.findOne({ userName: userName });
    return user;
  }
  async findOneByIdU(id: string): Promise<User | null> {
    const user = this.userEntity.findById(id);
    return user;
  }
  async checkSession({
    session,
  }: Record<string, any>): Promise<{ token: string; maXN: string }> {
    session.maHOA = generateRandomString(6);
    const maHoa = session.maHOA;
    const sessionId = session.id;
    return { token: sessionId, maXN: maHoa };
  }
  async updateUser(id: string, user: UpdateEmail): Promise<UpdateEmail> {
    return this.userEntity.findByIdAndUpdate(id, user);
  }
  async checkPassword(id: string, users: UpdatePassWord): Promise<boolean> {
    const user = this.userEntity.findById(id);
    const checkPassword = await bcrypt.compare(
      users.passWord,
      (await user).passWord,
    );
    return checkPassword;
  }
  async updatePassWord(id: string, passWord: string) {
    const hashedPassword = await bcrypt.hash(passWord, 10);
    const update = await this.userEntity.findByIdAndUpdate(id, {
      passWord: hashedPassword,
    });
    return update;
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
