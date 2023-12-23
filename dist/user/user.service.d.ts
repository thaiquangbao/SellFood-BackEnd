/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { User } from "./entity/user.entity";
import { Model } from "mongoose";
import { LoginDTO, UpdateEmail, UpdatePassWord, UserDTO } from "./entity/user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class UserService {
    private userEntity;
    private jwtService;
    constructor(userEntity: Model<User>, jwtService: JwtService);
    signUp(user: UserDTO): Promise<{
        token: string;
    }>;
    loGin(loginDTO: LoginDTO): Promise<User>;
    xacThuc(userName: string): Promise<{
        token: string;
    }>;
    findOneUserName(userName: string): Promise<User>;
    findOneByIdU(id: string): Promise<User | null>;
    checkSession({ session, }: Record<string, any>): Promise<{
        token: string;
        maXN: string;
    }>;
    updateUser(id: string, user: UpdateEmail): Promise<UpdateEmail>;
    checkPassword(id: string, users: UpdatePassWord): Promise<boolean>;
    updatePassWord(id: string, passWord: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
