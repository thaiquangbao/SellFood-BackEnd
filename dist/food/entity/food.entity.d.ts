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
export declare enum Category {
    STARTERS = "Khai V\u1ECB",
    FISH = "M\u00F3n C\u00E1",
    SEEFOOD = "M\u00F3n H\u1EA3i S\u1EA3n",
    CHIEN = "M\u00F3n C\u01A1m Chi\u00EAn",
    PHO = "M\u00F3n Ph\u1EDF",
    CHICKEN = "M\u00F3n G\u00E0",
    BEEF = "M\u00F3n B\u00F2",
    PORK = "M\u00F3n L\u1EE3n",
    MI = "M\u00F3n M\u00EC",
    SALAD = "M\u00F3n Salad",
    DESSERT = "M\u00F3n Tr\u00E1ng Mi\u1EC7ng",
    SANDWICH = "M\u00F3n SandWich",
    SPAGHETTIS = "M\u00F3n M\u00EC SPAGHETTIS",
    DRINKING = "Th\u1EE9c U\u1ED1ng"
}
export declare class Food {
    nameFood: string;
    price: number;
    describe: string;
    category: Category;
    img: string;
    noiBat: string;
    deXuat: string;
    ngonNgu?: string;
    deleted: boolean;
}
export declare const FoodSchema: import("mongoose").Schema<Food, import("mongoose").Model<Food, any, any, any, import("mongoose").Document<unknown, any, Food> & Food & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Food, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Food>> & import("mongoose").FlatRecord<Food> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Categories: {
    Category: typeof Category;
};
