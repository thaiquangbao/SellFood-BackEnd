export declare class UserDTO {
    readonly userName: string;
    readonly email: string;
    readonly passWord: string;
}
export declare class LoginDTO {
    readonly userName: string;
    readonly passWord: string;
}
export declare class UserCheck {
    readonly id: string;
    readonly userName: string;
    readonly vertical?: string;
}
export declare class UpdateEmail {
    readonly email: string;
}
export declare class UpdatePassWord {
    readonly passWord: string;
}
