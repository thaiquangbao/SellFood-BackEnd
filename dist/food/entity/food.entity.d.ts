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
    BREAKFAST = "\u0102N S\u00C1NG",
    STARTERS = "KHAI V\u1ECA",
    RICE = "C\u01A0M",
    SPRINGROLLS = "SPRING ROLLS",
    PANCAKE = "B\u00C1NH X\u00C8O",
    PORRIDGE = "CH\u00C1O",
    SOUP = "SOUP",
    SOUPV = "SOUP VI\u1EC6T NAM",
    LOBSTER = "CRAB-LOBSTER",
    HOTPOT = "L\u1EA8U",
    CLAM = "CLAM-NAIL",
    THAIFOOD = "M\u00D3N TH\u00C1I",
    VEGETABLE = "RAU",
    VEGAN = "M\u00D3N CHAY",
    CHIEN = "C\u01A0M CHI\u00CAN",
    PHO = "PH\u1EDE",
    FISH = "C\u00C1C M\u00D3N C\u00C1",
    CHICKEN = "C\u00C1C M\u00D3N G\u00C0",
    BEEF = "C\u00C1C M\u00D3N B\u00D2",
    TOM = "C\u00C1C M\u00D3N T\u00D4M",
    MUC = "C\u00C1C M\u00D3N M\u1EF0C",
    PORK = "C\u00C1C M\u00D3N HEO",
    MI = "M\u00CC",
    SALAD = "SALAD",
    SANDWICH = "SANDWICH",
    SPAGHETTIS = "SPAGHETTI",
    DESSERT = "TR\u00C1NG MI\u1EC6NG",
    DRINKING = "TH\u1EE8C U\u1ED0NG"
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
