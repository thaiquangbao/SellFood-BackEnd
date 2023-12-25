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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
interface Food {
    name: string;
}
interface CategoryFood {
    nameCate: string;
    food: Array<Food>;
}
export declare class Introduction {
    title: string;
    noiDung: string;
    foods: Array<CategoryFood>;
    img: string;
    noiDungKhac: string;
}
export declare const IntroductionSchema: import("mongoose").Schema<Introduction, import("mongoose").Model<Introduction, any, any, any, import("mongoose").Document<unknown, any, Introduction> & Introduction & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Introduction, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Introduction>> & import("mongoose").FlatRecord<Introduction> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
