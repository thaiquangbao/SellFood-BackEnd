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
import mongoose from "mongoose";
import { Slide } from "./trangchu.entity/slide";
import { Information } from "./trangchu.entity/infoRes";
export declare class AppService {
    private slideEntity;
    private informationEntity;
    constructor(slideEntity: mongoose.Model<Slide>, informationEntity: mongoose.Model<Information>);
    findAllSlide(): Promise<Slide[]>;
    insertSlide(slide: Slide): Promise<Slide>;
    findOneSlide(id: string): Promise<Slide>;
    updateSlide(id: string, slide: Slide): Promise<Slide>;
    findAllInformation(): Promise<Information[]>;
    insertInformation(information: Information): Promise<Information>;
    findOneInformation(id: string): Promise<Information>;
    updateInformation(id: string, information: Information): Promise<Information>;
}
