import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
export class UserDTO {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: "Vui lòng điền đúng form email" })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  readonly passWord: string;
}
export class LoginDTO {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  readonly passWord: string;
}
